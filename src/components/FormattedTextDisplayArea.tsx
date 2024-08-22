import { useEffect } from "react";
import type { Directory } from "../types/directory";
import { CodeMirrorEditor } from "./CodeMirrorEditor";
import { CopyButton } from "./CopyButton";
import { useDirectories } from "./hooks/useDirectories";
import { useFormat } from "./hooks/useFormat";

export const FormattedTextDisplayArea = () => {
	const { text, setText, formattedText } = useFormat();
	const {directories, setDirectories, generateDirectories, getFullPath } = useDirectories()

	useEffect(() => {
		generateDirectories(text)
	},[text])

	const createDirectoryElement = (dirData: Directory, dirIndex: number) => {
		
		const resultPrefixes = []
		for (let i = 1; i < dirData.depth; i++) {
			const previousLinesSameDepth = directories
			.slice(0, directories.indexOf(dirData))
			.reverse()
			.find((l) => l.depth === i);
		if (previousLinesSameDepth && !previousLinesSameDepth.isLast) {
			resultPrefixes.push("│  ");
		} else {
			resultPrefixes.push("   ");
		}
		}
		if(dirData.depth !== 0 ) resultPrefixes.push(dirData.isLast ? "└─ " : "├─ ")
		return (
			<>
				{resultPrefixes.map((item,index) => <div key={`${dirData.dirName}-${index}`}>{item}</div>)}
				<div className="cursor-pointer hover:bg-slate-200 rounded" onClick={() => handleDirectoryClick(dirIndex)}>{dirData.dirName}</div>
			</>
		)
	}

	
	const handleDirectoryClick = (dirIndex: number) => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(getFullPath(dirIndex))
		}
	}
	return (
		<div className="grid gap-x-8 gap-y-4 w-full px-8 md:grid-cols-2 md:gap-y-2">
			<CodeMirrorEditor value={text} onChangeValue={setText} />
			<CopyButton
				className="justify-self-end hidden md:block md:col-start-2 md:col-span-1 md:row-start-1"
				text={formattedText}
			/>
			<div
				className="h-80 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto md:col-start-2 md:col-span-1 md:row-start-2 md:h-[32rem]"
			>
				{directories.map((dirData, index) => (
					<div className="flex" key={index}>
						{createDirectoryElement(dirData, index)}
					</div>
					
				))}
			</div>
		</div>
	);
};
