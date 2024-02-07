import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMainContext } from "../providers/useMainContext";

const formSchema = z.object({
  searchValue: z.string().min(2, {
    message: "value must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const { state, setState } = useMainContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setState(values.searchValue);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-center space-y-8 w-full m-6"
      >
        <FormField
          control={form.control}
          name="searchValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search Input</FormLabel>
              <FormControl>
                <Input placeholder={state} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
