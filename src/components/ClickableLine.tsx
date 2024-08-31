import type { FC } from "react";

type ClickableLineProps = {
	formattedLine: FormattedLine;
};

export const ClickableLine: FC<ClickableLineProps> = ({ formattedLine }) => {
	const handleCopyFullPath = () => {
		navigator.clipboard.writeText(formattedLine.fullPath);
	};

	return (
		<button
			className="flex hover:bg-slate-200 rounded"
			type="button"
			onClick={handleCopyFullPath}
		>
			{formattedLine.displayText}
		</button>
	);
};
