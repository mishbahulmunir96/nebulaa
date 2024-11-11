import { FC } from "react";

interface CheckboxProps {
  id: string;
  htmlFor: string;
  text: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, htmlFor, text }) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor={htmlFor}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
