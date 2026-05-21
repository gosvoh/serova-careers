import About from "@/assets/about.jpg";
import { Crane } from "@/components/icons";
import { card, eyebrow, section } from "@/components/styles";
import { content } from "@/content";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className={section}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div className="relative">
          <Image
            src={About}
            alt="Надежда Серова"
            className="aspect-3/4 h-auto w-full rounded-3xl object-cover object-[50%_25%]"
            placeholder="blur"
          />
          <div className="absolute bottom-4 left-4 max-w-55 rounded-2xl border border-rule bg-card px-4.5 py-3.5 shadow-[0_12px_30px_-10px_rgba(74,21,100,0.15)] lg:bottom-6 lg:-left-6 lg:max-w-none lg:px-6 lg:py-5">
            <div className="mb-1.5 font-serif text-base italic text-ink lg:text-lg">
              «Бережно, по делу, с теплом»
            </div>
            <div className="text-[11px] text-ink-soft lg:text-xs">
              как обо мне говорят клиенты
            </div>
          </div>
        </div>
        <div>
          <div className={eyebrow}>Обо мне</div>
          <h2 className="text-[clamp(28px,5vw,56px)] leading-[1.05]">
            12 лет в HR — и тысячи историй, которые научили <em>слышать</em>.
          </h2>
          <div className="mt-7 flex flex-col gap-3">
            {content.about.map((a, i) => (
              <div key={i} className={`${card} flex items-start gap-3.5 p-4.5`}>
                <Crane size={24} style={{ marginTop: 2 }} />
                <p className="text-[15px] leading-normal">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-dashed border-rule px-5 py-5 lg:px-5.5">
            <div className="mt-7 mb-2.5 text-xs font-bold uppercase tracking-[0.12em] text-accent">
              Образование
            </div>
            <ul className="flex list-none flex-col gap-1.5 p-0">
              {content.education.map((e, i) => (
                <li key={i} className="text-sm text-ink-soft">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
