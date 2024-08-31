import { describe, expect, it } from "vitest";
import { parseTextToDirectories } from "./parseTextToDirectories";

describe("parseTextToDirectories", () => {
	it("空の文字列を処理できること", () => {
		const result = parseTextToDirectories("");
		expect(result).toEqual([]);
	});

	it("単一行のテキストを正しく処理できること", () => {
		const input = "Root";
		const result = parseTextToDirectories(input);
		expect(result).toEqual([
			{ dirName: "Root", depth: 0, isLast: true, path: "Root" },
		]);
	});

	it("複数行のテキストを正しく処理できること", () => {
		const input = `
Root
 Child1
 Child2
  Grandchild
    `;
		const result = parseTextToDirectories(input);
		expect(result).toEqual([
			{ dirName: "Root", depth: 0, isLast: true, path: "Root" },
			{ dirName: "Child1", depth: 1, isLast: false, path: "Root/Child1" },
			{ dirName: "Child2", depth: 1, isLast: true, path: "Root/Child2" },
			{
				dirName: "Grandchild",
				depth: 2,
				isLast: true,
				path: "Root/Child2/Grandchild",
			},
		]);
	});
});
