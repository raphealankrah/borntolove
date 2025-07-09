import Image from "next/image";
import Header from "../../components/header";
import FrontView from "../../components/frontview";
import AboutUs from "../../components/AboutUs";
import OurMission from "../../components/OurMission";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-gray-100 rounded-[30px] mt-9 mb-15 py-10">
        <Header />
        <FrontView />
        <AboutUs />
      </div>
      <div>
        <OurMission />
      </div>
      <Footer />
    </div>
  );
}
