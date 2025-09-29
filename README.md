# Virtual Bank App

A simple React-based bank simulator where users can manage deposits, withdrawals, and calculate interest over time. This app demonstrates basic React state management and arithmetic operations for financial calculations.

## 🚀 Features

- View Balance: Always see your current account balance.

- Deposit Funds: Add money to your account safely.

- Withdraw Funds: Remove money from your account with validation.

- Interest Calculator: Estimate your total savings and interest over multiple years using annual deposits and an interest rate.

- Transaction Log: Keep track of all deposits, withdrawals, and interest calculations.

## 🎨 Demo

Check out the live demo here: [Virtual Bank App](https://virtual-atm.netlify.app/)


## 🛠️ Technologies Used

- React – Frontend library for building interactive UI.

- TypeScript – Type-safe JavaScript for improved reliability.

- CSS – Styling for a clean and simple layout.

## 💡 How It Works

- Deposits & Withdrawals: Input a number and click the corresponding button. The balance updates immediately, and the transaction is logged.

-   Interest Calculation: Enter your annual deposit, number of years, and interest rate. The app calculates total interest and total savings using the formula:

<img src="src/ATM-calculation.png" />

### Where:

- 𝐷 = annual deposit

- 𝑟 = interest rate (decimal)

- 𝑛 = number of years

- All transactions are displayed in the Transactions section.

## 📌 Notes

- All monetary values are displayed in SEK (Swedish Krona).

- Input validation prevents negative numbers and invalid entries.

## ✨ Future Improvements

- Add login/authentication to simulate multiple users.

- Add transaction categories (e.g., savings, bills, entertainment).

- Implement charts to visualize savings growth over time.

- Add mobile responsiveness and a modern UI design.