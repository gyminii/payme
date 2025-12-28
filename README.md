# PayMe

<img src="https://cryptopotato.com/wp-content/uploads/2025/01/Picture1-19.png" width="100%" alt="PayMe Demo">

Payment enforcement for unpaid clients. A satirical JavaScript library that gradually degrades a website when payment is overdue.

## ⚠️ Disclaimer

This is a satirical/educational project. Do not use maliciously on production sites. Always have proper contracts and payment terms with clients.

## Installation

```bash
npm install @mini_7/payme
# or
pnpm add @mini_7/payme
# or
bun add @mini_7/payme
# or
yarn add @mini_7/payme
```

## Usage

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html>
	<body>
		<h1>My Website</h1>

		<script type="module">
			import payme from "https://unpkg.com/@mini_7/payme";

			payme({ dueDate: "2025-01-15" });
		</script>
	</body>
</html>
```

### Next.js

```typescript
// app/layout.tsx
"use client";
import { useEffect } from "react";
import payme from "@mini_7/payme";

export default function RootLayout({ children }) {
	useEffect(() => {
		payme({ dueDate: "2025-01-15" });
	}, []);

	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
```

### React

```typescript
// App.tsx
import { useEffect } from "react";
import payme from "@mini_7/payme";

function App() {
	useEffect(() => {
		payme({ dueDate: "2025-01-15" });
	}, []);

	return <div>My App</div>;
}
```

### Vue

```vue
<script setup>
import { onMounted } from "vue";
import payme from "@mini_7/payme";

onMounted(() => {
	payme({ dueDate: "2025-01-15" });
});
</script>
```

## API

```typescript
payme({
	dueDate: string, // Payment due date (YYYY-MM-DD)
	mode: "fade", // Degradation mode (default: 'fade')
});
```

## Modes

### Fade (default)

Site gradually fades out 5% per day until invisible.

- Day 1: 95% opacity
- Day 10: 50% opacity
- Day 20: 0% opacity (invisible)

## How It Works

The library calculates days overdue from the `dueDate` and applies visual degradation to `document.body`. The effect is purely client-side and reversible.

## Development

```bash
# Clone repo
git clone https://github.com/gyminii/payme.git
cd payme

# Install dependencies
bun install

# Build
bun run build

# Test locally
open example.html
```

## License

MIT

## Author

Tyler - [minii.dev](https://minii.dev)
