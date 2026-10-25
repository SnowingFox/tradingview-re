/**
 * Builds the DevTool into the app/ tree, next to the TradingView bundles that load it:
 *
 *   --mode main     src/main/devtool.ts     -> app/devtool/main.js (CJS, main process)
 *   --mode preload  src/devtool/preload.ts  -> app/preload/devtool-preload.js (CJS, sandboxed preload)
 *
 * Sandboxed preloads can only `require('electron')`, so the preload bundle
 * inlines everything else.
 */
import path from 'node:path';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vitest/config';

const root = import.meta.dirname;
const r = (p: string) => path.resolve(root, p);

export const MAIN_ENTRY = 'src/main/devtool.ts';
export const PRELOAD_ENTRY = 'src/devtool/preload.ts';

const shared = {
	target: 'node22',
	minify: false,
	reportCompressedSize: false,
} satisfies UserConfig['build'];

const main: UserConfig = {
	build: {
		...shared,
		lib: { entry: r(MAIN_ENTRY), formats: ['cjs'], fileName: () => 'main.js' },
		outDir: r('app/devtool'),
		emptyOutDir: true,
		rolldownOptions: { external: ['electron', /^node:/] },
	},
};

const preload: UserConfig = {
	build: {
		...shared,
		target: 'chrome146',
		lib: { entry: r(PRELOAD_ENTRY), formats: ['cjs'], fileName: () => 'devtool-preload.js' },
		outDir: r('app/preload'),
		// preload/ holds TradingView's own preloads.
		emptyOutDir: false,
		rolldownOptions: { external: ['electron'] },
	},
};

export default defineConfig(({ mode }) => ({
	...(mode === 'preload' ? preload : main),
	test: {
		include: ['src/**/*.test.ts'],
		environment: 'node',
	},
}));
