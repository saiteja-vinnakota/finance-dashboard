import { create } from "zustand";

const STORAGE_KEY = "auth-user";

const loadUser = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const useAuthStore = create((set) => ({
  user: loadUser() || null,

  login: (email, password) => {
    let user = null;

    if (email === "admin@example.com" && password === "admin123") {
      user = { email, role: "admin" };
    } else if (
      email === "viewer@example.com" &&
      password === "viewer123"
    ) {
      user = { email, role: "viewer" };
    }

    if (!user) return false;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    set({ user });

    return true;
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
    set({ user: null });
  },

  setUser: (user) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    set({ user });
  },
}));