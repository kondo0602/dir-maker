import { calculateDepth } from "./calculate-depth/calculate-depth";
import { generatePrefix } from "./generate-prefix/generate-prefix";
import { isLastLine } from "./is-last-line/is-last-line";
import { separateLines } from "./separate-lines/separate-lines";

export const formatTextAsDirectoryTree = (text: string): string[] => {
	return separateLines(text)
		.map((line) => ({ dirName: line, depth: calculateDepth(line) }))
		.map((line, index, array) => ({
			...line,
			isLast: isLastLine(line, array[index + 1], array.slice(index + 1)),
		}))
		.map((line, _, array) => line.dirName.replace(/^\s+/, generatePrefix(line, array)));
};
