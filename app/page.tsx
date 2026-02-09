import Link from "next/link";
import { MathcotIcon } from "@/app/components/MathcotIcon";
import { MathcotWordmark } from "@/app/components/MathcotWordmark";

export default function Home() {
  return (
    <div className="container">
      <div style={{ display: "grid", gap: 16 }}>
        <div className="pills">
          <span className="pill">MATHCOT</span>
          <span className="pill">Math Animations</span>
          <span className="pill">Interactive Slides</span>
          <span className="pill">LMS-ready</span>
        </div>

        <div className="container">
          <div className="brandLockup">
            <MathcotIcon className="brandIcon" />
            <MathcotWordmark className="brandWordmark" />
          </div>

          <p className="lead">
            Math Animations on Slides for Contextual Teaching
          </p>
        </div>

        <div className="buttonRow">
          <Link className="button buttonPrimary" href="/gallery">
            Zur Galerie →
          </Link>
          <Link className="button" href="/d/intro/0">
            Intro im Player öffnen
          </Link>
          <Link className="button" href="/e/intro/0">
            Embed-Ansicht testen
          </Link>
        </div>

        <div className="grid2" style={{ marginTop: 18 }}>
          <div className="card cardPad">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Study Mode (Phase 1)</div>
            <div className="small">
              Responsive Layout + Scroll. Inhalte bleiben lesbar in LMS-Containern
              und auf Mobilgeräten.
            </div>
          </div>

          <div className="card cardPad">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Authoring</div>
            <div className="small">
              MDX + LaTeX-Mathe. Sofortiges Preview ohne Renderzeiten.
            </div>
          </div>

          <div className="card cardPad">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Interaktivität</div>
            <div className="small">
              Parameter, Widgets, Quiz – state-driven statt baked Video.
            </div>
          </div>

          <div className="card cardPad">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Shortcuts</div>
            <div className="small">
              Player später mit <span className="kbd">←</span>/<span className="kbd">→</span>, Deep Links,
              Resume, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
