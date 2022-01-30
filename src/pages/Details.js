import React from "react";

import SideMenu from "../components/SideMenu";
import SideMenuSearch from "../components/SideMenuSearch";
import DetailsMovie from "../components/DetailsMovie";

export default function Details() {
  return (
    <main style={{ display: "flex", justifyContent: "space-between" }}>
      <SideMenu />
      <DetailsMovie />
      <SideMenuSearch />
    </main>
  );
}
