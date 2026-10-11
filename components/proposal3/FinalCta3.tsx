import Reveal from "@/components/system/Reveal";

/** Flat, centered, no decoration — the quiet enterprise close (Indicium's
 * "Ready to Transform Your Business"), not the v1's wedge-and-nodemark
 * flourish. */
export default function FinalCta3() {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 flex flex-col items-center gap-8 bg-ink px-5 py-28 text-center text-paper sm:px-8 sm:py-36"
    >
      <Reveal className="flex flex-col items-center gap-8">
        <h2 className="max-w-[20ch] text-[34px] leading-[1.1] font-medium tracking-[-0.015em] sm:text-[48px]">
          Contadnos vuestro proceso.
        </h2>
        <p className="max-w-[48ch] text-[16px] leading-relaxed text-paper/55 sm:text-[18px]">
          Una sesión de diagnóstico de 2-3h, precio fijo, sin compromiso
          posterior. Salís con un informe de mejoras rápidas, sigáis o no
          con nosotros.
        </p>
        <a
          href="mailto:hola@nublix.com"
          className="inline-flex items-center rounded-[8px] bg-teal px-8 py-4 font-mono text-[13px] tracking-[0.04em] text-ink uppercase transition-colors duration-150 ease-out hover:bg-teal-dim"
        >
          Cuéntanos tu proceso
        </a>
      </Reveal>
    </section>
  );
}
