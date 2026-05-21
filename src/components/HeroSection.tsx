import Hero from "@/assets/hero.jpg";
import { Crane, TgIcon } from "@/components/icons";
import { content } from "@/content";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="mx-auto max-w-7xl px-5 pt-8 pb-20 lg:px-16 lg:pt-10 lg:pb-25"
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blush px-3.5 py-2 text-xs font-semibold text-accent">
            <Crane size={16} /> Карьерный консультант · Санкт-Петербург
          </div>
          <h1 className="text-[clamp(44px,9vw,100px)] leading-none tracking-[-0.02em]">
            Помогаю найти
            <br />
            <em>свою</em> карьерную
            <br />
            траекторию.
          </h1>
          <p className="mt-6 max-w-135 text-[17px] leading-[1.55] text-ink-soft">
            Бережная работа над резюме, сопроводительными материалами и
            подготовкой к собеседованию — для студентов, начинающих и опытных
            специалистов.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={content.contacts.tg}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-5.5 py-3.5 text-[15px] font-semibold text-bg transition-transform hover:-translate-y-px"
            >
              <TgIcon /> Написать в Telegram
            </Link>
            <a
              href="#formats"
              className="inline-flex items-center gap-2.5 rounded-full border border-rule px-5.5 py-3.5 text-[15px] font-semibold text-accent transition-transform hover:-translate-y-px"
            >
              Все форматы →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-7 border-t border-rule pt-7 lg:mt-14 lg:gap-9 lg:pt-8">
            {content.numbers.map((n, i) => (
              <div key={i}>
                <div className="font-serif text-4xl leading-none text-accent lg:text-[44px]">
                  {n.n}
                </div>
                <div className="mt-1.5 text-xs text-ink-soft">{n.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-blush" />
          <Image
            src={Hero}
            alt="Надежда Серова"
            className="relative aspect-4/5 h-auto w-full rounded-[22px] object-cover"
            placeholder="blur"
            priority
          />
          <div className="absolute -bottom-4 -left-2 flex items-center gap-2.5 rounded-2xl border border-rule bg-card px-4 py-3 shadow-[0_12px_30px_-10px_rgba(74,21,100,0.2)] lg:-bottom-5 lg:-left-5 lg:gap-3 lg:px-5 lg:py-4">
            <Crane size={28} />
            <div>
              <div className="text-[11px] text-ink-soft lg:text-xs">
                Сейчас работаю в
              </div>
              <div className="text-[13px] font-bold text-ink lg:text-sm">
                Центре Карьеры ИТМО
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden rounded-3xl bg-linear-to-br from-accent to-accent-soft px-7 py-10 text-bg lg:mt-24 lg:px-16 lg:py-14">
        <span
          className="crane absolute -top-5 -right-5 rotate-15 bg-white/10"
          aria-hidden
          style={{ width: 200, height: 200 }}
        />
        <div className="relative max-w-220">
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white/70">
            Моё кредо
          </div>
          <p className="font-serif text-[clamp(22px,3.5vw,40px)] italic leading-[1.3]">
            «{content.motto}.»
          </p>
        </div>
      </div>
    </section>
  );
}
