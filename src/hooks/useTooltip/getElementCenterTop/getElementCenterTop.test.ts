import { test } from "vitest";
import { getElementCenterTop } from "./getElementCenterTop";

test("要素の上辺の中央位置を取得", () => {
	const element = {
		getBoundingClientRect: () => ({
			top: 100,
			left: 0,
			width: 100,
			height: 100,
		}),
	} as unknown as HTMLElement;

	expect(getElementCenterTop(element)).toStrictEqual({ x: 50, y: 100 });
});
