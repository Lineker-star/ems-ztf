import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RectorQuote } from "@/components/sections/RectorQuote";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { StaffPreview } from "@/components/sections/StaffPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <RectorQuote />
      <ProgramsGrid />
      <StaffPreview />
      <CtaBanner />
    </>
  );
}
