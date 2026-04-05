import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../app/dashboard/DashboardPage";
import TransactionsPage from "../app/transactions/TransactionsPage";
import InsightsPage from "../app/insights/InsightsPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../app/layout/MainLayout";

import { useAuthStore } from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();
  if (!user) return <Navigate to="/" replace />;
  return children;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TransactionsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/insights"
        element={
          <ProtectedRoute>
            <MainLayout>
              <InsightsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;