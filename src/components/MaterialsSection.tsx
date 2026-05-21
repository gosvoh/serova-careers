import { Crane } from "@/components/icons";
import { card, eyebrow, section } from "@/components/styles";
import { content } from "@/content";

export default function MaterialsSection() {
  return (
    <section id="materials" className={section}>
      <div className="mb-10">
        <div className={eyebrow}>Полезные материалы</div>
        <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05]">
          Скачайте и применяйте <em>прямо сейчас</em>
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {content.materials.map((m, i) => (
          <a
            key={i}
            href={m.href}
            target="_blank"
            rel="noreferrer"
            className={`${card} flex items-center gap-4 p-5.5 text-ink transition-all hover:translate-x-1 hover:shadow-[0_8px_24px_-10px_rgba(74,21,100,0.25)]`}
          >
            <Crane size={28} />
            <div className="flex-1 text-base font-semibold">{m.title}</div>
            <span className="font-serif text-sm italic text-accent">↓ PDF</span>
          </a>
        ))}
      </div>
    </section>
  );
}
