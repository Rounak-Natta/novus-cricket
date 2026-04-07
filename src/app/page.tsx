import BplStats from "@/components/BplStats";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import OurPlayers from "@/components/OurPlayers";
import PlayerSlider from "@/components/PlayerSlider";
import Sponsors from "@/components/Sponsors";
import TeamNews from "@/components/TeamNews";
import TicketBanner from "@/components/TicketBanner";
import UpcomingMatch from "@/components/UpcomingMatch";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroCarousel/>
    <UpcomingMatch/>
    <OurPlayers/>
    <TeamNews/>
    <PlayerSlider/>
    <TicketBanner/>
    <BplStats/>
    <Sponsors/>
    <Footer/>
    </>
  );
}
