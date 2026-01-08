# Expense Tracker Frontend Setup

## Overview
This is the React frontend for the Expense Tracker application. It provides a modern, responsive interface for managing personal finances with authentication, transaction management, and data visualization.

## Features
- ✅ User Authentication (Login/Register)
- ✅ Dashboard with financial overview
- ✅ Transaction management (CRUD operations)
- ✅ Reports with interactive charts
- ✅ PDF/Excel export functionality
- ✅ Responsive design with TailwindCSS
- ✅ Protected routes with JWT authentication

## Tech Stack
- **React 19** - Frontend framework
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Recharts** - Data visualization library
- **Axios** - HTTP client for API calls
- **Lucide React** - Icon library

## Project Structure
```
src/
├── components/
│   ├── auth/
│   │   ├── Login.js
│   │   └── Register.js
│   └── layout/
│       └── Layout.js
├── contexts/
│   └── AuthContext.js
├── pages/
│   ├── Dashboard.js
│   ├── Transactions.js
│   └── Reports.js
├── routes/
│   └── AppRouter.js
├── services/
│   └── api.js
├── App.js
└── index.js
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the frontend directory:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

## API Integration
The frontend communicates with the backend through the following endpoints:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Reports
- `GET /api/reports/monthly` - Get monthly summary
- `GET /api/reports/export/pdf` - Export PDF report
- `GET /api/reports/export/excel` - Export Excel report

## Key Components

### Authentication
- **Login/Register forms** with validation
- **JWT token management** with automatic refresh
- **Protected routes** that require authentication

### Dashboard
- **Financial summary cards** showing income, expenses, and balance
- **Recent transactions list** with quick overview
- **Quick action buttons** for adding transactions

### Transactions
- **Transaction list** with filtering and search
- **Add/Edit modal** for transaction management
- **Category filtering** and type filtering
- **Date-based filtering** for monthly views

### Reports
- **Interactive charts** using Recharts:
  - Bar chart for monthly trends
  - Pie chart for category breakdown
  - Line chart for balance trends
- **Export functionality** for PDF and Excel
- **Month selector** for period-specific reports

## Styling
The application uses TailwindCSS for styling with:
- **Responsive design** that works on mobile and desktop
- **Modern UI components** with consistent spacing and colors
- **Custom color palette** with primary blue theme
- **Form styling** with focus states and validation

## State Management
- **React Context** for authentication state
- **Local component state** for forms and UI interactions
- **API service layer** for backend communication

## Security Features
- **JWT token storage** in localStorage
- **Automatic token refresh** on API calls
- **Route protection** based on authentication status
- **Input validation** on all forms

## Development Notes
- All API calls are handled through the centralized `api.js` service
- Authentication state is managed globally through React Context
- Charts are responsive and update based on data changes
- Export functionality downloads files directly to user's device
- Error handling is implemented for all API interactions
