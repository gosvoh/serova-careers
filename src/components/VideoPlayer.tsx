"use client";

import { useState } from "react";

export default function VideoPlayer({ title, src }: { title: string; src: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="aspect-video overflow-hidden rounded-2xl bg-ink">
      {active ? (
        <iframe
          src={src}
          title={`Мастер-класс «${title}»`}
          className="h-full w-full border-0"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-4 bg-linear-to-br from-accent to-ink px-5 py-6 text-bg transition-colors hover:from-accent-soft focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-bg"
          aria-label={`Смотреть мастер-класс «${title}»`}
        >
          <span aria-hidden className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 text-2xl">▶</span>
          <span className="text-base font-semibold">Смотреть мастер-класс</span>
        </button>
      )}
    </div>
  );
}
