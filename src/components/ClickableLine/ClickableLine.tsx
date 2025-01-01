import type { FC } from "react";
import type { ShowTooltip } from "../../types/tooltip";
import styles from "./ClickableLine.module.css";

type ClickableLineProps = {
	formattedLine: FormattedLine;
	showTooltip: ShowTooltip;
};

export const ClickableLine: FC<ClickableLineProps> = ({
	formattedLine,
	showTooltip,
}) => {
	const handleCopyFullPath = (
		clickEvent: React.MouseEvent<HTMLButtonElement>,
	) => {
		navigator.clipboard.writeText(formattedLine.fullPath);
		showTooltip(clickEvent);
	};

	return (
		<button
			className={styles.button}
			type="button"
			onClick={(event) => handleCopyFullPath(event)}
		>
			{formattedLine.displayText}
		</button>
	);
};
