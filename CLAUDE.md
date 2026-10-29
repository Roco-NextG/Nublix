# Nublix — Sitio web corporativo

## Sobre Nublix
Empresa de desarrollo de software a medida (webs, apps, herramientas internas), cofundada por 3 socios en Barcelona.

**Posicionamiento:** "Para pymes que siguen gestionando su operativa con Excel, papel y herramientas desconectadas, Nublix crea software a medida que se implanta rápido, se entiende sin formación y crece con la empresa. Empezamos por el proceso de negocio, no por la tecnología."

**Tono de voz:** compañero de trabajo competente, no consultora corporativa. Cercano, directo, ejemplos concretos ("os ahorramos 6 horas de reporting a la semana"), nunca jerga ("optimizamos flujos mediante soluciones cloud escalables"). El copy debe ser corto: preferir "Tu proceso ya funciona. Lo hacemos funcionar mejor." sobre un párrafo largo.

## Cliente ideal (ICP)
- Pyme industrial o de servicios en Cataluña, 10-100 empleados, ~1-15M€ de facturación.
- Decide el gerente/propietario, o un director de operaciones/financiero.
- Dolor: datos dispersos en varios Excel, procesos que dependen de una sola persona, malas experiencias previas (freelancers que desaparecieron, SaaS caros infrautilizados).
- Lo que quiere: control y visibilidad de su negocio, ahorrar tiempo, un proveedor que responda, precio cerrado sin sorpresas.
- **No inventar cifras de clientes ni casos de éxito — todavía no existen.** Usar mensajes de proceso reales en su lugar (ej. "Sin permanencia · Presupuesto cerrado, sin sorpresas"). Sin logos de clientes aún: omitir la barra de confianza o dejarla como placeholder claramente marcado. Si en el futuro hay métricas reales ("-42% trabajo manual"), sí se pueden mostrar — nunca inventadas.

## El Método Nublix (5 pasos — usar como estructura real, no decorativa)
1. **Llamada gratuita** — 30 min, sin coste. Entender qué necesitan y ver si encajamos. Puerta de entrada, sin compromiso.
2. **Diagnóstico** — ya dentro del proyecto, sesión de 2-3h + informe con quick wins, precio fijo. Sesión de trabajo a fondo, no la puerta de entrada.
3. **Diseño del proceso** — mapear cómo trabaja hoy el equipo antes de tocar código.
4. **Construcción** — entregas parciales cada semana, no una caja negra al final.
5. **Entrega y soporte** — se habla con quien construyó la herramienta, no con un ticket sin nombre.

## Dirección de marca (v2 — "digital industrial design")

> Nublix = sistemas humanos construidos con precisión tecnológica.

No es una web "cyberpunk", ni "AI startup", ni "consultora corporativa". Es una mezcla de software, arquitectura, ingeniería y editorial: bordes finos, etiquetas técnicas en mono, tipografía editorial enorme, líneas conectadas, nodos, espacio negativo generoso. **Sin textura de grid de fondo** (se probó cubriendo secciones enteras y se descartó — demasiado ruido visual, recargaba la página).

> **Nota — estado real desde que "propuesta2" se convirtió en el sitio en vivo (ver "Estructura del sitio" más abajo):** esta sección v2 describe la dirección *anterior* a propuesta2 y ya no coincide del todo con la implementación. Diferencias confirmadas y aprobadas como dirección final:
> - **Glassmorphism sí se usa**, a propósito, en el header flotante (`.glass-dark`/`.glass-light`) y en las tarjetas del FAQ — contradice la línea "sigue evitando... glassmorphism" de abajo, que queda superada aquí.
> - **El sitio es mayormente claro**, no oscuro — solo el Hero, el "nublix" gigante tras el Hero y el CTA final son `bg-ink`; Método, Servicios, Proyectos, Por qué Nublix, FAQ, Contexto y Contacto son `bg-paper`/`bg-mint`. La fila "Hero=dark, Método=light, Servicios=dark..." de abajo ya no aplica.
> - **La tipografía real es Inter**, no Space Grotesk/Space Mono — ambas quedaron aliaseadas a la variable de Inter en `app/(es)/layout.tsx` y `app/en/layout.tsx` como decisión deliberada; ninguna de las dos fuentes mono/display originales se carga en producción.
> - **Método se renderiza como grid editorial estático** (`MethodEditorial.tsx`), no como scroll horizontal pineado — de las secciones con movimiento coreografiado, solo Hero y Servicios están pineadas con GSAP ScrollTrigger; Método no lo está.
> Si se retoma la dirección v2 original (dark-primero, Space Grotesk/Mono reales, sin glass), hay que revertir estas tres decisiones en el código, no solo en este documento.

