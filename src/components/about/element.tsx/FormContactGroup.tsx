import { Label, TextInput } from "flowbite-react";
import { FC } from "react";

interface FormContactGroupProps {
  htmlFor: string;
  value: string;
  id: string;
  type: string;
  placeholder: string;
}

const FormContactGroup: FC<FormContactGroupProps> = ({
  htmlFor,
  value,
  id,
  type,
  placeholder,
}) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={htmlFor} value={value} />
      </div>
      <TextInput id={id} type={type} placeholder={placeholder} required />
    </div>
  );
};

export default FormContactGroup;
