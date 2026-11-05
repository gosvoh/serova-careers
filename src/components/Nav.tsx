import { Crane, TgIcon } from "@/components/icons";
import Link from "next/link";

export default function Nav() {
  const links: [string, string][] = [
    ["#about", "Обо мне"],
    ["#work-on", "Ваш запрос"],
    ["#approach", "Подход"],
    ["#videos", "Видео"],
    ["#reviews", "Отзывы"],
    ["#materials", "Материалы"],
  ];
  return (
    <div className="sticky top-0 z-50 p-4 lg:px-12 lg:py-6">
      <header className="mx-auto flex max-w-7xl items-center gap-4 rounded-full border border-rule bg-card/85 py-2.5 pr-4 pl-4.5 backdrop-blur-md lg:gap-6 lg:px-6 lg:py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Crane size={26} />
          <span className="font-serif text-base italic text-accent lg:text-lg">
            Надежда Серова
          </span>
        </a>
        <nav className="ml-auto hidden gap-6 text-sm min-[1100px]:flex">
          {links.map(([h, t]) => (
            <a
              key={h}
              href={h}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              {t}
            </a>
          ))}
        </nav>
        <Link
          href="#contact"
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-[13px] font-semibold text-bg min-[1100px]:ml-0 lg:px-4.5 lg:text-sm"
        >
          <TgIcon size={14} /> Написать
        </Link>
      </header>
    </div>
  );
}
