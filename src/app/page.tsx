import About from "@/assets/about.jpg";
import Contacts from "@/assets/contacts.jpg";
import Hero from "@/assets/hero.jpg";
import Origami from "@/assets/origami.svg";
import Quote from "@/assets/quote.svg";
import Telegram from "@/assets/telegram.svg";
import WhatsApp from "@/assets/whatsapp.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import fs from "node:fs/promises";
import ContactForm from "./ContactForm";

export const revalidate = 600;

const className = {
  header:
    "hidden md:flex w-full flex-row sticky top-0 z-10 py-4 items-center mb-4",
  section: "flex flex-col gap-4 md:gap-8",
  input: cn(
    "p-1 border border-[#999999] rounded-md outline-none transition-all",
    "-outline-offset-1 focus:outline-violet-500 focus:outline-2"
  ),
  button: cn(
    "p-2 bg-color-accent text-white font-bold rounded-md outline-none transition-all",
    "hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-100"
  ),
  "for-whom-origami": cn(
    "hidden md:block absolute top-0 left-0 scale-x-[-1] transform -translate-y-[95%] translate-x-2",
    "md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28"
  ),
  footer: "flex flex-row gap-8 items-center justify-center my-8 flex-wrap",
};

const ListItem = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      role="listitem"
      className="flex flex-row gap-2 md:gap-4 items-baseline"
    >
      <Image
        src={Origami}
        alt="Иконка списка"
        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8"
      />
      <p>{children}</p>
    </div>
  );
};

const Review = ({
  text,
  author,
}: {
  text: React.ReactNode;
  author: React.ReactNode;
}) => {
  return (
    <div className="relative p-6 italic border border-color-accent rounded-2xl">
      <Image
        src={Quote}
        width={75}
        height={75}
        alt="Иконка цитаты"
        className="absolute top-6 left-6 opacity-15"
      />
      <p className="text-center">{text}</p>
      <p className="text-end font-bold accent">{author}</p>
      <Image
        src={Quote}
        width={75}
        height={75}
        alt="Иконка цитаты"
        className="absolute bottom-6 right-6 opacity-15"
      />
    </div>
  );
};

const ThickBlock = ({
  children,
  outline = false,
  className,
}: React.PropsWithChildren<{ outline?: boolean; className?: string }>) => {
  if (outline)
    return (
      <div
        className={cn(
          "outline -outline-offset-2 outline-4 outline-color-accent rounded-2xl p-6",
          className
        )}
      >
        {children}
      </div>
    );
  return (
    <div
      className={cn("border-4 border-color-accent rounded-2xl p-6", className)}
    >
      {children}
    </div>
  );
};

const JobFormat = ({
  children,
  title,
}: React.PropsWithChildren<{ title: string }>) => {
  const className = cn(
    "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20",
    "rounded-2xl hover:transform hover:scale-110 transition-all active:scale-90"
  );

  return (
    <ThickBlock className="flex flex-col gap-4 md:gap-8">
      <p className="accent font-bold text-center">{title}</p>
      {children}
      <p className="text-center font-bold">Узнать подробности и записаться</p>
      <div className="flex flex-row gap-12 justify-center">
        <Link
          href="https://t.me/nadezhda_a_serova"
          target="_blank"
          className="p-2"
        >
          <Image
            src={Telegram}
            alt="Иконка Telergram"
            width={256}
            height={256}
            className={className}
          />
        </Link>
        <Link href="https://wa.me/+79811257012" target="_blank" className="p-2">
          <Image
            src={WhatsApp}
            alt="Иконка WhatsApp"
            width={256}
            height={256}
            className={className}
          />
        </Link>
      </div>
    </ThickBlock>
  );
};

