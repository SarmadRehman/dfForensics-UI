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

export default function Home() {
  return (
    <main className="w-full h-full bg-white-main overflow-hidden">
      <section className="w-full lg:h-[100dvh] bg-brand-main relative">
        <OrbitAnimation />
        <Navbar />
        <Hero />
      </section>
      <ImageTest />
      <ProcessFlow />
      <HowItWorks />
      <MatchJobs />
      <Features />
      {/* <Reviews /> */}
      {/* <Partners /> */}
      {/* <FreeTrial /> */}
      <Footer />
    </main>
  );
}
