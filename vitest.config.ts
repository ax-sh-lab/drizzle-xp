/// <reference types="vitest" />
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [],
	test: {
		globals: true,
	},
});
