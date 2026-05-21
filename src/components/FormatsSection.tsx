import { Crane } from "@/components/icons";
import { card, eyebrow, section } from "@/components/styles";
import { content, type Format } from "@/content";
import Link from "next/link";

function FormatCard({
  f,
  fresh = false,
  wide = false,
}: {
  f: Format;
  fresh?: boolean;
  wide?: boolean;
}) {
  const base = "flex min-h-[320px] flex-col p-7 md:min-h-[340px] md:p-8";
  const skin = fresh
    ? "rounded-3xl bg-accent text-bg shadow-card border border-transparent"
    : card;
  const tag = fresh ? "bg-white/15 text-bg" : "bg-blush text-accent";
  const sub = fresh ? "text-white/85" : "text-ink-soft";
  const li = fresh ? "text-white/90" : "";
  const meta = fresh ? "text-white/70" : "text-ink-soft";
  const cta = fresh ? "bg-bg text-accent" : "bg-ink text-bg";
  return (
    <div className={`${skin} ${base}`}>
      {wide ? (
        <div className="mb-3.5 flex items-baseline justify-between gap-3">
          <h3 className={`text-[32px] ${fresh ? "text-bg" : ""}`}>{f.title}</h3>
          <span
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${tag}`}
          >
            {f.tag}
          </span>
        </div>
      ) : (
        <>
          <div className="mb-3.5 flex items-center justify-between">
            <span
              className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${tag}`}
            >
              {f.tag}
            </span>
          </div>
          <h3
            className={`mb-2 text-[32px] md:text-4xl lg:text-[40px] ${
              fresh ? "text-bg" : ""
            }`}
          >
            {f.title}
          </h3>
        </>
      )}
      <p className={`mb-3.5 text-sm leading-normal ${sub}`}>{f.sub}</p>
      <ul className="mb-auto flex list-none flex-col gap-2 p-0">
        {f.bullets.map((b, j) => (
          <li
            key={j}
            className={`flex items-start gap-2.5 text-[13px] leading-[1.4] ${li}`}
          >
            <Crane
              size={14}
              style={fresh ? { background: "var(--color-bg)" } : undefined}
            />{" "}
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className={`text-xs ${meta}`}>{f.meta}</span>
        <Link
          href={content.contacts.tg}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full px-3.5 py-2 text-xs font-semibold ${cta}`}
        >
          Записаться →
        </Link>
      </div>
    </div>
  );
}

export default function FormatsSection() {
  const top = content.formats.slice(0, 3);
  const bottom = content.formats.slice(3);
  return (
    <section id="formats" className={section}>
      <div className="mb-10 text-center">
        <div className={eyebrow}>Форматы работы</div>
        <h2 className="text-[clamp(32px,6vw,64px)] leading-[1.05]">
          Выберите <em>свой</em> формат
        </h2>
        <p className="mt-3.5 text-base text-ink-soft">
          Начать удобнее всего с FRESH — короткого знакомства
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-4.5">
        {top.map((f, i) => (
          <FormatCard key={i} f={f} fresh={f.title === "FRESH"} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:mt-4.5 md:grid-cols-2 md:gap-4.5">
        {bottom.map((f, i) => (
          <FormatCard key={i} f={f} wide />
        ))}
      </div>
    </section>
  );
}
