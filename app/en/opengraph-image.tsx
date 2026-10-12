import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/ogImage";

export const alt = "Nublix: custom software for businesses";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage("Custom software for businesses that have outgrown their processes.");
}
