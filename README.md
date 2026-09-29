# Workshop Cursor + Playwright — starter (kursanci)

Cel: Cursor + Node 25 + Playwright + lokalny serwer działają u Ciebie na maszynie.

## Wymagania

- Node.js **25** (`node -v`)
- npm (`npm -v`)
- [Cursor](https://cursor.com/) (preferowane) lub VS Code
- Git

## Zawartość

Minimalny pakiet do przygotowania środowiska **przed** warsztatem:

- lokalny serwer SUT (`server/`)
- jeden smoke test Playwright (otwarcie kreatora na `localhost:3000`)
- instrukcja instalacji
- pełne zależności npm pod warsztat (Playwright, MCP SDK, Zod, TS, ESLint...)

Materiały labów pojawią się w repozytorium w dzień warsztatów

## Szybki start

```bash
cd TGWorkshops # lub nazwa rozpakowanego folderu
npm install
npx playwright install chromium
npm run test:smoke
```

Oczekiwane: jeden zielony test. Serwer startuje automatycznie podczas testu.

Ręcznie w przeglądarce:

```bash
npm run server
# → otwórz http://localhost:3000/kreator.html
```

W razie problemów proszę o kontakt!

Pozdrawiam,
Michał