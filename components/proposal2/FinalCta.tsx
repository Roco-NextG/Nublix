import Button2 from "./Button2";
import TechLabel from "@/components/system/TechLabel";
import Reveal from "@/components/system/Reveal";

export default function FinalCta() {
  return (
    <section className="border-t border-dashed border-paper/15 bg-ink px-5 py-28 text-paper sm:px-8 lg:px-16">
      <Reveal>
        <TechLabel dot className="text-paper/50">
          Siguiente paso
        </TechLabel>
        <h2 className="mt-5 max-w-[16ch] text-[38px] leading-[0.95] font-bold tracking-[-0.02em] sm:text-[56px] lg:text-[64px]">
          ¿Hablamos de <span className="text-teal">vuestro proceso?</span>
        </h2>
        <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-paper/60 sm:text-[18px]">
          Una sesión de 2-3h. Precio fijo. Sin permanencia ni letra pequeña.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button2 href="/contacto">Cuéntanos tu proceso</Button2>
        </div>
      </Reveal>
    </section>
  );
}
