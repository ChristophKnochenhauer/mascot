import Link from "next/link";
import { decks } from "@/content/index";

type Deck = {
  id: string;
  title: string;
  slides: { id: string; file: string }[];
  tags?: string[];
};

export default function GalleryPage() {
  return (
    <div className="page">
      <h1>MASCOT – Galerie</h1>

      <div className="galleryGrid">
        {(decks as unknown as Deck[]).map((d) => (
          <div key={d.id} className="card">
            <div className="cardHeader">
              <div>
                <div className="deckTitle">{d.title}</div>
                <div className="muted">
                  {d.slides.length} Slides
                  {d.tags?.length ? ` · ${d.tags.join(", ")}` : ""}
                </div>
              </div>

              <div className="cardActions">
                <Link href={`/d/${d.id}/0`}>Öffnen</Link>
              </div>
            </div>

            <div className="previewFrame">
              <iframe
                src={`/e/${d.id}/0`}
                title={`Preview ${d.title}`}
                style={{ width: "100%", height: "100%", border: 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
