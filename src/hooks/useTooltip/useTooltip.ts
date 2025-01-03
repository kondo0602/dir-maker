import { useRef, useState } from "react";
import type { ClickEvent } from "../../types/tooltip";
import { getDisplayPosition } from "./getDisplayPosition/getDisplayPosition";
import { playSvgAnimation } from "./playSvgAnimation/playSvgAnimation";

export const useTooltip = () => {
	const tooltipRef = useRef<HTMLDivElement>(null);
	const timerRef = useRef<NodeJS.Timeout | null>(null); // タイマーIDを保持
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isVisible, setIsVisible] = useState(false);
	const TOOLTIP_DURATION_MS = 800; // ツールチップの表示時間（ms）

	const showTooltip = (clickEvent: ClickEvent) => {
		// 前回のタイマーがあればクリア
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}

		// ツールチップの表示位置を設定
		setPosition(getDisplayPosition(clickEvent));

		// ツールチップを表示してからフェードアウト
		setIsVisible(true);

		timerRef.current = setTimeout(() => {
			setIsVisible(false);
			timerRef.current = null;
		}, TOOLTIP_DURATION_MS);

		// チェックマークのアニメーションを再生
		const checkIconAnimation = tooltipRef.current?.querySelector(
			"#check-icon-animation",
		) as SVGAnimateElement | null;
		playSvgAnimation(checkIconAnimation);
	};

	return {
		tooltipRef,
		position,
		isVisible,
		showTooltip,
	};
};
