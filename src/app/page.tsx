import Header from "./components/Header";
import Conversion from "./components/Conversion";
import { Connection } from "./components/Connection";
import Navbar from "./components/landing_page/Navbar";
import Hero from "./components/landing_page/Hero";
import Benefits from "./components/landing_page/Benefits";
import SectionTitle from "./components/landing_page/SectionTitle";
import Image from "next/image";
import Footer from "./components/landing_page/Footer";
import { benefitOne, benefitTwo } from "./components/landing_page/Data";
export default function Home() {
  return (
    // <>
    //   <Header>
    //     <Connection />
    //   </Header>
    //   <Conversion />
    // </>
    <>
      <Navbar />
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Footer />
    </>
  );
}
