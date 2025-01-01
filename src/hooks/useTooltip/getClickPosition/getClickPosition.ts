import type { ClickEvent } from "../../../types/tooltip";

/**
 * clickイベントの位置を取得
 *
 * @param clickEvent - クリックイベントオブジェクト
 * @returns クリック位置のx, y座標
 */
export const getClickPosition = (clickEvent: ClickEvent) => {
	return {
		x: clickEvent.clientX,
		y: clickEvent.clientY,
	};
};
