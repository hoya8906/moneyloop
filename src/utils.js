export const $ = (id) => document.getElementById(id);
export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
export const fmt = (n) => Math.round(n).toLocaleString('ko-KR');
export const money = (n) => '$' + fmt(n);
export const crypto = (n) => '₿' + (n / 1000).toFixed(3);
