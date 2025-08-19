"use client";

import { SearchPanelProvider } from "@/app/_contexts/SearchPanelContext";
import SearchPanelDrawer from "./components/SearchPanelDrawer";
import SearchPanelOpenButton from "./components/SearchPanelOpenButton";

function SearchButton() {
  return (
    <SearchPanelProvider>
      <SearchPanelOpenButton />
      <SearchPanelDrawer />
    </SearchPanelProvider>
  );
}

export default SearchButton;
