import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { COOKIES_PATH, METADATA, PRIVACY_PATH } from "@/lib/i18n";

export const metadata: Metadata = {
  title: METADATA.privacy.title.es,
  description: METADATA.privacy.description.es,
  alternates: {
    canonical: PRIVACY_PATH.es,
    languages: {
      es: PRIVACY_PATH.es,
      en: PRIVACY_PATH.en,
      "x-default": PRIVACY_PATH.es,
    },
  },
};

export default function PrivacidadPage() {
  return (
    <section className="bg-paper px-5 pt-36 pb-24 text-ink sm:px-8 sm:pt-44 sm:pb-32 lg:px-16">
      <Reveal>
        <Eyebrow>Privacidad</Eyebrow>
        <h1 className="mt-5 max-w-[20ch] text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.2] font-bold tracking-[-0.02em]">
          Política de <span className="text-teal">privacidad.</span>
        </h1>
        <p className="mt-6 max-w-[60ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
          Última actualización: 13 de octubre de 2026. Aquí explicamos, en términos claros, qué
          hacemos con los datos que nos enviáis.
        </p>
      </Reveal>

      <Reveal className="mt-16 max-w-[70ch] border-t border-dashed border-ink/12 pt-10">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Quién es el responsable de tus datos
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Nublix Digital Solutions, S.L., con sede en Barcelona. Puedes escribirnos a{" "}
              <a href="mailto:hola@nublix.com" className="text-teal-dim underline underline-offset-2">
                hola@nublix.com
              </a>{" "}
              para cualquier duda sobre esta política o sobre tus datos.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Qué datos recogemos
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Esta web no tiene un formulario que recoja datos automáticamente. El único momento en
              el que compartes información con nosotros es cuando nos escribes por tu cuenta a{" "}
              <a href="mailto:hola@nublix.com" className="text-teal-dim underline underline-offset-2">
                hola@nublix.com
              </a>
              : tu nombre, tu dirección de email y lo que nos cuentes en el mensaje. No recogemos
              nada más, y no usamos cookies de analítica ni de seguimiento en este sitio (puedes
              leer el detalle en nuestra{" "}
              <Link href={COOKIES_PATH.es} className="text-teal-dim underline underline-offset-2">
                política de cookies
              </Link>
              ).
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Para qué usamos esos datos
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Solo para responder a tu consulta y, si sigues adelante, para organizar y llevar a
              cabo el diagnóstico o proyecto del que hablemos. No vendemos ni cedemos tus datos a
              terceros, y no los usamos para enviarte marketing salvo que nos lo pidas tú
              expresamente.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Por qué podemos tratar tus datos
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Porque tú nos los das voluntariamente al escribirnos, lo que cuenta como tu
              consentimiento, y porque si avanzamos juntos en un proyecto necesitamos esos datos
              para gestionar esa relación.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Cuánto tiempo los guardamos
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Mientras dure nuestra conversación o la relación comercial contigo, y después el
              tiempo que la ley nos obligue a conservar la documentación de un proyecto. Si solo
              nos escribiste una vez y no seguimos adelante, borramos el email pasado un tiempo
              razonable.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Tus derechos
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Puedes pedirnos acceder a tus datos, corregirlos, borrarlos, limitarnos su uso,
              pedirnos una copia o oponerte a que los tratemos. Escríbenos a{" "}
              <a href="mailto:hola@nublix.com" className="text-teal-dim underline underline-offset-2">
                hola@nublix.com
              </a>{" "}
              y lo resolvemos directamente contigo, sin intermediarios. Si no quedas satisfecho,
              también puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Seguridad
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Tratamos tus datos con el cuidado que esperarías: acceso restringido a los tres
              socios que gestionamos el correo, y sin compartirlos con herramientas ni servicios
              externos que no necesiten verlos.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Cambios en esta política
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Si añadimos analítica, un formulario o cualquier otra forma de recoger datos,
              actualizaremos esta página y lo indicaremos aquí mismo con la nueva fecha.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
