import Section from "@/components/Section";

const SectionHero = () => {
  return (
    <Section className="flex min-h-[70svh] flex-col items-center justify-center space-y-2 bg-gradient-to-tr from-sky-300 to-rose-300 lg:space-y-4">
      <h1 className="text-4xl font-black uppercase text-amber-700 md:text-6xl lg:text-8xl xl:text-9xl">
        Framer Landing
      </h1>
      <p className="text-xl font-medium md:text-2xl lg:text-4xl xl:text-5xl">
        Slide-in and reveal animations
      </p>
    </Section>
  );
};

export default SectionHero;
