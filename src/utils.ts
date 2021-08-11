export const formatPercent = (p: number) =>
  (p * 100).toFixed(2).toLocaleString() + "%";

export const formatPrice = (p: number) =>
  "CHF " + Math.round(p).toLocaleString();
