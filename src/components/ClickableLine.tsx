import type { FC } from "react";

type ClickableLineProps = {
	formattedLine: FormattedLine;
};

export const ClickableLine: FC<ClickableLineProps> = ({ formattedLine }) => {
	const handleCopyFullPath = () => {
		navigator.clipboard.writeText(formattedLine.fullPath);
	};

	return (
		<div className="flex">
			<button
				className="cursor-pointer hover:bg-slate-200 rounded"
				onClick={handleCopyFullPath}
				type="button"
			>
				{formattedLine.displayText}
			</button>
		</div>
	);
};
