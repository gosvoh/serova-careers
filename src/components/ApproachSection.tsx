import { Crane } from "@/components/icons";
import { card, eyebrow, section } from "@/components/styles";
import { content } from "@/content";

export default function ApproachSection() {
  return (
    <section id="approach" className={section}>
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
        <div>
          <div className={eyebrow}>Подход</div>
          <h2 className="text-[clamp(28px,5vw,56px)] leading-[1.05]">
            Принципы, которыми <em>дорожу</em>
          </h2>
        </div>
        <div className="grid gap-3.5 md:grid-cols-2 md:gap-4.5">
          {content.approaches.map((a, i) => (
            <div key={i} className={`${card} p-5.5 lg:p-7`}>
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blush">
                <Crane size={20} />
              </div>
              <h4 className="text-xl lg:text-[22px]">{a.t}</h4>
              <p className="mt-2 text-[13px] leading-[1.55] text-ink-soft lg:text-sm">
                {a.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
