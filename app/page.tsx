import Features from "@/components/Home/Features/Features";
import FreeTrial from "@/components/Home/FreeTrial";
import Hero from "@/components/Home/Hero/Hero";
import OrbitAnimation from "@/components/Home/Hero/OrbitAnimation";
import HowItWorks from "@/components/Home/HowItWorks";
import MatchJobs from "@/components/Home/MatchJobs/MatchJobs";
import Partners from "@/components/Home/Partners";
import ProcessFlow from "@/components/Home/ProcessFlow/ProcessFlow";
import Reviews from "@/components/Home/Reviews/Reviews";
import Footer from "@/components/Shared/Navigations/Footer";
import Navbar from "@/components/Shared/Navigations/Navbar";
import ImageTest from "@/components/Home/ImageTest";
import OurTeam from "@/components/Home/OurTeam/OurTeam";
import "./swiper.css";
import UseCases from "@/components/Home/ProcessFlow/ProcessFlow";
export default function Home() {
  return (
    <main className="w-full h-full bg-white-main overflow-hidden">
      <section className="w-full lg:h-[100dvh] bg-black-main relative lg:pb-0 pb-10">
        {/* <OrbitAnimation /> */}
        <Navbar />
        <Hero />
      </section>
      {/* input component */}
      <ImageTest />

      <UseCases />
      <HowItWorks />
      <MatchJobs />
      <Features />
      <OurTeam />
      {/* <Reviews /> */}
      {/* <Partners /> */}
      {/* <FreeTrial /> */}
      <Footer />
    </main>
  );
}
