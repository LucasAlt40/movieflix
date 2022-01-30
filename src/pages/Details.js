import React from "react";
import SideMenu from "../components/SideMenu";
import SideMenuSearch from "../components/SideMenuSearch";

export default function Details() {
  return (
    <main style={{ display: "flex", justifyContent: "space-between" }}>
      <SideMenu />
      <div>
        <h1 style={{ color: "#FFF" }}>Test</h1>
      </div>
      <SideMenuSearch />
    </main>
  );
}
