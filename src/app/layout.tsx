import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const evolventa = localFont({
  src: [
    { path: "./fonts/Evolventa-Regular.woff", style: "normal", weight: "400" },
    { path: "./fonts/Evolventa-Bold.woff", style: "bold", weight: "700" },
    { path: "./fonts/Evolventa-Oblique.woff", style: "italic", weight: "400" },
    {
      path: "./fonts/Evolventa-BoldOblique.woff",
      style: "italic",
      weight: "700",
    },
  ],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#fffaf4",
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
        url: "https://serova.careers/hero.jpg",
        secureUrl: "https://serova.careers/hero.jpg",
        width: 1000,
        height: 1000,
        alt: "SEROVA.CAREERS",
        type: "image/jpeg",
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
    <html lang="ru">
      <body className={evolventa.className}>{children}</body>
    </html>
  );
}
