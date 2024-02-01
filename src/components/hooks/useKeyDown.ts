export const useKeyDown = () => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { value, selectionStart, selectionEnd } = e.currentTarget;

    if (e.key === "Tab") {
      e.preventDefault();

      const newValue = value.substring(0, selectionStart) + " " + value.substring(selectionEnd);
      e.currentTarget.value = newValue;
      e.currentTarget.selectionStart = selectionStart + 1;
      e.currentTarget.selectionEnd = selectionEnd + 1;
    }
  };

  return handleKeyDown;
};
