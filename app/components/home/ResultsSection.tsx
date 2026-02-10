import { DeckGrid } from "./DeckGrid.tsx";

export function ResultsSection() {
  return (
    <div>
      <h2 className="sectionLabel">
        Example decks
      </h2>

      <DeckGrid />

      <div style={{ marginTop: 16 }}>
        <button className="button">
          Show all results →
        </button>
      </div>
    </div>
  );
}
