## Summary of Repo

This repository contains automated tests using the WebDriverIO and BrowserStack.

## Requirements

Before running the tests, you need to have the following software and dependencies installed:

- Node.js
- npm

## Steps to Install

1. Clone this repository
2. Install the dependencies: `npm install`
3. Change name `.env.example` on `.env` and add variables

### Run Tests on Google Pixel

`npm run test:pixel`

### Run Tests on Samsung

`npm run test:samsung`

## Steps to Create the Report

1. Generate the Allure report: `npm run report:generate`
2. Open the generated Allure report in the browser: `npm run report:open`
