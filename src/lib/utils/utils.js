export const formatCurrency = (value) => {
  return `₹${value.toLocaleString("en-IN")}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN");
};