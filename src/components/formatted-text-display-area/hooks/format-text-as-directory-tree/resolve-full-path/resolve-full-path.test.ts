import { describe, expect, it } from "vitest";
import { resolveFullPath } from "./resolve-full-path";

describe("resolveFullPath", () => {
	const directories: { dirName: string; depth: number }[] = [
		{ dirName: "/", depth: 0 },
		{ dirName: "src", depth: 1 },
		{ dirName: "components", depth: 2 },
		{ dirName: "Textarea.tsx", depth: 3 },
		{ dirName: "pages", depth: 2 },
		{ dirName: "index.astro", depth: 3 },
		{ dirName: ".gitignore", depth: 1 },
		{ dirName: "astro.config.mjs", depth: 1 },
		{ dirName: "package.json", depth: 1 },
		{ dirName: "package.lock.json", depth: 1 },
		{ dirName: "tsconfig.json", depth: 1 },
	];

	it("ルートパスを正しく解決すること", () => {
		const result = resolveFullPath(0, directories);
		expect(result).toBe("/");
	});

	it("srcパスを正しく解決すること", () => {
		const result = resolveFullPath(1, directories);
		expect(result).toBe("/src");
	});

	it("ネストされたコンポーネントのパスを正しく解決すること", () => {
		const result = resolveFullPath(3, directories);
		expect(result).toBe("/src/components/Textarea.tsx");
	});

	it("兄弟ディレクトリのパスを正しく解決すること", () => {
		const result = resolveFullPath(4, directories);
		expect(result).toBe("/src/pages");
	});

	it("ルートディレクトリ直下のファイルのパスを正しく解決すること", () => {
		const result = resolveFullPath(7, directories);
		expect(result).toBe("/astro.config.mjs");
	});

	it("無効なインデックスに対して空文字列を返えすこと", () => {
		const result = resolveFullPath(20, directories);
		expect(result).toBe("");
	});

	it("空のディレクトリ配列を処理すること", () => {
		const result = resolveFullPath(0, []);
		expect(result).toBe("");
	});
});
