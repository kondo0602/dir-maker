const getLines = (text: string, position: number) => text.substring(0, position).split('\n');

export const useKeyDown = () => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { value, selectionStart, selectionEnd } = e.currentTarget;

    if (e.key === "Tab") {
      e.preventDefault();

      if (selectionStart === selectionEnd) {
        const newValue = value.substring(0, selectionStart) + " " + value.substring(selectionEnd);
        e.currentTarget.value = newValue;
        e.currentTarget.selectionStart = selectionStart + 1;
        e.currentTarget.selectionEnd = selectionEnd + 1;
      } else {
        const linesBeforeCaret = getLines(value, selectionStart);
        const startLine = linesBeforeCaret.length - 1;
        const endLine = getLines(value, selectionEnd).length - 1;
        const startLineText = linesBeforeCaret[startLine];

        e.currentTarget.value = value
          .split('\n')
          .map((line, i) => {
            if (i >= startLine && i <= endLine) {
              return " " + line;
            }

            return line;
          })
          .join('\n');

        e.currentTarget.selectionStart = startLineText && /\S/.test(startLineText)
        ? selectionStart + 1
        : selectionStart;

        e.currentTarget.selectionEnd = selectionEnd + 1 * (endLine - startLine + 1)
      }
    }
  };

  return handleKeyDown;
};
