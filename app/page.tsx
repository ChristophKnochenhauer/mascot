import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <h1>MASCOT</h1>
      <Link href="/d/intro/0">Intro öffnen</Link>
    </div>
  );
}