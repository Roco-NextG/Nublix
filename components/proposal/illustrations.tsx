/**
 * Abstract technical line-art for /propuesta — nodes, connectors, dashed
 * links. No stock photography, no literal product: the same "flujo/conexión"
 * vocabulary as NodeMark, extended into one small diagram per idea. Color
 * comes from currentColor (stroke) plus explicit teal/coral fills, so each
 * illustration inherits the dark/light tone of its section.
 */

const STROKE = 3.2;

/** Método, step N of 4 — the node graph gets visibly more connected and
 * ordered as the steps advance. Makes CHAOS → SYSTEM legible as a concrete
 * progression instead of a one-off effect. */
export function MethodDiagram({ step, className = "" }: { step: 1 | 2 | 3 | 4; className?: string }) {
  const nodes: [number, number][] = [
    [22, 66],
    [60, 20],
    [98, 66],
    [60, 86],
  ];

  const edgesByStep: Record<number, [number, number][]> = {
    1: [],
    2: [[0, 1]],
    3: [
      [0, 1],
      [1, 2],
    ],
    4: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
  };

  const edges = edgesByStep[step];

  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeOpacity={0.5}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={step === 4 ? undefined : "1 10"}
        />
      ))}
      {nodes.map(([x, y], i) => {
        const isActive = i < step;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={isActive ? 8 : 6}
            className={isActive ? "fill-teal" : "fill-current opacity-25"}
          />
        );
      })}
    </svg>
  );
}

/** Problema section — scattered, disconnected nodes with one coral thread
 * barely holding two of them together. The "before" state. */
export function ChaosDiagram({ className = "" }: { className?: string }) {
  const points: [number, number][] = [
    [14, 26],
    [48, 12],
    [86, 30],
    [108, 72],
    [66, 88],
    [26, 70],
    [58, 52],
  ];
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      <line x1={14} y1={26} x2={58} y2={52} stroke="var(--color-coral)" strokeOpacity={0.6} strokeWidth={STROKE} strokeLinecap="round" />
      <line x1={86} y1={30} x2={58} y2={52} stroke="currentColor" strokeOpacity={0.2} strokeWidth={STROKE} strokeLinecap="round" strokeDasharray="1 9" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 6 ? 7 : 5} className="fill-current opacity-30" />
      ))}
    </svg>
  );
}

const dot = (cx: number, cy: number, r: number, teal = false) => (
  <circle cx={cx} cy={cy} r={r} className={teal ? "fill-teal" : "fill-current"} />
);

const link = (x1: number, y1: number, x2: number, y2: number, dashed = false) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="currentColor"
    strokeOpacity={0.45}
    strokeWidth={STROKE}
    strokeLinecap="round"
    strokeDasharray={dashed ? "1 9" : undefined}
  />
);

/** 01 — Paneles y herramientas internas: varias barras, un solo nodo central. */
export function DashboardIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      <rect x={14} y={54} width={14} height={30} rx={2} stroke="currentColor" strokeOpacity={0.35} strokeWidth={STROKE} />
      <rect x={38} y={38} width={14} height={46} rx={2} stroke="currentColor" strokeOpacity={0.35} strokeWidth={STROKE} />
      <rect x={62} y={62} width={14} height={22} rx={2} stroke="currentColor" strokeOpacity={0.35} strokeWidth={STROKE} />
      {link(21, 54, 92, 30)}
      {link(45, 38, 92, 30)}
      {link(69, 62, 92, 30)}
      {dot(92, 30, 9, true)}
    </svg>
  );
}

/** 02 — Automatización: un bucle cerrado, se repite solo. */
export function AutomationIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      <path
        d="M30 70a30 30 0 1 1 52 -34"
        stroke="currentColor"
        strokeOpacity={0.4}
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <path d="M74 20 L86 28 L72 34" stroke="var(--color-teal)" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {dot(30, 70, 8, true)}
      {dot(82, 50, 5)}
    </svg>
  );
}

