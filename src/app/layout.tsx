import type { Metadata, Viewport } from "next";
import { Manrope, PT_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f4efe6",
};

export const metadata: Metadata = {
  title: "SEROVA.CAREERS",
  description: "Надежда Серова - карьерный консультант",
  category: "Business",
  applicationName: "SEROVA.CAREERS",
  authors: [
    { name: "Aleksey Vokhmin", url: "https://github.com/gosvoh" },
    { name: "Nadezhda Serova", url: "https://serova.careers" },
  ],
  icons: "https://serova.careers/favicon.ico",
  robots: "index, follow",
  metadataBase: new URL("https://serova.careers"),
  creator: "Aleksey Vokhmin",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://serova.careers",
    title: "SEROVA.CAREERS",
    description: "Надежда Серова - карьерный консультант",
    images: [
      {
        url: "https://serova.careers/og-logo.png",
        secureUrl: "https://serova.careers/og-logo.png",
        width: 819,
        height: 309,
        alt: "SEROVA.CAREERS",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Карьера",
    "Работа",
    "Должность",
    "Карьерная консультация",
    "Советы о карьере",
    "HR",
    "Соискатель",
    "Первая работа",
    "Найти работу",
    "Поиск работы",
    "Вакансия",
    "Опыт работы",
    "Как найти работу",
    "Резюме",
    "CV",
    "Создать резюме",
    "Конструктор резюме",
    "Сопроводительное письмо",
    "Карьера для студентов",
    "Профориентация",
    "Карьерные цели",
    "Карьерные планы",
    "Карьерная траектория",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${ptSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
