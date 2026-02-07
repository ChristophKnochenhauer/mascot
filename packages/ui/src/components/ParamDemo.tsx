"use client";
import { useState } from "react";
import { Slider } from "@/ui/components/Slider";
import { Math } from "@/ui/components/Math";

export function ParamDemo() {
  const [n, setN] = useState(3);
  return (
    <div className="card">
      <Slider label="n" min={1} max={10} value={n} onChange={setN} />
      <div className="smallLabel">Dummy-Formel:</div>
      <Math block>{String.raw`\sum_{k=1}^{${n}} k = \frac{${n}(${n}+1)}{2}`}</Math>
    </div>
  );
}
