export const separateLines = (text: string): string[] => {
  return text.split('\n').filter((line) => line.trim() !== '');
};

export const calculateDepth = (line: string): number => {
  return line.match(/^\s+/)?.[0].length || 0;
};

export const isLast = (
  line: { dirName: string; depth: number },
  nextLine: { dirName: string; depth: number } | undefined,
  linesAfterCurrent: { dirName: string; depth: number }[]
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

const formatLine = (
  line: { dirName: string; depth: number; isLast: boolean },
  flagArray: number[]
): string => {
  let spaces = '';

  for (let depth = 1; depth < line.depth; depth++) {
    spaces += flagArray[depth] == 0 ? '   ' : '│  ';
  }

  const prefixChar = line.isLast ? '└─ ' : '├─ ';
  flagArray[line.depth] = line.isLast ? 0 : (flagArray[line.depth] || 0) + 1;
  const prefix = spaces + prefixChar;

  return line.dirName.replace(/^\s+/, prefix);
};

export const formatTextAsDirectoryTree = (text: string): string => {
  const newlinePattern = /\n+/g;
  let maxNewlineLength = 0;
  let match;
  while ((match = newlinePattern.exec(text)) !== null) {
    const currentLength = match[0].length;
    if (currentLength > maxNewlineLength) {
      maxNewlineLength = currentLength;
    }
  }
  const flagArray = Array(maxNewlineLength).fill(0);

  return separateLines(text)
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
    .map((line) => formatLine(line, flagArray))
    .join('\n');
};
