type Props = {
  title: string;
};

export function DeckCard({ title }: Props) {
  return (
    <div className="card cardPad" style={{ cursor: "pointer" }}>
      <div className="deckThumb" />
      <strong>{title}</strong>
    </div>
  );
}
