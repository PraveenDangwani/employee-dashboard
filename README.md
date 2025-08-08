# 🧑‍💼 Employee Dashboard

A feature-rich, responsive Employee Dashboard built with **React**, **TypeScript**, and **AG Grid**. This dashboard enables efficient employee data visualization with performance optimizations, theming support, and modular architecture.

---

## 🚀 Live Demo

🔗 [https://employee-dashboard-lake-mu.vercel.app/](https://employee-dashboard-lake-mu.vercel.app/)

---

## 🧩 Features

- ⚙️ Built with **AG Grid** for advanced data grid functionality
- 🌗 **Light / Dark Mode Toggle** using Context API
- 🔍 **Debounced Global Search** with Quick Filter
- 📱 Fully **Responsive Design**
- 💬 **Custom Tooltips** for columns
- 🔁 **Virtualization & Windowing** for performance
- 💡 **Custom Hooks** following SOLID principles
- 🧠 **Modular Component Structure** for scalability

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx
│   ├── EmployeeGrid.tsx
│   └── grid/
│       ├── columnDefs.ts
│       └── types.ts
├── context/
│   └── theme/
│       ├── ThemeContext.tsx
│       └── useTheme.ts
├── hooks/
│   └── useDebounce.ts
├── data/
│   └── assessment_data.json
├── App.css
└── main.tsx
```

---

## 🛠️ Tech Stack

- React + TypeScript
- AG Grid (Community)
- Context API
- Vite
- Custom Hooks

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/employee-dashboard.git
cd employee-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the application**
```bash
npm run dev
```

---