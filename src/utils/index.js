export function formatCount(n) {
	if (n < 1e4) return n;
	if (n >= 1e4) return +(n / 1e3).toFixed() + 'K';
}
