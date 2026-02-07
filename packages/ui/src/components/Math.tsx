"use client";
import katex from "katex";

export function Math({ children, block }: { children: string; block?: boolean }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: !!block,
    strict: "ignore",
  });

  return (
    <span
      className={block ? "math-block" : "math-inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}