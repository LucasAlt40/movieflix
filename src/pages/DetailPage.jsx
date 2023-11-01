import SideMenu from "../components/SideMenu";
import SideMenuSearch from "../components/SideMenuSearch";
import DetailsMovie from "../components/DetailsMovie";
import ResponsiveHeader from "../components/ResponsiveHeader";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { typeMedia } = useParams();
  return (
    <>
      <ResponsiveHeader />
      <main>
        <SideMenu />
        <DetailsMovie />
        <SideMenuSearch typeMedia={typeMedia} />
      </main>
    </>
  );
}
