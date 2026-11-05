# serova.careers

Лендинг карьерного консультанта [Надежды Серовой](https://serova.careers).

Стек: Next.js 16 (App Router), React 19, TypeScript, Bun 1.4.4 или новее.

Для установки используйте `bun install --frozen-lockfile`. Lockfile версии 3
содержит адресное переопределение `minimatch` для `@typescript-eslint/typescript-estree`
на исправленную ветку 11 (GHSA-g3hv-75wg-m249). Другие потребители `minimatch`
сохраняют свои совместимые версии. Удалить переопределение можно после того,
как upstream обновит диапазон зависимости и повторный `bun audit` останется чистым.

Проверки: `bun audit`, `bun audit --production`, `bun run lint`, `bun run build`.
ESLint 9 выбран для совместимости с текущими React/import/a11y-плагинами;
переход на ESLint 10 требует обновления их заявленной совместимости.

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
