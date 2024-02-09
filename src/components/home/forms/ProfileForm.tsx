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
      className="justify-center space-y-8 w-100 mx-auto mt-14 mb-6"
      placeholder="enter text"
      onChange={handleChange}
    />
  );
}
