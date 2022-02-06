import React from "react";

import SideMenu from "../components/SideMenu";
import SideMenuSearch from "../components/SideMenuSearch";
import DetailsMovie from "../components/DetailsMovie";

export default function Details() {
  return (
    <main style={{ display: "flex", justifyContent: "space-between", height: "100vh" }}>
      <SideMenu />
      <div style={{ margin: "4rem 280px" }}>
        <DetailsMovie />
      </div>
      <SideMenuSearch />
    </main>
  );
}