/** 03 — Integraciones: varias fuentes convergen en un único punto. */
export function IntegrationIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      {link(16, 20, 60, 54)}
      {link(16, 80, 60, 54)}
      {link(104, 20, 60, 54)}
      {link(104, 80, 60, 54)}
      {dot(16, 20, 6)}
      {dot(16, 80, 6)}
      {dot(104, 20, 6)}
      {dot(104, 80, 6)}
      {dot(60, 54, 10, true)}
    </svg>
  );
}

/** 04 — Webs y apps a medida: ventana + dispositivo, mismo sistema. */
export function BuildIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      <rect x={12} y={18} width={62} height={44} rx={2} stroke="currentColor" strokeOpacity={0.4} strokeWidth={STROKE} />
      <line x1={12} y1={30} x2={74} y2={30} stroke="currentColor" strokeOpacity={0.4} strokeWidth={STROKE} />
      {dot(19, 24, 2.2)}
      {dot(27, 24, 2.2)}
      <rect x={86} y={30} width={22} height={52} rx={3} stroke="currentColor" strokeOpacity={0.4} strokeWidth={STROKE} />
      {link(74, 46, 86, 54, true)}
      {dot(97, 74, 4, true)}
    </svg>
  );
}

/** 05 — Cloud e infraestructura: nube de nodos conectados + base. */
export function CloudIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      <path
        d="M28 56a16 16 0 0 1 30 -12 13 13 0 0 1 18 12 12 12 0 0 1 -2 24H30a14 14 0 0 1 -2 -24Z"
        stroke="currentColor"
        strokeOpacity={0.4}
        strokeWidth={STROKE}
      />
      {link(60, 80, 60, 94, true)}
      {dot(60, 94, 7, true)}
    </svg>
  );
}

/** 07 — Sistemas de pago: una tarjeta/flujo que converge en un nodo de cobro. */
export function PaymentIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      <rect x={14} y={30} width={62} height={40} rx={6} stroke="currentColor" strokeOpacity={0.4} strokeWidth={STROKE} />
      <line x1={14} y1={44} x2={76} y2={44} stroke="currentColor" strokeOpacity={0.4} strokeWidth={STROKE} />
      <rect x={24} y={54} width={14} height={9} rx={2} stroke="currentColor" strokeOpacity={0.3} strokeWidth={STROKE} />
      {link(76, 50, 100, 50, true)}
      {dot(100, 50, 9, true)}
    </svg>
  );
}

/** 08 — IoT y sensórica: un dispositivo emitiendo señal hacia el panel. */
export function IotIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      <rect x={44} y={56} width={22} height={22} rx={4} stroke="currentColor" strokeOpacity={0.4} strokeWidth={STROKE} />
      {dot(55, 67, 2.5)}
      <path d="M38 48a24 24 0 0 1 34 0" stroke="var(--color-teal)" strokeOpacity={0.8} strokeWidth={STROKE} strokeLinecap="round" fill="none" />
      <path d="M30 38a36 36 0 0 1 50 0" stroke="currentColor" strokeOpacity={0.3} strokeWidth={STROKE} strokeLinecap="round" fill="none" />
      {link(66, 67, 98, 67, true)}
      {dot(98, 67, 7, true)}
    </svg>
  );
}

/** 06 — Crece con la empresa: nodos en escalera ascendente. */
export function GrowthIllustration({ className = "" }: { className?: string }) {
  const steps: [number, number, number][] = [
    [18, 78, 5],
    [46, 60, 6],
    [74, 40, 7],
    [102, 20, 9],
  ];
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" fill="none">
      {steps.slice(1).map(([x, y], i) => (
        <g key={i}>{link(steps[i][0], steps[i][1], x, y)}</g>
      ))}
      {steps.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} className={i === steps.length - 1 ? "fill-teal" : "fill-current opacity-35"} />
      ))}
    </svg>
  );
}
