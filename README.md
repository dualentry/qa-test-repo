# qa-test-repo

This repository is a small Playwright Test project used for QA practice. It demonstrates contrasting testing styles on a real-world demo site and provides a compact structure you can use for review, refactoring, or interview exercises. The examples focus on principles like clear assertions, reliable waiting, and maintainable test structure without exposing the exact issues in the tests.

## What is inside

- Playwright Test configuration with multi-browser projects (Chromium, Firefox, WebKit).
- Sample tests that showcase different testing approaches.
- A simple folder structure for fixtures, page objects, and utilities.

## Getting started

### Prerequisites

- Node.js 18+ (or a recent LTS version)

### Install dependencies

```bash
npm install
npx playwright install
```

### Run tests

```bash
npx playwright test
```

### View the HTML report

```bash
npx playwright show-report
```

## Project structure

```
tests/
  example.spec.ts
  update.spec.ts
  data/
  fixtures/
    test-fixtures.ts
  pages/
    base.page.ts
    playwright-home.page.ts
  utils/
playwright.config.ts
```

## Notes

- The tests target a public demo site for UI testing practice.
- The repository is intentionally minimal to keep the focus on testing technique and maintainability.
