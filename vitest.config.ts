/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

// https://docs.astro.build/en/guides/testing/#vitest
export default getViteConfig({
	test: {
		environment: "happy-dom",
		globals: true,
		setupFiles: "./setupTests.ts",
	},
});
