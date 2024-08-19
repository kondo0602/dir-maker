import type { Directory } from "../types/directory";
import { CodeMirrorEditor } from "./CodeMirrorEditor";
import { CopyButton } from "./CopyButton";
import { useFormat } from "./hooks/useFormat";

export const FormattedTextDisplayArea = () => {
	const { text, setText, formattedText, formattedDirData } = useFormat();

	
	const createDirectoryElement = (dirData: Directory, dirIndex: number) => {
		
		const resultPrefixs = []
		for (let i = 1; i < dirData.depth; i++) {
			const previousLinesSameDepth = formattedDirData
			.slice(0, formattedDirData.indexOf(dirData))
			.reverse()
			.find((l) => l.depth === i);
		if (previousLinesSameDepth && !previousLinesSameDepth.isLast) {
			resultPrefixs.push("│  ");
		} else {
			resultPrefixs.push("   ");
		}
		}
		if(dirData.depth !== 0 ) resultPrefixs.push(dirData.isLast ? "└─ " : "├─ ")
		return (
			<>
				{resultPrefixs.map((item,index) => <div key={`${dirData.dirName}-${index}`}>{item}</div>)}
				<div className="cursor-pointer hover:bg-slate-200 rounded" onClick={() => handleDirectoryClick(dirData,dirIndex)}>{dirData.dirName}</div>
			</>
		)
	}

	const getFullPath = (clickedItem: Directory, clickedIndex: number): string => {
		const path: string[] = [clickedItem.dirName];
		let currentDepth = clickedItem.depth;
		
		// 現在の項目から上位のディレクトリを遡る
		for (let i = clickedIndex - 1; i >= 0; i--) {
			const item = formattedDirData[i];
			if (item && item.depth < currentDepth) {
				path.unshift(item.dirName);
				currentDepth = item.depth;
				
				// ルートに到達したら終了
				if (currentDepth === 0) break;
			}
		}

		// パスの配列を文字列に結合
		return path.join('/').replace('//', '/'); // 重複するスラッシュを除去
	}
	
	const handleDirectoryClick = (dirData: Directory, dirIndex: number) => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(getFullPath(dirData,dirIndex))
		}
	}
	return (
		<div className="grid gap-x-8 gap-y-4 w-full px-8 md:grid-cols-2 md:gap-y-2">
			<CodeMirrorEditor value={text} onChangeValue={setText} />
			<CopyButton
				className="justify-self-end hidden md:block md:col-start-2 md:col-span-1 md:row-start-1"
				text={formattedText}
			/>
			{/* <textarea
				className="h-80 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto md:col-start-2 md:col-span-1 md:row-start-2 md:h-[32rem]"
				value={formattedText}
				disabled
				spellCheck="false"
			/> */}
			<div
				className="h-80 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto md:col-start-2 md:col-span-1 md:row-start-2 md:h-[32rem]"
			>
				{formattedDirData.map((dirData, index) => (
					<div className="flex" key={index}>
						{createDirectoryElement(dirData, index)}
					</div>
					
				))}
			</div>
		</div>
	);
};
