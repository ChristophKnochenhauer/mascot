import { DeckCard } from "./DeckCard";

export function DeckGrid() {
  return (
    <div className="galleryGrid">
      <DeckCard title="Eigenvalues and Eigenvectors" />
      <DeckCard title="Introduction to the Derivative" />
      <DeckCard title="Heat Equation (1D)" />
      <DeckCard title="Linear Systems" />
    </div>
  );
}
