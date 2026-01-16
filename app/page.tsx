import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Institutions } from "@/components/home/institutions";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Hero />
      <Features />
      <Institutions />
      <Cta />
    </main>
  );
}
