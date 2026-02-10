import Link from "next/link";
import { MathcotIcon } from "@/app/components/brand/MathcotIcon";
import { MathcotWordmark } from "@/app/components/brand/MathcotWordmark";

export function IntroBlurb() {
  return (
    <div className="card cardPad intro">
      <div className="brandLockup">
        <MathcotIcon className="brandIcon" />
        <MathcotWordmark className="brandWordmark" />
      </div>

      <div>
        <p className="introText">
          Mathcot is a library of interactive mathematics decks for university teaching. Select a deck and embed it directly into your LMS.
        </p>
        <Link href="/about" className="introLink">
          Learn more →
        </Link>
      </div>
    </div>
  );
}
