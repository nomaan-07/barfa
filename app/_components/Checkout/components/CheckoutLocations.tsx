"use client";

import { PROVINCES } from "@/app/_data/provinces";
import { getCities } from "@/app/_lib/actions";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Spinner } from "@heroui/spinner";
import { addToast } from "@heroui/toast";
import { Key, useEffect, useState } from "react";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";

type CityData = {
  name: string;
  state: string;
  latitude: string;
  longitude: string;
  id: number;
  state_id: number;
};

interface CheckoutLocationsProps {
  province: string;
  city: string;
  onSelectProvince: (key: Key | null) => void;
  onSelectCity: (city: Key | null) => void;
}

function CheckoutLocations({
  province,
  city,
  onSelectProvince,
  onSelectCity,
}: CheckoutLocationsProps) {
  const [cities, setCities] = useState<CityData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!province) {
      setCities([]);
      onSelectCity("");
      return;
    }

    async function fetchCities() {
      setLoading(true);
      setError(false);

      const provinceId = PROVINCES.find((p) => p.name === province)?.id;
      if (!provinceId) {
        setLoading(false);
        return;
      }

      try {
        const citiesData = await getCities(provinceId);

        // remove duplicates
        const uniqueCities = Array.from(
          new Map<string, CityData>(
            citiesData.map((city: CityData) => [city.name, city]),
          ).values(),
        );
        setCities(uniqueCities);
      } catch {
        setError(true);
        addToast({
          title: "مشکلی در دریافت شهرها پیش آمد",
          variant: "bordered",
          color: "danger",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, [province, onSelectCity]);

  return (
    <DoubleInputWrapper>
      <Autocomplete
        name="province"
        label="استان"
        placeholder="استان خود را انتخاب کنید"
        labelPlacement="outside-top"
        onSelectionChange={onSelectProvince}
        defaultSelectedKey={province}
        listboxProps={{
          emptyContent: "هیچ استانی یافت نشد",
        }}
      >
        {PROVINCES.map((province) => (
          <AutocompleteItem key={province.name}>
            {province.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        name="city"
        label="شهر"
        placeholder={
          province ? "شهر خود را انتخاب کنید" : "ابتدا استان را انتخاب کنید"
        }
        labelPlacement="outside-top"
        isDisabled={!province}
        disabledKeys={["loading-city", "error-city", "no-city"]}
        onSelectionChange={onSelectCity}
        defaultSelectedKey={city}
        listboxProps={{
          emptyContent: "هیچ شهری یافت نشد",
        }}
      >
        {loading ? (
          <AutocompleteItem
            key="loading-city"
            textValue="  در حال بارگذاری ..."
          >
            <div className="flex items-center gap-2">
              <Spinner color="primary" size="sm" />
              <span>در حال بارگذاری ...</span>
            </div>
          </AutocompleteItem>
        ) : error ? (
          <AutocompleteItem key="error-city">
            خطا در بارگذاری شهرها
          </AutocompleteItem>
        ) : cities.length > 0 ? (
          cities.map((city) => (
            <AutocompleteItem key={city.name}>{city.name}</AutocompleteItem>
          ))
        ) : (
          <AutocompleteItem key="no-city">هیچ شهری یافت نشد</AutocompleteItem>
        )}
      </Autocomplete>
    </DoubleInputWrapper>
  );
}

export default CheckoutLocations;
