# Playwright E2E Automation | QA / SDET Portfolio Project

This repository showcases my hands-on experience with end-to-end test automation using Playwright, built with a focus on real-world QA engineering practices and scalability.

---

## About This Project

This project is part of my journey to becoming a **Software Development Engineer in Test (SDET)**.

Instead of jumping directly into complex implementations, I intentionally structured this repository to reflect a **progressive learning and engineering approach**:

* Start simple
* Build strong foundations
* Gradually evolve into more advanced solutions

---

## What This Project Demonstrates

* Clean and scalable test architecture
* Strong understanding of UI test automation
* Feature-based test organization
* Page Object Model (POM) implementation
* Positive and negative test coverage
* Real user flow validation (E2E)

---

## Engineering Approach

This project is designed to simulate how automation is built in real companies:

### 1. Foundation Layer

* Basic test setup with Playwright
* Login scenarios (positive and negative)
* Initial structure and configuration

### 2. Feature-Based Testing

Each feature is isolated and tested independently:

* **Authentication (Login)**
* **Inventory (Product listing and sorting)**
* **Cart (State and behavior validation)**
* **Checkout (End-to-end purchase flow)**

### 3. Code Design Principles

* Separation of concerns
* Reusable methods
* Maintainability-first mindset
* Readable and structured tests

---

## Project Structure

```id="7l7l0u"
tests/
  login.spec.ts
  inventory.spec.ts
  cart.spec.ts
  checkout.spec.ts

pages/
  LoginPage.ts
  InventoryPage.ts
  CartPage.ts
  CheckoutPage.ts
```

---

## Test Coverage

### Login

* Valid login
* Invalid credentials
* Locked user
* Required field validations

---

### Inventory

* Product listing validation
* Add/remove items
* Product sorting (A-Z)

---

### Cart

* Empty cart validation
* Item persistence
* Add/remove behavior

---

### Checkout

* Complete purchase flow (happy path)
* Required fields validation
* Error handling scenarios

---

## Tech Stack

* Playwright
* TypeScript
* Node.js

---

## Running Tests

```bash id="78rsg9"
npm install
npx playwright test
```

Open HTML report:

```bash id="2p5g9o"
npx playwright show-report
```

---

## Reporting

This project uses Playwright's built-in HTML reporter, including:

* Step-by-step execution
* Error details
* Screenshots on failure
* Execution trace for debugging

---

## Continuous Integration

Tests are executed via GitHub Actions.

Each pipeline run generates a downloadable HTML report for analysis.

---

## Roadmap (Next Steps)

This project is actively evolving towards more advanced SDET practices:

* Test fixtures for dynamic data handling
* API + UI integration (hybrid testing)
* Environment-based configuration
* Improved test data management
* Advanced reporting strategies

---

## Why This Matters

This project is not just about writing tests.

It reflects my ability to:

* Think like a QA Engineer
* Design maintainable automation
* Validate real business flows
* Build scalable testing solutions

---

## Final Note

This repository is intentionally structured to demonstrate both **technical skills and engineering mindset**, which are essential for QA and SDET roles in modern software teams.
