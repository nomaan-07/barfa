"use client";

import { SearchPanelProvider } from "@/app/_contexts/SearchPanelContext";
import SearchPanelDrawer from "./components/SearchPanelDrawer";
import SearchPanelOpenButton from "./components/SearchPanelOpenButton";

function SearchPanel() {
  return (
    <SearchPanelProvider>
      <SearchPanelOpenButton />
      <SearchPanelDrawer />
    </SearchPanelProvider>
  );
}

export default SearchPanel;
