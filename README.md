# Web & API Automation Testing (DEMOBLAZE)
 
## Overview
This project is a modular web automation testing framework built with [Playwright](https://playwright.dev/) for end-to-end (E2E) and API testing. It integrates API-based user data fetching to ensure fresh and up-to-date information for the demoblaze.com  web application. The framework is designed with scalability, maintainability, and ease of use in mind, making it suitable for QA engineers and developers.
 
## Features
- **UI and API Automation**: Test both frontend and backend workflows.
- **Page Object Model (POM)**: Clean separation of page logic for maintainable tests.
- **Custom Fixtures**: Dependency injection for reusable test utilities.
- **Allure Reporting**: Rich, interactive test reports.
- **Custom Console Reporter**: Enhanced console output for test runs.
- **Parallel Execution**: Fast test runs with parallelization.
- **Environment Management**: Uses dotenv for flexible environment configuration.
 
## Project Structure
```
├── tests/                # Test specifications (UI & API)
├── src/
│   ├── page_object/      # Page Object Model classes
│   ├── services/         # API service clients
│   ├── helper/           # Utilities and type definitions
│   ├── data/             # Static test data (JSON)
│   ├── config/           # API endpoint configuration
│   └── fixture.ts        # Playwright custom fixtures
├── setup/                # Global setup/teardown scripts
├── reporter/             # Custom Playwright reporter
├── allure-results/       # Allure raw results
├── test-results/         # Playwright test results
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```
 
## Getting Started
 
### Prerequisites
- Node.js (v18+ recommended)
- npm
 
### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Web-testing-demoblaze
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
 
### Running Tests
- Run all tests:
  ```sh
  npm test
  ```
- Run a specific test file:
  ```sh
  npx playwright test tests/<file>.spec.ts
  ```
 
### Test Reports
- **Allure Report**: After running tests, generate and open the Allure report:
  ```sh
  npx allure generate allure-results --clean -o allure-report
  npx allure open allure-report
  ```
 
## Key Components
 
### 1. Page Object Model (POM)
All page interactions are encapsulated in `src/page_object/` classes (e.g., `dashboard_page.ts`, `cart_page.ts`). This ensures reusable and maintainable test code.
 
### 2. API Services
API interactions are handled in `src/services/` (e.g., `users_api.ts`, `cartservices_api.ts`).
 
### 3. Fixtures
Custom Playwright fixtures in `src/fixture.ts` provide dependency injection for page objects and utilities in tests.
 
### 4. Test Data
Static data for products and IDs is stored in `src/data/` as JSON files.
 
### 5. Setup & Teardown
- `setup/global_setup.ts`: Prepares environment, cleans up old results, fetches users, and injects environment variables.
- `setup/global_teardown.ts`: (Reserved for cleanup after tests, currently empty.)
 
### 6. Reporting
- **Allure**: For rich, interactive reports.
- **Custom Reporter**: Enhanced console output (see `reporter/custom-report.ts`).
 
## Configuration
- All Playwright settings are in `playwright.config.ts` (test directory, reporters, parallelism, etc).
- Environment variables are managed via `.env` and `dotenv`.
 
## Contribution
1. Fork and clone the repository.
2. Create a new branch for your feature or bugfix.
3. Write or update tests as needed.
4. Submit a pull request with a clear description.
 
## License
This project is licensed under the ISC License.
 
---
For questions or support, please contact the QA Automation team.
