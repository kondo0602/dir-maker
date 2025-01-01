import clsx from "clsx";
import type { CopyTooltipProps } from "../../types/tooltip";
import { CheckIcon } from "./CheckIcon";
import styles from "./CopyTooltip.module.css";

export const CopyTooltip = ({
	tooltipRef,
	position,
	isVisible,
}: CopyTooltipProps) => {
	const Y_OFFSET_PX = -20; // ツールチップの表示位置を少し上にずらすpx数
	const tooltipClass = clsx(
		styles.tooltip,
		isVisible ? styles._show : styles._hidden,
	);
	return (
		<div
			ref={tooltipRef}
			className={tooltipClass}
			style={{
				translate: `calc(${position.x}px - 50%) calc(${position.y}px - 100% + ${Y_OFFSET_PX}px)`,
			}}
			aria-hidden={isVisible ? "false" : "true"}
		>
			<CheckIcon />
			Copied
		</div>
	);
};
