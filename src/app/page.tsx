import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ForWhomSection from "@/components/ForWhomSection";
import FormatsSection from "@/components/FormatsSection";
import HeroSection from "@/components/HeroSection";
import MaterialsSection from "@/components/MaterialsSection";
import Nav from "@/components/Nav";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <span
          className="crane absolute top-80 -left-8 rotate-[-18deg] opacity-[0.04]"
          style={{ width: 140, height: 140 }}
        />
        <span
          className="crane absolute top-450 right-10 rotate-22 opacity-[0.05]"
          style={{ width: 90, height: 90 }}
        />
        <span
          className="crane absolute top-850 left-16 rotate-[-8deg] -scale-x-100 opacity-[0.04]"
          style={{ width: 120, height: 120 }}
        />
      </div>
      <Nav />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ForWhomSection />
        <ApproachSection />
        <FormatsSection />
        <ReviewsSection />
        <MaterialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
