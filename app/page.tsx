import { IntroBlurb } from "@/app/components/home/IntroBlurb";
import { SearchBar } from "@/app/components/home/SearchBar";
import { ResultsSection } from "@/app/components/home/ResultsSection";
import { DeckLightbox } from "@/app/components/home/DeckLightbox";

export default function HomePage() {
  return (
    <main className="page">
      <section>
        <IntroBlurb />
      </section>

      <section style={{ marginTop: 24 }}>
        <SearchBar />
      </section>

      <section style={{ marginTop: 32 }}>
        <ResultsSection />
      </section>

      <DeckLightbox />
    </main>
  );
}
