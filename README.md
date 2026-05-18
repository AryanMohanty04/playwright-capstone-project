# Playwright Capstone Project

This repository contains the QA Automation Capstone Project created during Wipro training using Playwright.

The purpose of this project is to practice and demonstrate automation testing concepts learned during the training program. The project focuses on automating major functionalities of a web application using Playwright.

---

# Project Objective

The main objective of this capstone project is to:

- Learn automation testing using Playwright
- Practice end-to-end testing concepts
- Automate different website functionalities
- Perform UI and functional testing
- Execute test cases across multiple modules
- Understand real-world QA workflows

---

# Project Scope

The project will include automation testing for multiple services/modules of a web application.

A minimum of:
- 8 Services / Modules
- 120+ Test Cases

will be automated as part of the capstone project requirements.

---

# Planned Services / Modules

## 1. Authentication
- Login
- Logout
- Invalid Login Validation

## 2. Registration
- User Registration
- Form Validation

## 3. Product Module
- Product Search
- Product Details Validation

## 4. Cart Module
- Add to Cart
- Remove from Cart

## 5. Wishlist Module
- Add to Wishlist
- Remove from Wishlist

## 6. Checkout Module
- Address Validation
- Shipping Validation
- Order Summary Validation

## 7. Payment Module
- Payment Method Selection
- Payment Confirmation

## 8. User Profile / Order History
- User Information Validation
- Order History Validation

Additional modules and test cases may be added during project development.

---

# Tools & Technologies

| Category | Technology |
|---|---|
| Automation Tool | Playwright |
| Language | JavaScript |
| Runtime Environment | Node.js |
| IDE | VS Code |
| Version Control | Git & GitHub |

---

# Project Structure

The project currently follows the default Playwright project structure.

```txt
playwright-capstone-project/
│
├── tests/
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

The structure may be updated later as the project development progresses.

---

# Test Coverage

The project will cover:
- Functional Testing
- UI Testing
- End-to-End Testing

---

# Installation

Clone the repository:

```bash
git clone https://github.com/AryanMohanty04/playwright-capstone-project.git
```

Install dependencies:

```bash
npm install
```

Install Playwright:

```bash
npm init playwright@latest
```

---

# Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests on Chromium browser:

```bash
npx playwright test --project=chromium
```

---

# Conclusion

This capstone project is being developed to demonstrate practical understanding of Playwright automation testing concepts learned during Wipro training.
The project aims to build hands-on experience in automation testing, test case execution, and QA workflows using Playwright.
