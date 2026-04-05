const isBrowser = typeof window !== "undefined";

export const setItem = (key, value) => {
  if (!isBrowser) return;
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (e) {}
};

export const getItem = (key, defaultValue = null) => {
  if (!isBrowser) return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const removeItem = (key) => {
  if (!isBrowser) return;
  try {
    localStorage.removeItem(key);
  } catch (e) {}
};

export const clearStorage = () => {
  if (!isBrowser) return;
  try {
    localStorage.clear();
  } catch (e) {}
};