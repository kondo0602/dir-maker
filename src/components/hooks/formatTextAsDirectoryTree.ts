const separeteLines = (text: string): string[] => {
  return text.trim().split('\n');
};

const calculateDepth = (line: string): number => {
  return line.match(/^\s+/)?.[0].length || 0;
};

const isLast = (
  line: { dirName: string; depth: number },
  nextLine: { dirName: string; depth: number } | undefined,
  subsequentLines: { dirName: string; depth: number }[]
): boolean => {
  return (
    !nextLine ||
    nextLine.depth < line.depth ||
    (nextLine.depth > line.depth &&
      !subsequentLines.some((l) => l.depth === line.depth))
  );
};

const formatLine = (
  line: { dirName: string; depth: number; isLast: boolean },
  subsequentLines: { dirName: string; depth: number }[]
): string => {
  let spaces = '';

  for (let depth = 1; depth < line.depth; depth++) {
    const hasMoreDirs = subsequentLines.some((l) => l.depth === depth);
    spaces += hasMoreDirs ? '│  ' : '   ';
  }

  const prefixChar = line.isLast ? '└─ ' : '├─ ';
  const prefix = spaces + prefixChar;

  return line.dirName.replace(/^\s+/, prefix);
};

export const formatTextAsDirectoryTree = (text: string): string => {
  return separeteLines(text)
    .map((line) => {
      return {
        dirName: line,
        depth: calculateDepth(line),
      };
    })
    .map((line, index, array) => {
      return {
        ...line,
        isLast: isLast(line, array[index + 1], array.slice(index + 1)),
      };
    })
    .map((line, index, array) => formatLine(line, array.slice(index + 1)))
    .join('\n');
};
