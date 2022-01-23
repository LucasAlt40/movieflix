import React from "react";
import CatalogHome from "../components/CatalogHome";
import SideMenu from "../components/SideMenu";
import SideMenuSearch from "../components/SideMenuSearch";

export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "space-between" }}>
      <SideMenu />
      <CatalogHome />
      <SideMenuSearch />
    </main>
  );
}
