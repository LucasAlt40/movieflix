import CatalogHome from "../components/CatalogHome";
import ResponsiveHeader from "../components/ResponsiveHeader";
import SideMenu from "../components/SideMenu";
import SideMenuSearch from "../components/SideMenuSearch";

export default function HomePage() {
  return (
    <>
      <ResponsiveHeader />
      <main>
        <SideMenu activePageHome={true} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CatalogHome />
        </div>
        <SideMenuSearch />
      </main>
    </>
  );
}
