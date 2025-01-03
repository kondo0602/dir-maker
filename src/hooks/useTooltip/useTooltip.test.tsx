import {
	act,
	cleanup,
	fireEvent,
	render,
	renderHook,
	screen,
} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useTooltip } from "./useTooltip";

afterEach(() => {
	cleanup();
});

describe("useTooltip", () => {
	test("初期状態でisVisibleがfalse", async () => {
		const { result } = renderHook(() => useTooltip());
		expect(result.current.isVisible).toBe(false);
	});

	test("showTooltipを呼び出すとisVisibleがtrueになる", async () => {
		const { result } = renderHook(() => useTooltip());

		// beginElementのモック
		// jsdom,happy-domともにSVGAnimateのbeginElement非サポートの模様("Error: beginElement is not a function"の回避)
		if (!("beginElement" in SVGAnimationElement.prototype)) {
			Object.defineProperty(SVGAnimationElement.prototype, "beginElement", {
				value: vi.fn(),
			});
		}

		render(
			<>
				<button type="button" onClick={(e) => result.current.showTooltip(e)}>
					copy button
				</button>
			</>,
		);

		const button = screen.getByText("copy button");
		await act(() => {
			fireEvent.click(button);
		});
		expect(result.current.isVisible).toBe(true);
	});

	test("copy-button以外をクリックしたら、クリック座標を返す", async () => {
		const { result } = renderHook(() => useTooltip());
		render(
			<>
				<button
					type="button"
					id="non-copy-button"
					onClick={(e) => {
						result.current.showTooltip(e);
					}}
				>
					copy button
				</button>
			</>,
		);

		const button = screen.getByText("copy button");
		await act(() => {
			fireEvent.click(button, { clientX: 10, clientY: 20 });
		});
		expect(result.current.position).toStrictEqual({ x: 10, y: 20 });
	});

	test("copy-buttonをクリックしたら、copy-buttonの上辺中央座標を返す", async () => {
		// 現時点ではjsdomもhappy-domもstyleの値は0で固定されているためclick座標以外が取得できることを確認
		const { result } = renderHook(() => useTooltip());
		render(
			<>
				<button
					type="button"
					id="copy-button"
					style={{
						position: "absolute",
						top: 20,
						left: 0,
						width: 100,
						height: 50,
					}}
					onClick={(e) => {
						result.current.showTooltip(e);
					}}
				>
					copy button
				</button>
			</>,
		);

		const button = screen.getByText("copy button");
		await act(() => {
			fireEvent.click(button, { clientX: 10, clientY: 20 });
		});
		expect(result.current.position).toStrictEqual({ x: 0, y: 0 });
	});
});
