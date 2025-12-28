export function fade(daysOverdue: number) {
	const opacity = Math.max(0, 1 - daysOverdue * 0.05);
	document.body.style.opacity = opacity.toString();
	document.body.style.transition = "opacity 1s ease-in-out";
}
