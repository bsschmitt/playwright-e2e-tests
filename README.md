# Playwright E2E Test Automation Project

This repository demonstrates a complete end-to-end test automation architecture using Playwright, evolving from basic UI tests to advanced, production-ready patterns.

The goal of this project is to showcase real-world SDET practices, including test structure, reusable components, authentication strategies, and scalable configuration.

---

## Project Overview

This project is structured to demonstrate **progressive evolution** in test automation:

1. **Basic UI Tests** – direct test implementation
2. **Page Object Model (POM)** – abstraction of UI interactions
3. **Fixtures** – reusable and maintainable test setup
4. **Advanced Setup with `storageState`** – persistent authentication and optimized execution

Each layer builds on top of the previous one, simulating how a real automation project matures over time.

---

## Project Structure

```
playwright-e2e-tests/
│
├── tests/
│   ├── basic/                # Initial tests (no abstraction)
│   ├── fixtures/             # Tests using fixtures
│   └── advanced/             # Tests using storageState (authenticated)
│
├── pages/                    # Page Object Model (POM)
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── fixtures/
│   ├── test-fixtures.ts      # Traditional fixtures (with login)
│   └── advanced-fixtures.ts  # Fixtures using storageState
│
├── setup/
│   └── auth.setup.ts         # Authentication setup (generates storageState)
│
├── playwright.config.ts              # Default config (basic + fixtures)
├── playwright.advanced.config.ts     # Advanced config (storageState)
│
├── storageState.json        # Generated auth state (ignored in git)
├── .gitignore
└── README.md
```

---

## Authentication Strategy (storageState)

This project uses Playwright's `storageState` to persist authentication.

### How it works:

1. A dedicated setup script logs into the application
2. The authenticated session is saved to `storageState.json`
3. Tests reuse this state to start already logged in

### Benefits:

- Faster execution (no repeated login)
- Reusable authenticated sessions
- Cleaner and more focused tests
- Real-world test architecture

---

## Playwright Configurations

### 🔹 Default Config

Used for:

- Basic tests
- Fixture-based tests

```bash
npx playwright test
```

---

### Advanced Config (with storageState)

Uses:

- Setup project (authentication)
- Project dependencies
- Persistent login state

```bash
npx playwright test --config=playwright.advanced.config.ts
```

---

## Test Design Patterns

### Page Object Model (POM)

Encapsulates UI interactions:

- Improves maintainability
- Reduces duplication
- Centralizes locators

---

### Fixtures

Two approaches are demonstrated:

#### 1. Traditional Fixtures

- Handle login inside fixture
- Used in intermediate tests

#### 2. Advanced Fixtures

- Use `storageState`
- No login logic
- Focus only on test behavior

---

### Test Organization

Tests are grouped by purpose:

- `basic/` → learning and simple validation
- `fixtures/` → reusable test setup
- `advanced/` → production-level scenarios

---

## Example Scenarios Covered

- Valid login
- Invalid login
- Locked user
- Add/remove items from cart
- Product sorting
- Complete checkout flow
- Authenticated navigation using storageState

---

## Evolution Strategy

This project intentionally keeps multiple approaches to demonstrate growth:

| Stage    | Description                               |
| -------- | ----------------------------------------- |
| Basic    | Direct Playwright usage                   |
| POM      | Separation of concerns                    |
| Fixtures | Reusability                               |
| Advanced | Scalable architecture with authentication |

---

## Key Learnings Demonstrated

- Playwright configuration (multi-project setup)
- Test isolation and reuse
- Authentication strategies
- Fixture composition
- Scalable test architecture
- Real-world QA/SDET practices

---

## How to Run

### Install dependencies

```bash
npm install
```

---

### Run basic tests

```bash
npx playwright test
```

---

### Run advanced tests (with authentication)

```bash
npx playwright test --config=playwright.advanced.config.ts
```

---

## Notes

- `storageState.json` is automatically generated and ignored in version control
- If authentication fails, delete the file and rerun tests:

```bash
rm storageState.json
```

---

## Future Improvements

- Multi-user authentication (admin, locked, etc)
- API + UI integration tests
- Login via API (faster setup)
- CI/CD pipeline integration
- Enhanced reporting (Allure or similar)

---

## About This Project

This repository was built as part of continuous skill refinement, focusing on:

- Writing maintainable test automation
- Applying industry-level patterns
- Structuring projects for scalability
- Demonstrating real-world QA engineering capabilities

---

## Contributions

Feel free to explore, fork, and suggest improvements.

---
