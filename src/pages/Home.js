import React from "react";
import Sidebar from "../components/Sidebar";
import CatalogHome from "../components/CatalogHome";

export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "space-between" }}>
      <Sidebar />
      <CatalogHome />
      <Sidebar />
    </main>
  );
}
