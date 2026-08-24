import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  EMITTERS,
  HOURS_SERIES,
  REGION_SPEND,
  STOCK_SERIES,
} from "@/lib/content";

type ChartId = "stock" | "hours" | "emitters" | "regions";

const TICK = {
  fill: "var(--color-subtle)",
  fontSize: 11,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
};
const GRID = { stroke: "var(--color-border)", strokeDasharray: "0" };

export function ArticleChart({ id }: { id: ChartId }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const meta = META[id];

  return (
    <figure className="my-10">
      <p className="rubric mb-2">{meta.kicker}</p>
      <p className="mb-5 font-display text-xl font-medium tracking-[-0.02em] text-fg">{meta.title}</p>
      <div className="h-64 w-full md:h-72">
        {ready ? <ChartBody id={id} /> : <div className="h-full w-full bg-surface" />}
      </div>
      <figcaption className="mt-4 border-t border-border pt-3 font-ui text-xs leading-relaxed text-subtle">
        {meta.source}
      </figcaption>
    </figure>
  );
}

function ChartBody({ id }: { id: ChartId }) {
  if (id === "stock") {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={STOCK_SERIES} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid {...GRID} vertical={false} />
          <XAxis dataKey="year" tick={TICK} axisLine={false} tickLine={false} />
          <YAxis tick={TICK} axisLine={false} tickLine={false} />
          <Tooltip content={<Tip />} />
          <Line
            type="monotone"
            dataKey="stock"
            stroke="var(--color-fg)"
            strokeWidth={1.6}
            dot={false}
            name="Stock"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (id === "hours") {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={HOURS_SERIES} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid {...GRID} vertical={false} />
          <XAxis dataKey="year" tick={TICK} axisLine={false} tickLine={false} />
          <YAxis tick={TICK} axisLine={false} tickLine={false} />
          <Tooltip content={<Tip />} />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="var(--color-fg)"
            strokeWidth={1.6}
            dot={{ r: 3, fill: "var(--color-fg)" }}
            name="Horas"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (id === "emitters") {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={EMITTERS} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid {...GRID} vertical={false} />
          <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} />
          <YAxis tick={TICK} axisLine={false} tickLine={false} unit="%" />
          <Tooltip content={<Tip />} />
          <Bar dataKey="share" fill="var(--color-fg)" name="Participación" maxBarSize={42} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={REGION_SPEND}
        layout="vertical"
        margin={{ top: 8, right: 16, left: 8, bottom: 0 }}
      >
        <CartesianGrid {...GRID} horizontal={false} />
        <XAxis type="number" tick={TICK} axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey="region"
          width={110}
          tick={TICK}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<Tip />} />
        <Bar dataKey="share" fill="var(--color-fg)" name="Participación" maxBarSize={16} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function Tip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number }[];
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="border border-border bg-bg px-3 py-2 font-ui text-xs text-fg">
      <p className="mb-1 text-subtle">{label}</p>
      {payload.map((p) => (
        <p key={p.name}>
          {p.name}: <span className="tabular">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

const META: Record<ChartId, { kicker: string; title: string; source: string }> = {
  stock: {
    kicker: "Gráfico",
    title: "Stock de normas con impacto empresarial, 2010–2025",
    source:
      "Fuente: Diario Oficial · Contraloría. Serie construida por Politarca. Dataset disponible en Datos.",
  },
  hours: {
    kicker: "Gráfico",
    title: "Horas anuales de cumplimiento · pyme mediana formal",
    source: "Encuesta Politarca, n = 1.247. Margen de error ±2,8 %.",
  },
  emitters: {
    kicker: "Gráfico",
    title: "Participación en normas de alto impacto por organismo",
    source: "Clasificación propia de alto impacto. Tres organismos concentran el 51 %.",
  },
  regions: {
    kicker: "Gráfico",
    title: "Participación en gasto discrecional regional",
    source: "DIPRES, ejecución presupuestaria 2014–2025, deflactada.",
  },
};
