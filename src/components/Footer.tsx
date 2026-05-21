import { Crane } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-[13px] text-ink-soft md:flex-row md:items-center md:justify-between md:px-16 md:py-8">
      <div className="flex items-center gap-2.5">
        <Crane size={20} /> serova.careers · {new Date().getFullYear()}
      </div>
      <div>Санкт-Петербург · онлайн по всему миру</div>
    </footer>
  );
}
