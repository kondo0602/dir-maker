/**
 * 現在の行がその深さにおける最後の行かどうかを判定する
 *
 * @param line - 現在の行
 * @param nextLine - 次の行
 * @param linesAfterCurrent - 現在の行以降の行
 * @returns 現在の行がその深さにおける最後の行かどうか
 */
export const isLastLine = (
	line: { dirName: string; depth: number },
	nextLine: { dirName: string; depth: number } | undefined,
	linesAfterCurrent: { dirName: string; depth: number }[],
): boolean => {
	return (
		!nextLine ||
		nextLine.depth < line.depth ||
		linesAfterCurrent.every((l) => l.depth > line.depth) ||
		(linesAfterCurrent[
			linesAfterCurrent.findIndex((l) => l.depth <= line.depth)
		]?.depth ?? 0) < line.depth
	);
};
