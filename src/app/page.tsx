import SectionHero from "@/components/Sections/Hero";
import SectionPricing from "../components/Sections/Pricing";
import SectionStarting from "@/components/Sections/Starting";
import SectionAdvantages from "@/components/Sections/Advantages";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionStarting />
      <SectionPricing />
      <SectionAdvantages />
    </>
  );
}
