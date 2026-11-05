import { card, eyebrow, section } from "@/components/styles";
import VideoPlayer from "@/components/VideoPlayer";
import { content } from "@/content";

export default function VideosSection() {
  const video = content.video;
  return (
    <section id="videos" className={section}>
      <div className={eyebrow}>Видео · бесплатный мастер-класс</div>
      <h2 className="max-w-200 text-[clamp(32px,6vw,64px)] leading-[1.05]">
        Не строй карьеру. <em>Строй жизнь</em>
      </h2>
      <div className={`${card} mt-8 grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-8`}>
        <div className="min-w-0">
          <VideoPlayer title={video.title} src={video.embedUrl} />
          <a href={video.url} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-accent underline underline-offset-4">
            Открыть видео в Google Drive ↗
          </a>
        </div>
        <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
          <p className="font-serif text-2xl text-ink">{video.intro}</p>
          <p>{video.description}</p>
          <p>{video.workbook}</p>
        </div>
      </div>
      <a href="#contact" className="mt-7 inline-flex rounded-full bg-accent px-6 py-4 text-center text-[15px] font-semibold text-bg transition-transform hover:-translate-y-px">
        У меня есть индивидуальный запрос
      </a>
    </section>
  );
}
