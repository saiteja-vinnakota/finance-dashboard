import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const { user, login, logout } = useAuthStore();

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };
};