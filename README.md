# 💧 My Contador

Public repository for the My Contador application.

This application is designed to help users manage their water usage by providing a<ccess to real-time information about their water meters and consumption.

![](https://github.com/josew383/mycontador-app-public/blob/main/public/mycontadorDemo.gif)

## 🎯 Features

- View water meter readings and consumption details.
- View all details about water meters.
- Receive notifications from admin.
- Responsive design for easy access on various devices.

## 🔧 Installation & 🚀 Run

Before running the application, ensure that you have Node.js and npm installed on your computer. Follow the steps below to set up and run the app:

1. Clone the repository to your local machine.
2. Create a `.env.local` file with the required environment variables (see `.env.local.example`).
3. Install dependencies: `npm install`
4. Start the application: `npm run dev` or if you prefer run with another ip/port `npm run dev -- -H <IP> -p <PORT>`

## 🧪 Testing

To ensure the reliability of this app, comprehensive testing has been conducted using [Playwright](https://playwright.dev/). Follow these steps to run the test suite:

1. Run tests: `npx playwright test`
2. View test results: `npx playwright show-report`

## 🔗 APIs used

- [Firebase](https://firebase.google.com/)

## 🤖 Technologies used

- [React](https://reactjs.org/)
  - **Hooks**: [useState](https://react.dev/reference/react/useState), [useEffect](https://react.dev/reference/react/useEffect), [useContext](https://react.dev/docs/hooks-reference.html#usecontext), [useReducer](https://react.dev/docs/hooks-reference.html#usereducer), [useCustomHook](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component)
- [Mantine](https://mantine.dev/)
- [NextJS](https://nextjs.org/)
- [Playwright](https://playwright.dev/)
- [Github Actions](https://docs.github.com/en/actions)
- [swiperjs](https://swiperjs.com/react)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
