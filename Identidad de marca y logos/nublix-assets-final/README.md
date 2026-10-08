# Nublix — Assets vectorizados (Píxel)

Todos los archivos son SVG 100% vectoriales. El wordmark y los textos NO dependen
de tener la fuente instalada para verse bien: las letras están convertidas a
trazados reales extraídos directamente de la fuente Space Grotesk / Space Mono,
así que se ven exactamente igual se abran donde se abran (navegador, Figma,
Illustrator, Photoshop) y son 100% editables (cada letra es un `<path>` que se
puede seleccionar, mover o recolorear).

## /logo
- `logotipo.svg` / `logotipo-negativo.svg` — wordmark "nublix"
- `isotipo-a-nodo.svg` / `isotipo-a-nodo-negativo.svg` — símbolo N-nodo
- `isotipo-b-cursor.svg` / `isotipo-b-cursor-claro.svg` — símbolo ">n"
- `favicon.svg` — copia del isotipo B lista para favicon/app icon
- `imagotipo.svg` / `imagotipo-negativo.svg` — símbolo A + wordmark
- `isologo.svg` / `isologo-claro.svg` — emblema fusionado (símbolo B + nombre)

## /visual-assets
- `patron-pixel.svg` — patrón repetible (`<pattern id="nublixPixelPattern">`)
- `iconos/` — dashboard, cloud, automatizacion, conexion, crecimiento, codigo
- `formas.svg` — hoja de formas sueltas
- `textura-puntos-clara.svg` / `textura-puntos-oscura.svg`
- `bloques-color.svg` — bloques y degradado para fondos de sección
- `ui-componentes.svg` — botón, chip y barra de progreso (texto también vectorizado)

## /tokens
- `colores.css` — variables CSS de color y tipografía

## Uso en la web
Puedes insertar cualquiera de estos SVG directo en el HTML (`<img src="logo.svg">`
o inline) sin cargar ninguna fuente adicional para que el logo se vea bien: el
texto del logo ya es vector puro. Si además quieres usar Space Grotesk / Space
Mono en el resto del texto de la web (títulos, párrafos), esa sí tendrás que
cargarla vía Google Fonts — pero el logo en sí ya no depende de ello.
