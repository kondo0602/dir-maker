import { resolveFullDirectoryPath } from "../directories/resolveFullDirectoryPath";
import { calculateDepth } from "./calculateDepth/calculateDepth";
import { isLastLine } from "./isLastLine/isLastLine";
import { separateLines } from "./separateLines/separateLines";

export const generatePrefix = (
	line: { dirName: string; depth: number; isLast: boolean },
	allLines: { dirName: string; depth: number; isLast: boolean }[],
): string => {
	let prefix = "";

	for (let i = 1; i < line.depth; i++) {
		const previousLinesSameDepth = allLines
			.slice(0, allLines.indexOf(line))
			.reverse()
			.find((l) => l.depth === i);

		if (previousLinesSameDepth && !previousLinesSameDepth.isLast) {
			prefix += "│  ";
		} else {
			prefix += "   ";
		}
	}

	prefix += line.isLast ? "└─ " : "├─ ";

	return prefix;
};

export const formatTextAsDirectoryTree = (text: string) => {
	const formattedLines: FormattedLine[] = separateLines(text)
		.map((line) => ({ dirName: line, depth: calculateDepth(line) }))
		.map((line, index, array) => ({
			...line,
			isLast: isLastLine(line, array[index + 1], array.slice(index + 1)),
		}))
		.map((line, index, array) => {
			return {
				displayText: line.dirName.replace(/^\s+/, generatePrefix(line, array)),
				fullPath: resolveFullDirectoryPath(index, array),
			};
		});

	return formattedLines;
};
