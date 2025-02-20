# Playwright Challenge

Playwright is a Node.js library for browser automation, supporting Chromium, Firefox, and WebKit browsers.

## Prerequisites

Before installing Playwright, ensure you have the following:

- [Node.js](https://nodejs.org/) (v12 or later) installed
- A package manager such as [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation Steps

### 1. Install Node.js and npm

If Node.js is not already installed on your machine, follow the steps below:

- Go to the [Node.js official website](https://nodejs.org/) and download the LTS version.
- Install Node.js using the downloaded installer.

After installation, verify if Node.js and npm are installed by running:

```
node -v
npm -v
```

### 2. Install Playwright
To install Playwright, run the following command:

```
npm install playwright
```

### 3. Test Execution
Playwright allows you to write automated tests for browser interaction. 

#### Using Playwright Test Runner (Built-in)

Install the Playwright Test package:
```
npm init playwright@latest
```

Run laywright Tests:
```
npx playwright test
```

Run Specific laywright Tests:
```
 npx playwright test --headed "testToRun.spec.js"
```

### 4. Playwright's Built-in Reporter
Playwright includes built-in reporters for generating results in different formats. You can specify a reporter when running tests.
```
npx playwright test --reporter=html,junit
```

Playwright Config allow you tho configurate the ouput of the files that you need to create a Report:
```
In playwright.config.js:

reporter: [['html'],
           ['list'],
           ['json', {  outputFile: 'test-results.json' }]],

And

 use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  }

```

### 5. Design Decisions

Split the files in utils for functions, pages to reuse code for the tests, and test for the test cases that were generated.

Utils:
- functions -> contains all the functions to generate or get data to be used on the test cases

Pages:
- Base -> base logic that can be reused on all the test cases
- LoginLogout -> Code to be reused for login and logout logic
- PomManager -> Manager for the import instance
- Redirect Pages -> Code to be reused for redirecting multiple pages
- Registration -> Code to be reused for registration logic


Test:
 - addProducts -> Two test cases to add a Product to the bag and apply a Promo. In this case, the purchase of Products wasn't finalized due to the lack of test data for purchasing products.

  - browseStore -> Test case to the browsing of multiple tabs and validate that it lands in the correct one 

  - login -> Test cases to check that the login and the logout are working correctly. Due to the logic, a security check was performed using the registration step to log out.

  - registration ->  Test case to check that the registration is working