import Link from "next/link";
import deckIntro from "@/content/decks/intro/deck.json";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

async function getDeck(deck: string) {
  if (deck !== "intro") return null;
  return deckIntro as {
    id: string;
    title: string;
    slides: { id: string; file: string }[];
  };
}

async function getSlideComponent(deck: string, slideId: string) {
  if (deck !== "intro") return null;
  switch (slideId) {
    case "0":
      return (await import("@/content/decks/intro/slides/0.mdx")).default;
    case "1":
      return (await import("@/content/decks/intro/slides/1.mdx")).default;
    case "2":
      return (await import("@/content/decks/intro/slides/2.mdx")).default;
    default:
      return null;
  }
}

export default async function SlidePage({
  params,
}: {
  params: Promise<{ deck: string; slide: string }>;
}) {
  const { deck: deckId, slide } = await params;

  const deck = await getDeck(deckId);
  if (!deck) return <div className="page">Deck nicht gefunden.</div>;

  const i = clamp(Number(slide), 0, deck.slides.length - 1);
  const slideId = deck.slides[i].id;

  const Slide = await getSlideComponent(deck.id, slideId);
  if (!Slide) return <div className="page">Slide nicht gefunden.</div>;

  const prev = i > 0 ? `/d/${deck.id}/${i - 1}` : null;
  const next = i < deck.slides.length - 1 ? `/d/${deck.id}/${i + 1}` : null;

  return (
    <div className="app">
      <header className="topbar">
        <div className="title">{deck.title}</div>
        <nav className="nav">
          {prev ? <Link href={prev}>←</Link> : <span className="disabled">←</span>}
          <span className="counter">
            {i + 1}/{deck.slides.length}
          </span>
          {next ? <Link href={next}>→</Link> : <span className="disabled">→</span>}
        </nav>
      </header>

      <main className="slide">
        <Slide />
      </main>
    </div>
  );
}
