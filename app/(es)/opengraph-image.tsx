import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/ogImage";

export const alt = "Nublix — software a medida para pymes";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage("Software a medida para pymes que han crecido más rápido que sus procesos.");
}
