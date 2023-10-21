import type { ComponentProps, FC } from 'react';
import clsx from 'clsx';

type CopyButtonProps = ComponentProps<'button'> & {
  text: string;
};

export const CopyButton: FC<CopyButtonProps> = ({ className, text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button
      type="button"
      className={clsx(
        className,
        ' text-gray-700 border border-gray-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center items-center'
      )}
      onClick={handleCopy}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
        />
      </svg>
    </button>
  );
};
