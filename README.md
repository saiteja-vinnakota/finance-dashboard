<<<<<<< HEAD
# 💰 Finance Dashboard

A responsive and interactive finance dashboard built using React. This application helps users track financial activity, manage transactions, and gain insights into spending patterns.

---

## 🚀 Overview

This project demonstrates frontend development skills including UI design, state management, data visualization, and responsive layout.

Users can:
- View financial summaries
- Manage transactions
- Explore insights
- Switch roles (Admin / Viewer)

---

## ✨ Features

### 📊 Dashboard
- Total Balance, Income, and Expenses summary
- Balance trend chart (time-based visualization)
- Spending breakdown chart (category-based)
- Recent transactions section

---

### 💳 Transactions
- View all transactions with:
  - Date
  - Description
  - Category
  - Type (Income / Expense)
  - Amount
- Add, Edit, Delete transactions (Admin only)
- Search, filter, and sort functionality
- Responsive table design

---

### 🔐 Role-Based UI
- Admin:
  - Full access (Add/Edit/Delete)
- Viewer:
  - Read-only access
- Role switching via dropdown

---

### 📈 Insights
- Total income and expenses
- Savings calculation
- Top spending category
- Average expense analysis
- Useful financial observations

---

### 🎨 UI & UX
- Clean and modern design
- Fully responsive (mobile, tablet, desktop)
- Dark mode support
- Smooth navigation and interactions
- Proper empty state handling

---

### ⚙️ State Management
- Zustand for global state management
- Persistent login using localStorage
- Transaction data persistence

---

## 🛠 Tech Stack

- React
- Zustand
- Tailwind CSS
- Recharts
- React Router

---

## 📁 Project Structure

```
src/
├── app/
│   ├── dashboard/
│   ├── insights/
│   ├── layout/
│   └── transactions/
│
├── components/
│   ├── charts/
│   ├── common/
│   ├── tables/
│   └── ui/
│
├── data/
├── hooks/
├── lib/
├── pages/
├── routes/
├── store/
└── utils/
```

---

## ⚡ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Run the project

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:5173
```

---

## 🔑 Demo Credentials

| Role   | Email               | Password   |
|--------|--------------------|------------|
| Admin  | admin@example.com  | admin123   |
| Viewer | viewer@example.com | viewer123  |

---

## 📌 Key Highlights

- Feature-based folder structure
- Reusable UI components
- Clean and scalable architecture
- Responsive design with mobile sidebar
- Real-time UI updates

---

## 🧠 Approach

The application is designed with a modular and scalable architecture. Zustand is used for lightweight state management, and Tailwind CSS ensures consistent styling across the application.

Focus was placed on:
- Clean UI design
- Smooth user experience
- Maintainable code structure

---

## 📈 Future Enhancements

- CSV/Excel export
- API integration
- Authentication system
- Advanced analytics
- Animations and transitions

---

## 📜 License

This project is created for educational and evaluation purposes.

---

## 👨‍💻 Author

Developed by **Sai Teja Vinnakota**