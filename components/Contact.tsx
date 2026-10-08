import Eyebrow from "@/components/system/Eyebrow";
import ArrowButton from "@/components/system/ArrowButton";
import Reveal from "@/components/system/Reveal";
import { PROMISES } from "@/lib/content";

export default function Contact() {
  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="max-w-[42ch]">
          <Eyebrow>Next step</Eyebrow>
          <h2 className="mt-6 text-[36px] leading-[0.98] font-medium tracking-[-0.03em] sm:text-[64px]">
            Reservemos el diagnóstico.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-paper/60 sm:text-[19px]">
            2-3 horas con vuestro equipo, un informe con quick wins y precio
            fijo. Sin letra pequeña.
          </p>

          <div className="mt-9">
            <ArrowButton href="/contacto">Cuéntanos tu proceso</ArrowButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-dashed border-paper/10 pt-6 font-mono text-[12px] tracking-[0.04em] text-paper/45 uppercase">
            {PROMISES.map((promise) => (
              <li key={promise}>{promise}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