- **Colores — estos son los oficiales, sacados de los archivos reales del kit de marca** (`Identidad de marca y logos/nublix-assets-final/tokens/colores.css` + los SVG de logo/iconos): ink `#14161F`, teal `#1F9C90` (único color "activo"), off-white `#F6F4EF`, light mint `#E3EFEC`, coral `#EB8270` (acento terciario, muy dosificado — nunca en botones). *(Nota: hubo una ronda con `#14181F`/`#1F8CB0`/`#F8F4EF`/`#BB8270` que no coincidía con los logos reales — revertido. Si algún día cambia la paleta oficial, actualizar primero los archivos del kit y luego este documento, no al revés.)* **El teal es escaso a propósito** — solo marca estado "activo": puntos de estado (`●`/`○`), línea/cápsula del wordmark, nav activo, CTAs.
- **Tipografía:** Space Grotesk para todo titular/cuerpo, muy grande y compacto en H1 (hasta ~76-104px según viewport, `tracking -0.03em`, `leading` ajustado). Space Mono solo para la "capa de máquina": eyebrows, status labels, coordenadas, índices — en mayúsculas, nunca párrafos.
- **Logo — definitivo, confirmado contra `NUBLIX LOGO VECTOR.pdf` (el cliente lo mandó explícitamente como "los logos definitivos"):**
  - **Nav/footer/Hero, cualquier lugar visible del sitio:** isotipo-nodo (la N como flujo/conexión — círculo ink abajo-izquierda, trazo ink, círculo teal arriba-derecha) + wordmark `nublix` al lado, exactamente como la página 1 del PDF. Componente: `Logo.tsx` → `NodeMark` (`components/system/NodeMark.tsx`, inline para poder animarle el trazo) + texto real "nublix" (Space Grotesk). **El badge `>n` (`badge.svg`) ya NO se usa como logo visible en ningún sitio del sitio** — hubo varias idas y vueltas sobre esto en el proyecto; queda zanjado aquí.
  - **Solo favicon/app icon:** el badge `>n` (`public/brand/badge.svg`, cuadrado redondeado ink con chevron teal, usado en `app/icon.svg`) sigue siendo el único sitio donde aparece — es un caso técnico distinto (necesita una forma rellena y autocontenida a 16px en la pestaña del navegador), no una elección de marca visible en la página.
  - **Lockup grande ("DIGITAL SOLUTIONS" + cápsula):** página 2/4 del PDF — wordmark grande + cápsula teal + "DIGITAL SOLUTIONS" en mono. Componente `components/system/LogoLockup.tsx`, usado como gesto de marca grande y poco frecuente en el Footer (antes de la fila compacta de copyright) — no en el Hero, para no competir con el titular.
  - No añadas `drop-shadow`/blur sobre estos SVG — a los trazos planos les resta nitidez y es lo más parecido a "vectorización mal hecha" que puede pasar sin tocar el archivo.
  - El SVG `logotipo.svg` del kit original no se usa directamente (trae "DIGITAL SOLUTIONS" horneado como parte del mismo trazo, ilegible a tamaño pequeño) — `LogoLockup` lo reconstruye con texto real en su lugar.
- **Radio de borde:** 0/2/4px en casi todo (líneas > cajas con sombra). Excepción: botones, badges, navbar flotante y componentes pequeños, que sí pueden ser píldora.
- **Eyebrows en mayúsculas SÍ están permitidos aquí** (`SYSTEM ONLINE`, `SERVICES`) — es la "capa de máquina" mono, deliberada y consistente con la identidad, no un cliché genérico de IA. Sigue evitando: gradientes morados, glassmorphism, sombras pesadas, objetos 3D sin propósito, imágenes de stock, texturas de grid de fondo.
- **Modo oscuro como base:** el sitio es predominantemente dark (`bg-ink`), con "zonas claras" (`bg-paper`) como respiro de ritmo, no 50/50. Asignación actual por sección: Hero=dark, Método=light, Servicios=dark, Nosotros(contenido)=light, Contacto(contenido)=light, CTA final=dark (siempre).
- **Transición dark/light:** nunca un corte plano — usar `SectionSeam` (línea + punto teal centrado) en el borde entre secciones.

