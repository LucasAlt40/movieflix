import React from "react";
import { useParams } from "react-router-dom";
import CatalogHome from "../components/CatalogHome";
import SideMenu from "../components/SideMenu";
import SideMenuSearch from "../components/SideMenuSearch";

export default function Home() {
  const {typeMedia} = useParams();
  return (
    <main style={{ display: "flex", justifyContent: "space-between" }}>
      <SideMenu activePageHome={true} />
      <div style={{ margin: "auto 280px" }}>
        <CatalogHome typeMedia={typeMedia} />
      </div>
      <SideMenuSearch typeMedia={typeMedia}/>
    </main>
  );
}
