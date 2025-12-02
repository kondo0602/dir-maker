/**
 * 文字列の先頭の空白・タブの数を返す
 *
 * @param line - 文字列
 * @returns 先頭の空白の数
 */
export const calculateDepth = (line: string): number => {
	return line.match(/^\s+/)?.[0].length || 0;
};
