import type { JSX } from "react";
import type { IllustrationId } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = {
  id: IllustrationId;
  className?: string;
  caption?: string;
  crop?: boolean;
};

export function Illustration({ id, className, caption, crop }: Props) {
  const Art = MAP[id];
  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "relative overflow-hidden border border-border bg-surface",
          crop && "max-h-[240px] md:max-h-[320px]",
        )}
      >
        <Art />
      </div>
      {caption ? (
        <figcaption className="mt-3 font-display text-xs italic text-subtle">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

const MAP: Record<IllustrationId, () => JSX.Element> = {
  layers: Layers,
  network: Network,
  columns: Columns,
  flow: Flow,
  grid: Grid,
};

function Layers() {
  return (
    <svg viewBox="0 0 800 420" className="h-auto w-full text-fg" aria-hidden="true">
      <rect width="800" height="420" fill="var(--color-surface)" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const y = 70 + i * 42;
        const w = 620 - i * 38;
        const x = (800 - w) / 2;
        const opacity = 0.22 + i * 0.1;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={w}
              height={28}
              fill="none"
              stroke="currentColor"
              strokeOpacity={opacity}
              strokeWidth={1.2}
            />
            <rect
              x={x}
              y={y}
              width={Math.max(40, w * (0.12 + i * 0.07))}
              height={28}
              fill="var(--color-accent)"
              fillOpacity={0.4 + i * 0.07}
            />
          </g>
        );
      })}
      <line x1="90" y1="52" x2="710" y2="52" stroke="var(--color-accent)" strokeWidth="1" />
    </svg>
  );
}

function Network() {
  const nodes = [
    [400, 210],
    [220, 110],
    [580, 100],
    [160, 280],
    [640, 300],
    [320, 330],
    [500, 340],
    [300, 80],
    [510, 70],
    [250, 210],
    [560, 210],
  ] as const;
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 7],
    [2, 8],
    [1, 9],
    [2, 10],
    [3, 5],
    [4, 6],
    [9, 5],
    [10, 6],
  ];
  return (
    <svg viewBox="0 0 800 420" className="h-auto w-full text-fg" aria-hidden="true">
      <rect width="800" height="420" fill="var(--color-surface)" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeOpacity={0.35}
          strokeWidth={1}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 0 ? 10 : 5}
          fill={i === 0 ? "var(--color-accent)" : "currentColor"}
          fillOpacity={i === 0 ? 1 : 0.75}
        />
      ))}
    </svg>
  );
}

function Columns() {
  const heights = [180, 240, 140, 280, 200, 160, 250, 120, 210, 170];
  return (
    <svg viewBox="0 0 800 420" className="h-auto w-full text-fg" aria-hidden="true">
      <rect width="800" height="420" fill="var(--color-surface)" />
      {heights.map((h, i) => {
        const x = 90 + i * 64;
        return (
          <g key={i}>
            <rect
              x={x}
              y={360 - h}
              width={28}
              height={h}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.5}
              strokeWidth={1.2}
            />
            <rect
              x={x}
              y={360 - h * 0.35}
              width={28}
              height={h * 0.35}
              fill="var(--color-accent)"
              fillOpacity={0.6}
            />
          </g>
        );
      })}
      <line
        x1="70"
        y1="360"
        x2="730"
        y2="360"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
    </svg>
  );
}

function Flow() {
  return (
    <svg viewBox="0 0 800 420" className="h-auto w-full text-fg" aria-hidden="true">
      <rect width="800" height="420" fill="var(--color-surface)" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => {
          const x = 80 + col * 140;
          const y = 70 + row * 80;
          const fill = (row + col) % 3 === 0;
          return (
            <g key={`${row}-${col}`}>
              <rect
                x={x}
                y={y}
                width={88}
                height={36}
                fill={fill ? "var(--color-accent)" : "none"}
                fillOpacity={fill ? 0.55 : 1}
                stroke="currentColor"
                strokeOpacity={0.45}
                strokeWidth={1}
              />
              {col < 4 ? (
                <path
                  d={`M ${x + 88} ${y + 18} H ${x + 140}`}
                  stroke="currentColor"
                  strokeOpacity={0.28}
                  fill="none"
                />
              ) : null}
            </g>
          );
        }),
      )}
    </svg>
  );
}

function Grid() {
  return (
    <svg viewBox="0 0 800 420" className="h-auto w-full text-fg" aria-hidden="true">
      <rect width="800" height="420" fill="var(--color-surface)" />
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 14 }).map((_, c) => {
          const marked = (r * 3 + c * 5) % 7 === 0;
          return (
            <rect
              key={`${r}-${c}`}
              x={70 + c * 48}
              y={50 + r * 42}
              width={36}
              height={30}
              fill={marked ? "var(--color-accent)" : "none"}
              fillOpacity={marked ? 0.7 : 1}
              stroke="currentColor"
              strokeOpacity={0.32}
              strokeWidth={1}
            />
          );
        }),
      )}
    </svg>
  );
}
