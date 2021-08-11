export const formatPercent = (p) => (p * 100).toFixed(2).toLocaleString() + "%";
export const formatPrice = (p) => "CHF " + Math.round(p).toLocaleString();