## Sistema de componentes ("system language")
En `components/system/`: `StatusDot` (●/○), `TechLabel` (mono, mayúsculas, con dot opcional), `Capsule` (barra teal corta, el bullet de marca), `Eyebrow` (capsule + tech label), `ArrowButton` (CTA: el contenido se desplaza, la flecha pasa de `→` a `↗` al hover, nunca solo un scale), `SectionSeam`, `EditorialAccordion` (listas tipo interfaz con `<details>`, usada en Servicios — números, título grande, punto de estado, sin cajas con sombra), `NodeMark` (el isotipo-nodo inline, para animarle el trazo), `Reveal` (scroll-reveal reutilizable — ver abajo).

## Movimiento: scroll reveal (`components/system/Reveal.tsx`)
La web se sintió "plana" en la v3 — el rediseño de marca quitó el canvas del Hero y el ZoomPortal sin poner nada en su lugar. `Reveal` es la respuesta: envuelve un bloque (`<Reveal>`) o una lista (`<Reveal stagger>`) y lo revela con `clip-path` + `opacity` (nunca `transform`/posición) vía `IntersectionObserver`, una sola vez, `--ease-out-strong`, 600-700ms. `stagger` anima los hijos directos en cascada (delays por `nth-child` en `globals.css`, hasta 6). Bajo `prefers-reduced-motion` no monta nada del mecanismo — el contenido sale estático desde el primer render, no “con el motion quitado”. Ya está aplicado en: Hero (columna de texto), PageHero, MethodTeaser, EditorialAccordion (y por tanto Servicios), Faq, Contact, y los bloques propios de `/nosotros` y `/contacto`. Las filas con `<details>`/filas de lista también llevan un `hover:translate-x-2` sutil (gateado por el propio soporte de `hover` de Tailwind v4, que ya excluye touch). El scroll horizontal pineado de Método ya tiene su propio movimiento fuerte — no se le añade Reveal encima.

## Narrativa central: CHAOS → SYSTEM
El concepto de toda la web sigue siendo válido (Acto I caos: Excel, papel, procesos manuales → Acto II Nublix entiende el proceso → Acto III sistema: diseño, software, automatización → Acto IV la empresa tiene control), pero **se retiró el efecto "ZoomPortal"** (sección pineada de zoom entre dos composiciones) que lo visualizaba tras el Hero — no se entendía bien al usarlo, demasiado abstracto sin contexto. Si se retoma la narrativa CHAOS→SYSTEM como sección propia, debe ser más legible (texto explícito, no solo un efecto visual).

## Dirección de movimiento
Mucho movimiento, pero disciplinado: **un momento coreografiado por sección**, no efectos sueltos por todas partes.

