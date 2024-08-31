export const resolveFullDirectoryPath = (
	targetIndex: number,
	directories: { dirName: string; depth: number }[],
): string => {
	const clickedItem = directories[targetIndex];
	if (!clickedItem) return "";
	const path: string[] = [clickedItem.dirName];
	let currentDepth = clickedItem.depth;
	for (let i = targetIndex - 1; i >= 0; i--) {
		const item = directories[i];
		if (item && item.depth < currentDepth) {
			path.unshift(item.dirName);
			currentDepth = item.depth;
			if (currentDepth === 0) break;
		}
	}

	return path
		.join("/")
		.replace("//", "/")
		.replace(/\s*\/\s*/g, "/");
};
