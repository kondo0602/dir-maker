import type { FormattedLine } from "../../../../types/formattedLine";
import { calculateDepth } from "./calculate-depth/calculate-depth";
import { generatePrefix } from "./generate-prefix/generate-prefix";
import { isLastLine } from "./is-last-line/is-last-line";
import { resolveFullPath } from "./resolve-full-path/resolve-full-path";
import { separateLines } from "./separate-lines/separate-lines";

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
				fullPath: resolveFullPath(index, array),
			};
		});

	return formattedLines;
};
