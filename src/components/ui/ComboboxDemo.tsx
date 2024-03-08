"use client";

import { UsersLimit, useUser } from "@/provider/UserProvider";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const frameworks = ["5", "10", "15", "20"] as UsersLimit[];

export default function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const { usersLimit, setUsersLimit } = useUser();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[100px] justify-between"
        >
          {usersLimit}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-20 p-0">
        <Command>
          <CommandGroup>
            {frameworks.map((element) => (
              <CommandItem
                key={element}
                value={element}
                onSelect={(currentValue) => {
                  setUsersLimit(currentValue as UsersLimit);
                  setOpen(false);
                }}
              >
                {element}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    element === usersLimit ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
