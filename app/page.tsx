import Banner from "./components/Banner";
import CTA from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Features />
      <Faq />
      <Pricing />
      <CTA />
      <Footer />
      </div>
    </>
  );
}
