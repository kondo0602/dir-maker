import { describe, expect, it } from "vitest";
import { generatePrefix } from "./formatTextAsDirectoryTree";

describe("generatePrefix", () => {
	it("各行に正しいプレフィックスが生成されること", () => {
		const allLines = [
			{ dirName: "/", depth: 1, isLast: false },
			{ dirName: " src", depth: 2, isLast: false },
			{ dirName: "  components", depth: 3, isLast: false },
			{ dirName: "   Textarea.tsx", depth: 4, isLast: true },
			{ dirName: "  pages", depth: 3, isLast: true },
			{ dirName: "   index.astro", depth: 4, isLast: true },
			{ dirName: ".gitignore", depth: 1, isLast: false },
		];

		// @ts-ignore
		expect(generatePrefix(allLines[0], allLines)).toBe("├─ ");
		// @ts-ignore
		expect(generatePrefix(allLines[1], allLines)).toBe("│  ├─ ");
		// @ts-ignore
		expect(generatePrefix(allLines[2], allLines)).toBe("│  │  ├─ ");
		// @ts-ignore
		expect(generatePrefix(allLines[3], allLines)).toBe("│  │  │  └─ ");
		// @ts-ignore
		expect(generatePrefix(allLines[4], allLines)).toBe("│  │  └─ ");
		// @ts-ignore
		expect(generatePrefix(allLines[5], allLines)).toBe("│  │     └─ ");
		// @ts-ignore
		expect(generatePrefix(allLines[6], allLines)).toBe("├─ ");
	});
});