async function Materials() {
  let materials: { [title: string]: string } = {};

  try {
    const db = await fs.readFile("./uploads/uploads.json");
    const files: typeof materials = JSON.parse(String(db));
    materials = files;
  } catch {}

  return (
    <section id="materials" className={className.section}>
      <h2>Полезные материалы</h2>
      <div role="list" className="flex flex-col gap-4 items-start">
        {Object.entries(materials).map(([title, path], i) => (
          <Link
            prefetch={false}
            key={i}
            href={`/uploads/${path}`}
            target="_blank"
          >
            <ListItem>{title}</ListItem>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className={className.header}>
        <a className="hover:no-underline accent font-bold" href="#">
          SEROVA.CAREERS
        </a>
        <nav className="ml-auto flex flex-row gap-2 lg:gap-4">
          <Link href="#about">Обо мне</Link>
          <Link href="#for-whom">Для кого</Link>
          <Link href="#approaches">Подходы</Link>
          <Link href="#format">Форматы</Link>
          <Link href="#materials">Материалы</Link>
          <Link href="#contacts">Контакты</Link>
        </nav>
      </header>
      <main className="flex flex-col gap-8 md:gap-32">
        <section
          className={cn(
            className.section,
            "md:grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] items-center"
          )}
        >
          <Image
            src={Hero}
            alt={"Фотография Надежды Серовой"}
            className="rounded-full w-1/2 md:w-full aspect-square"
            priority
          />
          <div className="flex flex-col gap-4 md:gap-8 text-center md:text-end md:justify-between h-full">
            <h1>Надежда Серова</h1>
            <p className="as-h2 text-black md:text-end text-balance">
              карьерный консультант для студентов, начинающих и опытных
              специалистов
            </p>
            <cite className="text-end text-balance">
              Мы проживаем жизнь, чтобы быть честными с самими собой, раскрыть
              свой потенциал, таланты и быть счастливыми!
            </cite>
          </div>
        </section>
        <section id="about" className={className.section}>
          <h2>Обо мне</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div role="list" className="flex flex-col gap-4">
              <ListItem>
                12 лет в сфере подбора, адаптации, обучения персонала
              </ListItem>
              <ListItem>
                Образование: <br />
                Специалист по связям с общественностью <br />
                Переводчик в сфере профессиональной коммуникации <br />
                Психология общения <br />
                Директор по персоналу
              </ListItem>
              <ListItem>
                В настоящем: карьерный консультант Факультета биотехнологий и
                Центра Карьеры Университета ИТМО
              </ListItem>
              <ListItem>
                В прошлом: HR бизнес-партнёр, Директор по персоналу,
                Руководитель отдела обучения и развития персонала, рекрутер
              </ListItem>
              <ListItem>1200+ собеседований</ListItem>
              <ListItem>550+ карьерных консультаций</ListItem>
            </div>
            <Image
              src={About}
              alt="Фотография Надежды Серовой"
              width={400}
              height={400}
              className="rounded-2xl aspect-square object-cover object-[50%_25%] mx-auto"
            />
          </div>
        </section>
        <section className={className.section}>
          <h2>Отзывы</h2>
          <Review
            text={
              <>
                Спасибо вам, Надежда!
                <br />
                После нашей совместной работы появилось больше уверенности в
                себе и в направлении, на которое я нацелен. Считаю, очень
                полезно знать свои карьерные цели, теперь они всегда в фокусе
                внимания.
              </>
            }
            author="Семён М."
          />
          <Review
            text={
              <>
                Мне особенно ценно, что я самостоятельно научилась грамотно
                составлять резюме и сопроводительное письмо, разобралась во всех
                нюансах, теперь смогу их корректировать по мере необходимости.
              </>
            }
            author="Валерия Х."
          />
          <Review
            text={
              <>
                Не думал, что необходимо учитывать столько важных деталей! Мы
                отлично подготовились к собеседованию, я чувствовал себя
                комфортно и фиксировал всё, что потом помогло принять мне
                правильное решение! Это работа мечты! Спасибо вам, Надежда.
              </>
            }
            author="Григорий С."
          />
          <Review
            text={
              <>
                Мне был очень полезен мастер-класс и последующее общение, я
                внесла много дополнений в своё резюме, много нового узнала о
                себе - это было целое исследование! Самое главное - я поняла,
                что нет ничего невозможного и что я - молодец)) С вами очень
                приятно и комфортно работать! Буду обязательно рекомендовать
                знакомым.
              </>
            }
            author="Мария М."
          />
        </section>
        <section id="for-whom" className={className.section}>
          <h2>Для кого</h2>
          <div className="flex flex-col gap-0">
            <ThickBlock outline className="md:w-1/2 ml-auto">
              <p>
                <span className="accent font-bold">Крутой вираж</span> – вы
                решили сменить свою карьерную траекторию. Вам нужны обновленные
                материалы для самопрезентации и понятный путь развития в новом
                направлении.
              </p>
            </ThickBlock>
            <ThickBlock outline className="md:w-8/12 ml-auto relative">
              <Image
                src={Origami}
                alt="Бумажный журавлик"
                className={className["for-whom-origami"]}
              />
              <p>
                <span className="accent font-bold">Новая ступень</span> – вы
                специалист с опытом и готовы к развитию, поэтому находитесь в
                поисках нового места работы. Важно опираться на ваш опыт,
                использовать его как базу для нового старта, грамотно составить
                резюме и все сопроводительные материалы.
              </p>
            </ThickBlock>
            <ThickBlock outline className="md:w-10/12 ml-auto relative">
              <Image
                src={Origami}
                alt="Бумажный журавлик"
                className={className["for-whom-origami"]}
              />
              <p>
                <span className="accent font-bold">Первая работа</span> – вы
                студент или начинающий специалист в поисках стажировки или
                постоянного места работы. На этом этапе важно определить ваши
                приоритеты, сформулировать цели и выделить сильные стороны.
              </p>
            </ThickBlock>
            <ThickBlock outline className="flex flex-col gap-4 relative">
              <Image
                src={Origami}
                alt="Бумажный журавлик"
                className={className["for-whom-origami"]}
              />
              <p className="accent font-bold">
                Над чем мы можем работать вместе:
              </p>
              <div role="list" className="flex flex-col gap-2">
                <ListItem>подготовка или усиление вашего резюме, CV</ListItem>
                <ListItem>
                  составление или дополнение сопроводительных и мотивационных
                  писем
                </ListItem>
                <ListItem>подготовка к собеседованию</ListItem>
                <ListItem>
                  обсуждение любых вопросов о вашей карьерной траектории
                </ListItem>
              </div>
            </ThickBlock>
          </div>
        </section>
        <section id="approaches" className={className.section}>
          <h2>Мои подходы</h2>
          <div role="list" className="flex flex-col gap-4">
            <ListItem>
              Забота и поддержка, бережное отношение к вашим запросам
            </ListItem>
            <ListItem>
              Индивидуальные решения ваших задач, свежий и объективный взгляд на
              ситуацию
            </ListItem>
            <ListItem>
              Внимание к деталям, пунктуальность, порядок, ясность и простота
            </ListItem>
            <ListItem>Защита конфиденциальных данных, надежность</ListItem>
          </div>
        </section>
        <section id="format" className={className.section}>
          <h2>Формат работы</h2>
          <JobFormat title="Индивидуальный">
            <p>
              Рекомендации к вашему резюме/CV/сопроводительному письму – работа
              с файлом: комментарии, уточняющие вопросы, рекомендации по
              дополнениям, изменениям, отзывы, общее впечатление.
            </p>
            <p>Формат: заочно, без встречи, ответ в виде аудиосообщения</p>
            <p>Срок: до 2 рабочих дней</p>
          </JobFormat>
          <JobFormat title="FRESH">
            <p>
              Онлайн консультация FRESH – знакомство: ответ на один вопрос по
              вашей карьерной ситуации, её обсуждение, разработка плана
              дальнейших действий
            </p>
            <p>
              Для чего: решить, требуется ли вам карьерный консультант, будут ли
              вам полезны мои подходы
            </p>
            <p>Продолжительность: 10 - 15 минут</p>
            <p>Формат: онлайн на любой удобной платформе</p>
            <p>Срок: в пределах 3 рабочих дней</p>
          </JobFormat>
          <JobFormat title="MINI">
            <p>
              Онлайн консультация MINI – встреча с рассмотрением вашего резюме
              или других карьерных материалов: уточнения, обсуждения каждого
              блока, рекомендации по усилению. Далее вы самостоятельно вносите
              правки. <br />
              Включает ответы на вопросы в процессе встречи. <br />
              Включает обратную связь по итоговому резюме, когда вы будете
              готовы.
            </p>
            <p>Формат: онлайн на любой удобной платформе</p>
            <p>Продолжительность: 30 - 40 минут</p>
          </JobFormat>
          <JobFormat title="MAXI">
            <p>
              Онлайн консультация MAXI – расширенная встреча с рассмотрением
              вашего резюме/СV, сопроводительного письма:  уточнения, обсуждения
              каждого блока, рекомендации по усилению. Далее вы самостоятельно
              вносите правки. <br />
              Включает рекомендации по подготовке к собеседованию, ответы на
              ваши вопросы. <br />
              Включает обратную связь по итоговым материалам, когда вы будете
              готовы. <br />
              Включает ответы на дополнительные возникшие вопросы в течение 3
              дней после встречи.
            </p>
            <p>Формат: онлайн на любой удобной платформе</p>
            <p>Продолжительность: 60-80 минут</p>
          </JobFormat>
          <JobFormat title="Групповой формат: (школьники, студенты, молодые специалисты)">
            <p className="accent font-bold">
              Мастер-класс «Журавль в руке: с чего начинается успешная карьера»
            </p>
            <p>Формат: онлайн</p>
            <p>Продолжительность: 2 встречи (2,5-3 часа)</p>
            <p>Количество участников: от 3 до 15</p>
            <p className="text-center">
              День 1<br />
              интерактивная лекция
            </p>
            <p>
              «Визитная карточка моей репутации: я - профессионал, моё резюме,
              CV, сопроводительные материалы»:
            </p>
            <div role="list" className="flex flex-col gap-2">
              <ListItem>самопозиционирование</ListItem>
              <ListItem>
                выявление карьерных целей, ценностей, ожиданий
              </ListItem>
              <ListItem>
                простые и понятные шаги и инструменты для создания материалов о
                себе
              </ListItem>
              <ListItem>требования и лайфхаки</ListItem>
              <ListItem>ответы на вопросы</ListItem>
            </div>
            <p>
              Получение памятки – инструкции по созданию резюме и
              сопроводительных материалов
            </p>
            <p className="text-center">
              День 2<br />
              индивидуальная работа над вашими карьерными материалами:
              рекомендации и советы
            </p>
          </JobFormat>
        </section>
        {/* <section id="materials" className={className.section}>
          <h2>Полезные материалы</h2>
          <div role="list" className="flex flex-col gap-4 items-start">
            {Object.entries(materials).map(([title, path], i) => (
              <Link key={i} href={`/uploads/${path}`} target="_blank">
                <ListItem>{title}</ListItem>
              </Link>
            ))}
          </div>
        </section> */}
        {/* <React.Suspense fallback={<Loading />}> */}
        <Materials />
        {/* </React.Suspense> */}
        <section id="contacts" className={className.section}>
          <h2>Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.75fr] xl:grid-cols-[1fr_2fr] 2xl:grid-cols-[1fr_2.25fr] gap-8">
            <Image
              src={Contacts}
              alt="Фотография Надежды Серовой"
              className="rounded-2xl hidden md:block w-full h-full object-cover"
            />
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className={className.footer}>
        <p className="footer-p">
          Icons by{" "}
          <Link href="https://www.flaticon.com" target="_blank">
            Flaticon
          </Link>
        </p>
        <p className="footer-p">2024</p>
        <p className="footer-p">
          Created by{" "}
          <Link href="https://github.com/gosvoh" target="_blank">
            gosvoh
          </Link>
        </p>
      </footer>
    </>
  );
}
