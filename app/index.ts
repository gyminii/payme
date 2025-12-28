import { fade } from "./fade";

interface PayMeConfig {
	dueDate: string;
	mode?: "fade";
}

let initialized = false;

export function payme(config: PayMeConfig) {
	if (initialized) return;

	initialized = true;

	const dueDate = new Date(config.dueDate);
	const now = new Date();
	const daysOverdue = Math.floor(
		(now.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)
	);

	if (daysOverdue <= 0) return;

	const mode = config.mode || "fade";

	if (mode === "fade") {
		fade(daysOverdue);
	}
}

export default payme;
