import { RenderSlidePage } from "@/app/_shared/RenderSlidePage";

export default function Page({
  params,
}: {
  params: Promise<{ deck: string; slide: string }>;
}) {
  return RenderSlidePage({ params, chrome: "embed" });
}
