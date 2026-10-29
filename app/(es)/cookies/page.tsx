import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { COOKIES_PATH, METADATA, PRIVACY_PATH } from "@/lib/i18n";

export const metadata: Metadata = {
  title: METADATA.cookies.title.es,
  description: METADATA.cookies.description.es,
  alternates: {
    canonical: COOKIES_PATH.es,
    languages: {
      es: COOKIES_PATH.es,
      en: COOKIES_PATH.en,
      "x-default": COOKIES_PATH.es,
    },
  },
};

export default function CookiesPage() {
  return (
    <section className="bg-paper px-5 pt-36 pb-24 text-ink sm:px-8 sm:pt-44 sm:pb-32 lg:px-16">
      <Reveal>
        <Eyebrow>Cookies</Eyebrow>
        <h1 className="mt-5 max-w-[20ch] text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.2] font-bold tracking-[-0.02em]">
          Política de <span className="text-teal">cookies.</span>
        </h1>
        <p className="mt-6 max-w-[60ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
          Última actualización: 18 de octubre de 2026. Corta y directa, como el resto de la web.
        </p>
      </Reveal>

      <Reveal className="mt-16 max-w-[70ch] border-t border-dashed border-ink/12 pt-10">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Qué es una cookie
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Un archivo pequeño que una web guarda en tu navegador para recordar algo entre
              visitas: una preferencia, una sesión iniciada, o qué páginas has visto.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Qué cookies usa esta web ahora mismo
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Usamos Microsoft Clarity para entender cómo navegáis por la web: graba sesiones de
              forma agregada y genera mapas de calor de clics y scroll, para que podamos ver qué
              funciona y qué no. Clarity no se activa hasta que lo aceptéis en el aviso que veis
              al llegar a la web; si lo rechazáis, no se carga ni guarda ninguna cookie suya. Si lo
              aceptáis, guarda cookies en tu navegador que lo reconocen como visitante entre
              páginas y visitas. No usamos Google Analytics ni píxeles de publicidad, y no
              vendemos estos datos a nadie. Puedes leer el detalle de las cookies de Clarity y
              cómo las trata Microsoft en su{" "}
              <a
                href="https://clarity.microsoft.com/legal/privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-dim underline underline-offset-2"
              >
                aviso de privacidad
              </a>
              . Aparte de esto, tu navegador puede guardar cosas técnicas básicas para que la web
              funcione (por ejemplo, recordar que el menú está abierto mientras navegas), que
              nunca sale de tu propio navegador.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Si añadimos algo más
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Si en algún momento añadimos otra herramienta de analítica, publicidad o cualquier
              otra que use cookies, actualizaremos esta página con el detalle de qué cookie es,
              para qué sirve y cuánto dura, y te pediremos permiso antes de activarla si así lo
              exige la ley.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Cómo gestionar las cookies en tu navegador
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Puedes revisar y borrar las cookies guardadas por cualquier sitio, incluido este,
              desde la configuración de tu navegador (Chrome, Safari, Firefox o el que uses tiene
              una sección de privacidad o cookies para esto).
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Dudas
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Escríbenos a{" "}
              <a href="mailto:hola@nublix.com" className="text-teal-dim underline underline-offset-2">
                hola@nublix.com
              </a>{" "}
              y te respondemos nosotros, no un formulario automático. También puedes leer nuestra{" "}
              <Link href={PRIVACY_PATH.es} className="text-teal-dim underline underline-offset-2">
                política de privacidad
              </Link>{" "}
              para más detalle sobre cómo tratamos los datos que sí nos das directamente.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
