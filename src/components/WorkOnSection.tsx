import { Crane } from "@/components/icons";
import { eyebrow, section } from "@/components/styles";
import { content } from "@/content";

export default function WorkOnSection() {
  return (
    <section id="work-on" className={section}>
      <div className={eyebrow}>Ваш запрос</div>
      <h2 className="max-w-200 text-[clamp(32px,6vw,64px)] leading-[1.05]">
        Над чем мы можем <em>поработать вместе</em>
      </h2>
      <div className="mt-8 grid gap-5 rounded-3xl bg-ink p-7 text-bg md:grid-cols-2 md:gap-8 md:p-12">
        {content.workOn.map((item) => (
          <div key={item} className="flex items-start gap-3 text-base leading-relaxed">
            <Crane size={24} style={{ background: "#d8b4f0", marginTop: 3 }} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
