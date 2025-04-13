import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ClubsSection } from "@/components/clubs-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { ScheduleSection } from "@/components/schedule-section";
import { TeachersSection } from "@/components/teachers-section";
import { PartnersSection } from "@/components/partners-section";
import { RegistrationSection } from "@/components/registration-section";
import { CampusMap } from "@/components/campus-map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <ClubsSection />
      <AdvantagesSection />
      <ScheduleSection />
      <TeachersSection />
      <PartnersSection />
      <RegistrationSection />
      <CampusMap />
      <Footer />
    </main>
  );
}
