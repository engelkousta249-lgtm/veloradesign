import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CookieModal from "@/components/CookieModal";
import Services from "@/components/Services";
import Graphic from "@/components/Graphic";
import Packages from "@/components/Packages";
import Works from "@/components/Works";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Fx from "@/components/Fx";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Graphic />
        <Packages />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <CookieModal />
      <Fx />
    </>
  );
}
