import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import Button2 from "@/components/proposal2/Button2";

/** Branded 404 for the Spanish route group — old bookmarks/shared links to
 * /metodo, /servicios, /nosotros (real pages before the single-page
 * consolidation) land here with the site's own header/footer and a way
 * back, instead of Next's bare unstyled default. */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center bg-paper px-5 pt-36 pb-24 text-ink sm:px-8 sm:pt-44 sm:pb-32 lg:px-16">
      <Reveal>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 max-w-[18ch] text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] font-bold tracking-[-0.02em]">
          Esta página <span className="text-teal">no existe.</span>
        </h1>
        <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
          El enlace puede haber cambiado desde que lo guardaste. El método, los servicios y los
          proyectos ahora viven todos en la página de inicio.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button2 href="/">Volver al inicio</Button2>
        </div>
      </Reveal>
    </section>
  );
}
