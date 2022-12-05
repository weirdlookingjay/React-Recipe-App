import ChefSection from "../components/ChefSection";
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSection from "../components/QuoteSection";

export default function home() {
  return (
    <>
      <HeroSection />
      <ImproveSkills />
      <QuoteSection />
      <ChefSection />
    </>
  );
}
