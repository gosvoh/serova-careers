# serova.careers

Лендинг карьерного консультанта [Надежды Серовой](https://serova.careers).

Стек: Next.js 14 (App Router), React 18, TypeScript, Bun.

## Запуск

```bash
bun install
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
bun run build
bun start
```

## Docker

В репозитории лежит `Dockerfile` для standalone-сборки:

```bash
docker build -t serova-careers .
docker run -p 3000:3000 serova-careers
```

## Структура

- `src/app/page.tsx` — главная страница со всеми секциями (hero, обо мне, форматы и т.д.).
- `src/app/layout.tsx` — корневой layout, шрифты (Manrope, PT Serif), метаданные.
- `src/app/globals.css` — стили проекта.
- `src/assets/` — изображения, импортируемые в компоненты.
- `public/uploads/` — PDF-материалы для скачивания.
