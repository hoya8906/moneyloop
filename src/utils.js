export const $ = (id) => document.getElementById(id);
export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
export const fmt = (n) => Math.round(n).toLocaleString('ko-KR');
export const fmt1 = (n) => Number(n || 0).toLocaleString('ko-KR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
export const money = (n) => '$' + fmt(n);
export const money1 = (n) => '$' + fmt1(n);
export const crypto = (n) => '₿' + (n / 1000).toFixed(3);
