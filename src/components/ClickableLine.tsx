import type { FC } from "react";
import { generateDirectoryLineData } from "../hooks/directories/generateDirectoryLineData";
import type { Directory } from "../types/directory";

type ClickableLineProps = {
	dirIndex: number;
	directories: Directory[];
	onClick: (dirData: Directory) => void;
};

export const ClickableLine: FC<ClickableLineProps> = ({
	dirIndex,
	directories,
	onClick,
}) => {
	const { prefixes, dirData } = generateDirectoryLineData(
		directories,
		dirIndex,
	);

	return (
		<div className="flex">
			{prefixes.map((prefix, index) => (
				<div key={`${dirData.dirName}-${index}`}>{prefix}</div>
			))}
			<button
				className="cursor-pointer hover:bg-slate-200 rounded"
				onClick={() => onClick(dirData)}
				type="button"
			>
				{dirData.dirName}
			</button>
		</div>
	);
};
