import { eyebrow, section } from "@/components/styles";
import { content } from "@/content";

export default function FaqSection() {
  return (
    <section id="questions" className={section}>
      <div className={eyebrow}>Перед обращением</div>
      <h2 className="text-[clamp(32px,6vw,64px)] leading-[1.05]">Вопросы <em>и ответы</em></h2>
      <div className="mt-8 divide-y divide-rule border-y border-rule">
        {content.faq.map(({ question, answer }) => (
          <details key={question} className="group py-5">
            <summary className="cursor-pointer text-lg font-semibold text-accent">{question}</summary>
            <p className="mt-4 max-w-200 text-base leading-relaxed text-ink-soft">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
