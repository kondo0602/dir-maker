import type { Dispatch, SetStateAction } from "react";

export type ShowTooltip = (
	clickEvent: React.MouseEvent<HTMLButtonElement>,
) => void;
export type ClickEvent = React.MouseEvent<HTMLButtonElement>;
export type CopyTooltipProps = {
	tooltipRef: React.RefObject<HTMLDivElement>;
	position: TooltipPosition;
	isVisible: boolean;
};
export type TooltipPosition = { x: number; y: number };
export type SetPosition = Dispatch<SetStateAction<TooltipPosition>>;
