import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServiceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default async function App({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const currentCompany = (await params).company;


  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
