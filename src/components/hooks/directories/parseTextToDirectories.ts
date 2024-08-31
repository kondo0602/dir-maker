import type { Directory } from "../../../types/directory";
import {
	calculateDepth,
	isLast,
	separateLines,
} from "../formatTextAsDirectoryTree/formatTextAsDirectoryTree";
import { resolveFullDirectoryPath } from "./resolveFullDirectoryPath";

export const parseTextToDirectories = (text: string): Directory[] => {
	const directories = separateLines(text)
		.map((line) => ({ dirName: line.trim(), depth: calculateDepth(line) }))
		.map((line, index, array) => ({
			...line,
			isLast: isLast(line, array[index + 1], array.slice(index + 1)),
			path: "",
		}));
	return directories.map((dirData, index) => {
		return { ...dirData, path: resolveFullDirectoryPath(directories, index) };
	});
};
