import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/ogImage";

export const alt = "Nublix — custom software for SMEs";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage("Custom software for SMEs that have outgrown their processes.");
}
