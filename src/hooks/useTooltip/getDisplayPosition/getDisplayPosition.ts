import type { ClickEvent, TooltipPosition } from "../../../types/tooltip";
import { getClickPosition } from "../getClickPosition/getClickPosition";
import { getElementCenterTop } from "../getElementCenterTop/getElementCenterTop";

/**
 * ツールチップの表示位置を取得
 * CopyButtonの場合はボタンの中央上部、それ以外の場合はクリック位置を返す
 *
 * @param clickEvent - クリックイベントオブジェクト
 * @returns ツールチップの表示位置のx, y座標
 */
export const getDisplayPosition = (clickEvent: ClickEvent) => {
	let displayPosition: TooltipPosition;
	if (clickEvent.currentTarget.id === "copy-button") {
		displayPosition = getElementCenterTop(clickEvent.currentTarget);
	} else {
		displayPosition = getClickPosition(clickEvent);
	}
	return displayPosition;
};