- **Hero (v4 — "Oryzo-adapted", ya asentado):** dirección pinneada por el cliente a partir de oryzo.ai (proyecto creativo del estudio Lusion — **no es una empresa real**, solo se tomó su lenguaje visual: tipografía editorial grande, divisores discontinuos, botones píldora — nunca su contenido: sin reseñas falsas, sin copy absurdista, sin 3D). Se probó una versión con el isotipo-nodo extruido en 3D (Three.js + `@react-three/fiber`, rotación automática) como pieza central — **no gustó y se revirtió**; la dependencia (`three`, `@react-three/fiber`, `@react-three/drei`) y los componentes (`components/three/`) se quitaron del todo. El Hero quedó en una versión más contenida: contenedor `max-w-[1240px]` (no full-bleed), divisor `border-dashed` bajo la fila "SYSTEM ONLINE" + coordenadas, titular a `leading-[0.96]`/`lg:leading-[0.9]` — más calmado que el experimento full-bleed —, el isotipo-nodo plano animado (`NodeMark`, trazo que se dibuja al cargar vía GSAP) con glow teal, y la tarjeta flotante "Diagnóstico — 2-3h · Precio fijo" con divisor discontinuo interno. El divisor discontinuo se extendió como firma visual a **todo el sitio** (Método, Servicios, FAQ, Nosotros, Contacto, Footer — cualquier línea que separe filas de contenido usa `border-dashed`; los bordes de botones/tarjetas/navbar siguen sólidos, el discontinuo es solo para separadores estructurales). `SectionSeam` (línea + punto teal centrado) también se activó por fin en cada transición dark/light del sitio — antes existía como componente pero no se usaba en ningún sitio.
- **Sección Método:** los 4 pasos en scroll horizontal pineado (contenedor alto con `position: sticky` interior, progreso mapeado a `translateX`), con panel editorial (línea superior, sin caja) en vez de tarjetas.
- **Sección Servicios:** lista tipo interfaz (`EditorialAccordion`) en vez de tarjetas con parallax — números, título editorial grande, punto de estado que se activa en teal al abrir, descripción revelada con `<details>`.
- **Navbar:** flotante, cápsula translúcida (`bg-ink/75` + `backdrop-blur-lg` + borde `paper/10`), no una barra ancha con fondo que cambia al hacer scroll.
- **Accesibilidad:** respetar `prefers-reduced-motion` siempre, con fallback estático (contenido visible sin animación, sin depender del JS de scroll). Patrón: `usePrefersReducedMotion()` (`lib/usePrefersReducedMotion.ts`, vía `useSyncExternalStore`) + versión "enhanced" vs. versión estática siempre montada por defecto. Auditado contra el checklist de `claude-webkit` (github.com/Hainrixz/claude-webkit, referencia externa, no dependencia del proyecto): skip-link al contenido principal, `<main id="main-content">`, `display: "swap"` en ambas fuentes, botón de menú móvil a 44×44px, y `body` corregido a `bg-ink text-paper` (antes decía lo contrario, solo visible en el rebote de overscroll de iOS Safari). Jerarquía de encabezados ya era correcta.

## Stack técnico
- Next.js (App Router) + TypeScript + Tailwind CSS v4 (tokens vía `@theme` en `app/globals.css`)
- GSAP + ScrollTrigger para animaciones de scroll
- Lenis (`@studio-freight/lenis`) para scroll suave, sincronizado con `gsap.ticker`
- Contenido compartido (pasos, servicios, promesas, nav) centralizado en `lib/content.ts` — no duplicar copy entre la versión teaser (Home) y la versión completa (página dedicada)

## Estructura del sitio (multi-página, no solo landing)
- `/` — Home aligerado: Hero, teaser de Método (4 filas + link), teaser de Servicios (4 de 6 + link), FAQ (6 preguntas reales, sin cifras inventadas), CTA final.
- `/metodo` — PageHero + los 4 pasos completos (scroll horizontal pineado, copy extendido) + CTA.
- `/servicios` — PageHero + los 6 servicios completos (`EditorialAccordion`) + CTA.
- `/nosotros` — PageHero + por qué existe Nublix + 4 principios + CTA. Sin nombres/fotos inventados de los 3 socios — se describen en colectivo.
- `/contacto` — PageHero + "Nublix Diagnostic" (4 pasos del proceso de contacto) + email directo.
- Header (flotante, fijo en todas las páginas) + Footer, compartidos vía `app/layout.tsx`.

## Copy ya validado
- **Titular hero (v2):** "Software para empresas que han crecido más rápido que sus procesos."
  - Titular v1 (retirado, puede reciclarse en otro contexto): "Del Excel a la herramienta que tu equipo sí quiere usar."
- **Subtítulo:** "Diseñamos y construimos el software que os falta —webs, apps y herramientas internas— partiendo de vuestro proceso, no de la tecnología."
- **Tagline técnico:** "WEBS / APPS / HERRAMIENTAS INTERNAS"
- **Status label decorativo:** "SYSTEM ONLINE" (con punto teal) + "BARCELONA — 41°23'N 02°10'E" (coordenadas reales de Barcelona, puramente visual, no una afirmación dinámica).
- **CTA primario:** "Cuéntanos tu proceso"
- **CTA secundario:** "Ver el método"
- **Claim alternativo disponible:** "BUILT AROUND YOUR BUSINESS." / "YOUR BUSINESS. YOUR SYSTEM." / "LESS MANUAL. MORE SYSTEM." — no usado todavía, candidatos para variantes de copy.
- **Email de contacto:** `hola@nublix.com` — **placeholder**, confirmar el real.
