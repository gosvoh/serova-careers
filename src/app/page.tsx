import About from "@/assets/about.jpg";
import Hero from "@/assets/hero.jpg";
import Image from "next/image";
import Link from "next/link";

const content = {
  motto:
    "Мы проживаем жизнь, чтобы быть честными с самими собой, раскрыть свой потенциал, таланты и быть счастливыми",
  about: [
    "12 лет в сфере подбора, адаптации, обучения персонала",
    "В настоящем: карьерный консультант Факультета биотехнологий и Центра Карьеры Университета ИТМО",
    "В прошлом: HR бизнес-партнёр, Директор по персоналу, Руководитель отдела обучения и развития, рекрутер",
  ],
  education: [
    "Специалист по связям с общественностью",
    "Переводчик в сфере профессиональной коммуникации",
    "Психология общения",
    "Директор по персоналу",
  ],
  numbers: [
    { n: "12", l: "лет в HR" },
    { n: "1200+", l: "собеседований" },
    { n: "550+", l: "карьерных консультаций" },
  ],
  reviews: [
    {
      text: "После нашей совместной работы появилось больше уверенности в себе и в направлении, на которое я нацелен. Считаю, очень полезно знать свои карьерные цели, теперь они всегда в фокусе внимания.",
      author: "Семён М.",
    },
    {
      text: "Мне особенно ценно, что я самостоятельно научилась грамотно составлять резюме и сопроводительное письмо, разобралась во всех нюансах, теперь смогу их корректировать по мере необходимости.",
      author: "Валерия Х.",
    },
    {
      text: "Не думал, что необходимо учитывать столько важных деталей! Мы отлично подготовились к собеседованию, я чувствовал себя комфортно и фиксировал всё, что потом помогло принять мне правильное решение. Это работа мечты!",
      author: "Григорий С.",
    },
    {
      text: "Был очень полезен мастер-класс и последующее общение, я внесла много дополнений в своё резюме, много нового узнала о себе — это было целое исследование. С вами очень приятно и комфортно работать.",
      author: "Мария М.",
    },
  ],
  forWhom: [
    {
      title: "Крутой вираж",
      text: "Вы решили сменить свою карьерную траекторию. Нужны обновлённые материалы для самопрезентации и понятный путь развития в новом направлении.",
      craneRotate: "-rotate-12",
    },
    {
      title: "Новая ступень",
      text: "Вы специалист с опытом и готовы к развитию, поэтому находитесь в поисках нового места работы. Важно опираться на ваш опыт, использовать его как базу для нового старта.",
      craneRotate: "rotate-[14deg]",
    },
    {
      title: "Первая работа",
      text: "Вы студент или начинающий специалист в поисках стажировки или постоянного места работы. Важно определить приоритеты, сформулировать цели и выделить сильные стороны.",
      craneRotate: "",
    },
  ],
  workOn: [
    "Подготовка или усиление вашего резюме, CV",
    "Составление или дополнение сопроводительных и мотивационных писем",
    "Подготовка к собеседованию",
    "Обсуждение любых вопросов о вашей карьерной траектории",
  ],
  approaches: [
    {
      t: "Забота",
      d: "Бережное отношение к вашим запросам и поддержка на всех этапах",
    },
    {
      t: "Индивидуальность",
      d: "Свежий и объективный взгляд на каждую ситуацию",
    },
    { t: "Внимание к деталям", d: "Пунктуальность, порядок, ясность и простота" },
    { t: "Конфиденциальность", d: "Защита данных и надёжность работы" },
  ],
  formats: [
    {
      tag: "Заочно",
      title: "Индивидуальный",
      sub: "Рекомендации к вашему резюме / CV / сопроводительному письму",
      bullets: [
        "Комментарии и уточняющие вопросы по файлу",
        "Рекомендации по дополнениям, изменениям, общее впечатление",
        "Ответ в виде аудиосообщения",
      ],
      meta: "до 2 рабочих дней",
    },
    {
      tag: "Знакомство",
      title: "FRESH",
      sub: "Онлайн-консультация — знакомство и ответ на один вопрос",
      bullets: [
        "Обсуждение вашей карьерной ситуации",
        "Разработка плана дальнейших действий",
        "Решить, будут ли вам полезны мои подходы",
      ],
      meta: "10–15 минут · в течение 3 рабочих дней",
    },
    {
      tag: "Онлайн",
      title: "MINI",
      sub: "Встреча с разбором резюме и других карьерных материалов",
      bullets: [
        "Разбор каждого блока, рекомендации по усилению",
        "Ответы на вопросы во время встречи",
        "Обратная связь по итоговому резюме",
      ],
      meta: "30–40 минут",
    },
    {
      tag: "Онлайн",
      title: "MAXI",
      sub: "Расширенная встреча: резюме, CV, сопроводительное, интервью",
      bullets: [
        "Разбор всех материалов и рекомендации",
        "Подготовка к собеседованию",
        "Обратная связь и вопросы в течение 3 дней после встречи",
      ],
      meta: "60–80 минут",
    },
    {
      tag: "Группа · 3–15 чел.",
      title: "Журавль в руке",
      sub: "Мастер-класс «С чего начинается успешная карьера»",
      bullets: [
        "День 1 — интерактивная лекция о самопозиционировании",
        "День 2 — индивидуальная работа над материалами",
        "Памятка-инструкция по созданию резюме",
      ],
      meta: "2 встречи · 2,5–3 часа",
    },
  ],
  materials: [
    {
      title: "Бланк оценки «Подходит ли мне вакансия»",
      href: "/uploads/Бланк оценки Подходит ли мне вакансия.pdf",
    },
    {
      title: "Инструкция по созданию резюме",
      href: "/uploads/Инструкция по созданию резюме.pdf",
    },
    {
      title: "Какие вопросы полезно задать на собеседовании",
      href: "/uploads/Какие вопросы полезно задать на собеседовании.pdf",
    },
  ],
  contacts: {
    tg: "https://t.me/nadezhda_a_serova",
    tgHandle: "@nadezhda_a_serova",
    wa: "https://wa.me/+79811257012",
    waHandle: "+7 981 125 70 12",
  },
};

type CraneProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

const Crane = ({ size = 48, className, style }: CraneProps) => (
  <span
    className={`crane${className ? " " + className : ""}`}
    aria-hidden
    style={{ width: size, height: size, ...style }}
  />
);

const TgIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19l-9.49 5.99-4.1-1.3c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
  </svg>
);

const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2s-.8.9-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.9-1.5-4-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.7-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

const card = "rounded-3xl bg-card p-6 border border-rule shadow-card";
const eyebrow =
  "mb-3.5 text-xs font-bold uppercase tracking-[0.12em] text-accent";
const section = "mx-auto max-w-[1280px] py-15 px-5 lg:py-20 lg:px-16";

function Nav() {
  const links: [string, string][] = [
    ["#about", "Обо мне"],
    ["#for-whom", "Для кого"],
    ["#approach", "Подход"],
    ["#formats", "Форматы"],
    ["#reviews", "Отзывы"],
    ["#materials", "Материалы"],
  ];
  return (
    <div className="sticky top-0 z-50 p-4 lg:px-12 lg:py-6">
      <header className="mx-auto flex max-w-[1280px] items-center gap-4 rounded-full border border-rule bg-card/85 py-2.5 pr-4 pl-[18px] backdrop-blur-md lg:gap-6 lg:px-6 lg:py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Crane size={26} />
          <span className="font-serif text-base italic text-accent lg:text-lg">
            Надежда Серова
          </span>
        </a>
        <nav className="ml-auto hidden gap-6 text-sm lg:flex">
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
          href={content.contacts.tg}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-[13px] font-semibold text-bg lg:ml-0 lg:px-[18px] lg:text-sm"
        >
          <TgIcon size={14} /> Написать
        </Link>
      </header>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1280px] px-5 pt-8 pb-20 lg:px-16 lg:pt-10 lg:pb-[100px]"
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
          <p className="mt-6 max-w-[540px] text-[17px] leading-[1.55] text-ink-soft">
            Бережная работа над резюме, сопроводительными материалами и
            подготовкой к собеседованию — для студентов, начинающих и опытных
            специалистов.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={content.contacts.tg}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-[22px] py-3.5 text-[15px] font-semibold text-bg transition-transform hover:-translate-y-px"
            >
              <TgIcon /> Написать в Telegram
            </Link>
            <a
              href="#formats"
              className="inline-flex items-center gap-2.5 rounded-full border border-rule px-[22px] py-3.5 text-[15px] font-semibold text-accent transition-transform hover:-translate-y-px"
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
            className="relative aspect-[4/5] h-auto w-full rounded-[22px] object-cover"
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

      <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-soft px-7 py-10 text-bg lg:mt-24 lg:px-16 lg:py-14">
        <span
          className="crane absolute -top-5 -right-5 rotate-[15deg] bg-white/10"
          aria-hidden
          style={{ width: 200, height: 200 }}
        />
        <div className="relative max-w-[880px]">
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

function AboutSection() {
  return (
    <section id="about" className={section}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div className="relative">
          <Image
            src={About}
            alt="Надежда Серова"
            className="aspect-[3/4] h-auto w-full rounded-3xl object-cover object-[50%_25%]"
            placeholder="blur"
          />
          <div className="absolute bottom-4 left-4 max-w-[220px] rounded-2xl border border-rule bg-card px-[18px] py-3.5 shadow-[0_12px_30px_-10px_rgba(74,21,100,0.15)] lg:bottom-6 lg:left-[-24px] lg:max-w-none lg:px-6 lg:py-5">
            <div className="mb-1.5 font-serif text-base italic text-ink lg:text-lg">
              «Бережно, по делу, с теплом»
            </div>
            <div className="text-[11px] text-ink-soft lg:text-xs">
              как обо мне говорят клиенты
            </div>
          </div>
        </div>
        <div>
          <div className={eyebrow}>Обо мне</div>
          <h2 className="text-[clamp(28px,5vw,56px)] leading-[1.05]">
            12 лет в HR — и тысячи историй, которые научили <em>слышать</em>.
          </h2>
          <div className="mt-7 flex flex-col gap-3">
            {content.about.map((a, i) => (
              <div
                key={i}
                className={`${card} flex items-start gap-3.5 p-[18px]`}
              >
                <Crane size={24} style={{ marginTop: 2 }} />
                <p className="text-[15px] leading-[1.5]">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-dashed border-rule px-5 py-5 lg:px-[22px]">
            <div className="mt-7 mb-2.5 text-xs font-bold uppercase tracking-[0.12em] text-accent">
              Образование
            </div>
            <ul className="flex list-none flex-col gap-1.5 p-0">
              {content.education.map((e, i) => (
                <li key={i} className="text-sm text-ink-soft">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWhomSection() {
  return (
    <section id="for-whom" className={section}>
      <div className="mb-10 text-center">
        <div className={eyebrow}>Для кого</div>
        <h2 className="text-[clamp(32px,6vw,64px)] leading-[1.05]">
          Три истории — <em>узнайте свою</em>
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {content.forWhom.map((w, i) => (
          <div
            key={i}
            className={`${card} flex min-h-[280px] flex-col p-7 md:min-h-[340px] md:p-8`}
          >
            <Crane size={48} className={w.craneRotate} />
            <h3 className="mt-4 mb-3 text-[28px] italic text-accent md:text-[32px]">
              {w.title}
            </h3>
            <p className="text-sm leading-[1.55] text-ink-soft">{w.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-6 rounded-3xl bg-ink p-7 text-bg md:mt-6 md:grid-cols-[1fr_2fr] md:items-center md:gap-12 md:p-12">
        <h3 className="text-[28px] leading-[1.1] text-bg md:text-4xl">
          Над чем мы
          <br />
          работаем{" "}
          <em className="text-[#d8b4f0] not-italic" style={{ fontStyle: "italic" }}>
            вместе
          </em>
        </h3>
        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          {content.workOn.map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-[15px] md:text-base"
            >
              <Crane size={20} style={{ background: "#d8b4f0" }} /> {w}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section id="approach" className={section}>
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
        <div>
          <div className={eyebrow}>Подход</div>
          <h2 className="text-[clamp(28px,5vw,56px)] leading-[1.05]">
            Принципы, которыми <em>дорожу</em>
          </h2>
        </div>
        <div className="grid gap-3.5 md:grid-cols-2 md:gap-[18px]">
          {content.approaches.map((a, i) => (
            <div key={i} className={`${card} p-[22px] lg:p-7`}>
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

function FormatCard({
  f,
  fresh = false,
  wide = false,
}: {
  f: (typeof content.formats)[number];
  fresh?: boolean;
  wide?: boolean;
}) {
  const base = "flex min-h-[320px] flex-col p-7 md:min-h-[340px] md:p-8";
  const skin = fresh
    ? "rounded-3xl bg-accent text-bg shadow-card border border-transparent"
    : card;
  const tag = fresh
    ? "bg-white/15 text-bg"
    : "bg-blush text-accent";
  const sub = fresh ? "text-white/85" : "text-ink-soft";
  const li = fresh ? "text-white/90" : "";
  const meta = fresh ? "text-white/70" : "text-ink-soft";
  const cta = fresh ? "bg-bg text-accent" : "bg-ink text-bg";
  return (
    <div className={`${skin} ${base}`}>
      {wide ? (
        <div className="mb-3.5 flex items-baseline justify-between gap-3">
          <h3 className={`text-[32px] ${fresh ? "text-bg" : ""}`}>{f.title}</h3>
          <span
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${tag}`}
          >
            {f.tag}
          </span>
        </div>
      ) : (
        <>
          <div className="mb-3.5 flex items-center justify-between">
            <span
              className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${tag}`}
            >
              {f.tag}
            </span>
          </div>
          <h3
            className={`mb-2 text-[32px] md:text-4xl lg:text-[40px] ${
              fresh ? "text-bg" : ""
            }`}
          >
            {f.title}
          </h3>
        </>
      )}
      <p className={`mb-3.5 text-sm leading-[1.5] ${sub}`}>{f.sub}</p>
      <ul className="mb-auto flex list-none flex-col gap-2 p-0">
        {f.bullets.map((b, j) => (
          <li key={j} className={`flex items-start gap-2.5 text-[13px] leading-[1.4] ${li}`}>
            <Crane size={14} style={fresh ? { background: "var(--color-bg)" } : undefined} /> {b}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className={`text-xs ${meta}`}>{f.meta}</span>
        <Link
          href={content.contacts.tg}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full px-3.5 py-2 text-xs font-semibold ${cta}`}
        >
          Записаться →
        </Link>
      </div>
    </div>
  );
}

function FormatsSection() {
  const top = content.formats.slice(0, 3);
  const bottom = content.formats.slice(3);
  return (
    <section id="formats" className={section}>
      <div className="mb-10 text-center">
        <div className={eyebrow}>Форматы работы</div>
        <h2 className="text-[clamp(32px,6vw,64px)] leading-[1.05]">
          Выберите <em>свой</em> формат
        </h2>
        <p className="mt-3.5 text-base text-ink-soft">
          Начать удобнее всего с FRESH — короткого знакомства
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-[18px]">
        {top.map((f, i) => (
          <FormatCard key={i} f={f} fresh={f.title === "FRESH"} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:mt-[18px] md:grid-cols-2 md:gap-[18px]">
        {bottom.map((f, i) => (
          <FormatCard key={i} f={f} wide />
        ))}
      </div>
    </section>
  );
}

function ReviewsSection() {
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
          <div
            key={i}
            className={`${card} flex flex-col gap-3.5 p-7 lg:p-9`}
          >
            <Crane size={32} />
            <p className="font-serif text-[17px] italic leading-[1.5] lg:text-[19px]">
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

function MaterialsSection() {
  return (
    <section id="materials" className={section}>
      <div className="mb-10">
        <div className={eyebrow}>Полезные материалы</div>
        <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05]">
          Скачайте и применяйте <em>прямо сейчас</em>
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {content.materials.map((m, i) => (
          <a
            key={i}
            href={m.href}
            target="_blank"
            rel="noreferrer"
            className={`${card} flex items-center gap-4 p-[22px] text-ink transition-all hover:translate-x-1 hover:shadow-[0_8px_24px_-10px_rgba(74,21,100,0.25)]`}
          >
            <Crane size={28} />
            <div className="flex-1 text-base font-semibold">{m.title}</div>
            <span className="font-serif text-sm italic text-accent">↓ PDF</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1280px] px-5 pt-10 pb-16 lg:px-16 lg:pt-16 lg:pb-24"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-accent to-accent-soft px-7 py-11 text-bg lg:rounded-[40px] lg:p-20">
        <span
          className="crane absolute -right-10 -bottom-10 -rotate-[20deg] bg-white/[0.06]"
          aria-hidden
          style={{ width: 300, height: 300 }}
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Crane
              size={48}
              style={{ background: "var(--color-bg)", marginBottom: 24 }}
            />
            <h2 className="text-[clamp(36px,7vw,72px)] leading-none tracking-[-0.02em] text-bg">
              Напишите —<br />
              <em className="text-[#f0d8ff]">отвечу лично</em>
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] text-white/85">
              Самый быстрый способ начать — записаться на FRESH, 10–15-минутное
              знакомство онлайн. Дальше уже понятнее, какой формат подходит
              именно вам.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href={content.contacts.tg}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 rounded-2xl bg-bg px-[22px] py-[18px] text-accent transition-transform hover:-translate-y-px lg:gap-4 lg:rounded-[20px] lg:px-7 lg:py-6"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-bg lg:h-12 lg:w-12 lg:rounded-2xl">
                <TgIcon size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-[11px] text-ink-soft">Telegram</div>
                <div className="text-base font-bold lg:text-lg">
                  {content.contacts.tgHandle}
                </div>
              </div>
              <span className="text-[22px] lg:text-2xl">→</span>
            </Link>
            <Link
              href={content.contacts.wa}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 rounded-2xl border border-white/20 bg-white/10 px-[22px] py-[18px] text-bg transition-transform hover:-translate-y-px lg:gap-4 lg:rounded-[20px] lg:px-7 lg:py-6"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-bg lg:h-12 lg:w-12 lg:rounded-2xl">
                <WaIcon size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-[11px] text-white/70">WhatsApp</div>
                <div className="text-base font-bold lg:text-lg">
                  {content.contacts.waHandle}
                </div>
              </div>
              <span className="text-[22px] lg:text-2xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-7 text-[13px] text-ink-soft md:flex-row md:items-center md:justify-between md:px-16 md:py-8">
      <div className="flex items-center gap-2.5">
        <Crane size={20} /> serova.careers · {new Date().getFullYear()}
      </div>
      <div>Санкт-Петербург · онлайн по всему миру</div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <span
          className="crane absolute top-[320px] -left-8 -rotate-[18deg] opacity-[0.04]"
          style={{ width: 140, height: 140 }}
        />
        <span
          className="crane absolute top-[1800px] right-10 rotate-[22deg] opacity-[0.05]"
          style={{ width: 90, height: 90 }}
        />
        <span
          className="crane absolute top-[3400px] left-16 -rotate-[8deg] -scale-x-100 opacity-[0.04]"
          style={{ width: 120, height: 120 }}
        />
      </div>
      <Nav />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ForWhomSection />
        <ApproachSection />
        <FormatsSection />
        <ReviewsSection />
        <MaterialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
