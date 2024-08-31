import { describe, expect, it } from "vitest";
import type { Directory } from "../../../types/directory";
import { resolveFullDirectoryPath } from "./resolveFullDirectoryPath";

describe("resolveFullDirectoryPath", () => {
	const directories: Directory[] = [
		{ dirName: "/", depth: 0, isLast: true, path: "" },
		{ dirName: "src", depth: 1, isLast: false, path: "" },
		{ dirName: "components", depth: 2, isLast: false, path: "" },
		{ dirName: "Textarea.tsx", depth: 3, isLast: true, path: "" },
		{ dirName: "pages", depth: 2, isLast: true, path: "" },
		{ dirName: "index.astro", depth: 3, isLast: true, path: "" },
		{ dirName: ".gitignore", depth: 1, isLast: false, path: "" },
		{ dirName: "astro.config.mjs", depth: 1, isLast: false, path: "" },
		{ dirName: "package.json", depth: 1, isLast: false, path: "" },
		{ dirName: "package.lock.json", depth: 1, isLast: false, path: "" },
		{ dirName: "tsconfig.json", depth: 1, isLast: true, path: "n" },
	];

	it("ルートパスを正しく解決すること", () => {
		const result = resolveFullDirectoryPath(directories, 0);
		expect(result).toBe("/");
	});

	it("srcパスを正しく解決すること", () => {
		const result = resolveFullDirectoryPath(directories, 1);
		expect(result).toBe("/src");
	});

	it("ネストされたコンポーネントのパスを正しく解決すること", () => {
		const result = resolveFullDirectoryPath(directories, 3);
		expect(result).toBe("/src/components/Textarea.tsx");
	});

	it("兄弟ディレクトリのパスを正しく解決すること", () => {
		const result = resolveFullDirectoryPath(directories, 4);
		expect(result).toBe("/src/pages");
	});

	it("ルートディレクトリ直下のファイルのパスを正しく解決すること", () => {
		const result = resolveFullDirectoryPath(directories, 7);
		expect(result).toBe("/astro.config.mjs");
	});

	it("無効なインデックスに対して空文字列を返えすこと", () => {
		const result = resolveFullDirectoryPath(directories, 20);
		expect(result).toBe("");
	});

	it("空のディレクトリ配列を処理すること", () => {
		const result = resolveFullDirectoryPath([], 0);
		expect(result).toBe("");
	});
});
