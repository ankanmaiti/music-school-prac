import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Unlock Your Musical Potential"
        description="Find your rhythm and flourish in a vibrant musical community. Start your journey today!"
        redirectTo="/courses"
        src="/school.jpg"
      />
    </>
  );
}
