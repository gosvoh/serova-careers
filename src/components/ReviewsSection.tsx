import { Crane } from "@/components/icons";
import { card, eyebrow, section } from "@/components/styles";
import { content } from "@/content";

export default function ReviewsSection() {
  return (
    <section id="reviews" className={section}>
      <div className="mb-10">
        <div className={eyebrow}>Отзывы</div>
        <h2 className="text-[clamp(28px,5vw,56px)] leading-[1.05]">
          Что говорят <em>после работы</em>
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {content.reviews.map((r, i) => (
          <div key={i} className={`${card} flex flex-col gap-3.5 p-7 lg:p-9`}>
            <Crane size={32} />
            <p className="font-serif text-[17px] italic leading-normal lg:text-[19px]">
              «{r.text}»
            </p>
            <div className="mt-auto flex items-center gap-3 border-t border-rule pt-3.5 text-sm font-semibold">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blush text-sm font-bold text-accent">
                {r.author[0]}
              </div>
              <div>{r.author}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
