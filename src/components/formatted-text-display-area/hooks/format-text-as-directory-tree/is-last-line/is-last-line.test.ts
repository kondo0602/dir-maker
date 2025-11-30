import { describe, expect, it } from "vitest";
import { isLastLine } from "./is-last-line";

describe("isLastLine", () => {
	it("次の行が存在しない場合はtrueを返すこと", () => {
		const line = { dirName: "A", depth: 1 };
		const result = isLastLine(line, undefined, []);
		expect(result).toBe(true);
	});

	it("次の行の深さが現在の行よりも小さい場合はtrueを返すこと", () => {
		const line = { dirName: "A", depth: 2 };
		const nextLine = { dirName: "B", depth: 1 };
		const result = isLastLine(line, nextLine, []);
		expect(result).toBe(true);
	});

	it("全ての後続の行の深さが現在の行よりも大きい場合はtrueを返すこと", () => {
		const line = { dirName: "A", depth: 1 };
		const nextLine = { dirName: "B", depth: 2 };
		const subsequentLines = [
			{ dirName: "C", depth: 3 },
			{ dirName: "D", depth: 4 },
		];
		const result = isLastLine(line, nextLine, subsequentLines);
		expect(result).toBe(true);
	});

	/**
	 * 以下のようなケースでdirAがisLastLineと判定されるためのロジック
	 *
	 * root
	 *  ├── dirA
	 *  │   └── file2
	 *  └── dirB
	 */
	it("後続の行の中で現在の行と同じ深さの行が存在し、その行の深さが現在の行よりも大きい場合はfalseを返すこと", () => {
		const line = { dirName: "A", depth: 2 };
		const nextLine = { dirName: "B", depth: 3 };
		const subsequentLines = [
			{ dirName: "C", depth: 2 },
			{ dirName: "D", depth: 3 },
		];
		const result = isLastLine(line, nextLine, subsequentLines);
		expect(result).toBe(false);
	});
});
