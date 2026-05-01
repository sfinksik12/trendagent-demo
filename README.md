# demo-trend-automation

## Архитектура

```mermaid
flowchart LR
  subgraph tests
    S["tests/*.spec.ts"]
  end
  subgraph framework["src/"]
    P[pages] --> F[fragments]
    F --> C[components]
    X[fixtures + expects + mocks]
  end
  S --> X
  X --> P
```

| Слой       | Папка                |
| ---------- | -------------------- |
| Сценарии   | `tests/`             |
| Страницы   | `src/ui/pages/`      |
| Фрагменты  | `src/ui/fragments/`  |
| Компоненты | `src/ui/components/` |

## Запуск

```bash
npm ci && npx playwright install
npx playwright test
```
