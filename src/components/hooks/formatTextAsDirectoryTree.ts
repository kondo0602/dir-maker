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

const generatePrefix = (
  line: { dirName: string; depth: number; isLast: boolean },
  allLines: { dirName: string; depth: number; isLast: boolean }[]
): string => {
  let prefix = '';

  for (let i = 1; i < line.depth; i++) {
    const previousLinesSameDepth = allLines
      .slice(0, allLines.indexOf(line))
      .reverse()
      .find((l) => l.depth === i);

    if (previousLinesSameDepth && !previousLinesSameDepth.isLast) {
      prefix += '│  ';
    } else {
      prefix += '   ';
    }
  }

  prefix += line.isLast ? '└─ ' : '├─ ';

  return prefix;
};

const formatLine = (
  line: { dirName: string; depth: number; isLast: boolean },
  array: any[]
): string => {
  const prefix = generatePrefix(line, array);

  return line.dirName.replace(/^\s+/, prefix);
};

export const formatTextAsDirectoryTree = (text: string): string => {
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
    .map((line, _, array) => formatLine(line, array))
    .join('\n');
};
