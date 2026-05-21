import { Crane } from "@/components/icons";
import { card, eyebrow, section } from "@/components/styles";
import { content } from "@/content";

export default function ForWhomSection() {
  return (
    <section id="for-whom" className={section}>
      <div className="mb-10 text-center">
        <div className={eyebrow}>Для кого</div>
        <h2 className="text-[clamp(32px,6vw,64px)] leading-[1.05]">
          Три истории — <em>узнайте свою</em>
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {content.forWhom.map((w, i) => (
          <div
            key={i}
            className={`${card} flex min-h-70 flex-col p-7 md:min-h-85 md:p-8`}
          >
            <Crane size={48} className={w.craneRotate} />
            <h3 className="mt-4 mb-3 text-[28px] italic text-accent md:text-[32px]">
              {w.title}
            </h3>
            <p className="text-sm leading-[1.55] text-ink-soft">{w.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-6 rounded-3xl bg-ink p-7 text-bg md:mt-6 md:grid-cols-[1fr_2fr] md:items-center md:gap-12 md:p-12">
        <h3 className="text-[28px] leading-[1.1] text-bg md:text-4xl">
          Над чем мы
          <br />
          работаем{" "}
          <em
            className="text-[#d8b4f0] not-italic"
            style={{ fontStyle: "italic" }}
          >
            вместе
          </em>
        </h3>
        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          {content.workOn.map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-[15px] md:text-base"
            >
              <Crane size={20} style={{ background: "#d8b4f0" }} /> {w}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
