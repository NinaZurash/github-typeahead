import { Input } from "../../ui/input";

type Props = {
  handleOnChange: (newValue: string) => void;
};

export function ProfileForm({ handleOnChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleOnChange(event.target.value);
  };

  return (
    <Input
      className="justify-center h-16 space-y-8 w-200 mx-auto mt-40 mb-6"
      placeholder="enter text"
      onChange={handleChange}
    />
  );
}
