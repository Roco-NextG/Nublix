import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/ogImage";

export const alt = "Nublix: software a medida para empresas";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage("Software a medida para empresas que han crecido más rápido que sus procesos.");
}
