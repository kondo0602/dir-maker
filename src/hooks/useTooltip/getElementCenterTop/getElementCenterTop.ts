/**
 * 要素の上辺の中央位置を取得
 *
 * @param element - 対象の要素
 * @returns 中央位置のx, y座標
 */
export const getElementCenterTop = (element: HTMLElement) => {
	const rect = element.getBoundingClientRect();
	return {
		x: rect.left + rect.width / 2,
		y: rect.top,
	};
};
