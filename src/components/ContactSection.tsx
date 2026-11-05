import { Crane, TgIcon, WaIcon } from "@/components/icons";
import { content } from "@/content";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-5 pt-10 pb-16 lg:px-16 lg:pt-16 lg:pb-24"
    >
      <div className="relative overflow-hidden rounded-4xl bg-linear-to-b from-accent to-accent-soft px-7 py-11 text-bg lg:rounded-[40px] lg:p-20">
        <span
          className="crane absolute -right-10 -bottom-10 rotate-[-20deg] bg-white/6"
          aria-hidden
          style={{ width: 300, height: 300 }}
        />
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Crane
              size={48}
              style={{ background: "var(--color-bg)", marginBottom: 24 }}
            />
            <h2 className="text-[clamp(36px,7vw,72px)] leading-none tracking-[-0.02em] text-bg">
              Напишите —<br />
              <em className="text-[#f0d8ff]">отвечу лично</em>
            </h2>
            <p className="mt-5 max-w-120 text-[17px] text-white/85">
              Расскажите о своей карьерной ситуации и о том, с чем нужна помощь.
              Выберите удобный способ связи — Telegram, WhatsApp или почту.
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-3">
            <a
              href={`mailto:${content.contacts.email}`}
              className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-4.5 text-bg transition-transform hover:-translate-y-px lg:px-7 lg:py-6"
            >
              <span aria-hidden className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl">@</span>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-[11px] text-white/70">Почта</div>
                <div className="break-all text-sm font-bold lg:text-lg">{content.contacts.email}</div>
              </div>
              <span aria-hidden className="hidden sm:inline text-[22px]">→</span>
            </a>
            <Link
              href={content.contacts.tg}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-bg px-4 py-4.5 text-accent transition-transform hover:-translate-y-px lg:gap-4 lg:rounded-[20px] lg:px-7 lg:py-6"
            >
              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-accent text-bg lg:h-12 lg:w-12 lg:rounded-2xl">
                <TgIcon size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-[11px] text-ink-soft">Telegram</div>
                <div className="break-all text-sm font-bold lg:text-lg">
                  {content.contacts.tgHandle}
                </div>
              </div>
              <span className="hidden sm:inline text-[22px] lg:text-2xl">→</span>
            </Link>
            <Link
              href={content.contacts.wa}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-4.5 text-bg transition-transform hover:-translate-y-px lg:gap-4 lg:rounded-[20px] lg:px-7 lg:py-6"
            >
              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-bg lg:h-12 lg:w-12 lg:rounded-2xl">
                <WaIcon size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-[11px] text-white/70">WhatsApp</div>
                <div className="break-all text-sm font-bold lg:text-lg">
                  {content.contacts.waHandle}
                </div>
              </div>
              <span className="hidden sm:inline text-[22px] lg:text-2xl">→</span>
            </Link>
          </div>
        </div>
        <div className="relative mt-8 flex flex-col items-start gap-4 border-t border-white/20 pt-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl">Продолжим знакомство?</p>
            <p className="mt-2 text-sm text-white/85">Читайте мой Telegram-канал о карьере.</p>
          </div>
          <a href={content.contacts.channel} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-bg">
            <TgIcon size={18} /> Читать канал ↗
          </a>
        </div>
      </div>
    </section>
  );
}
