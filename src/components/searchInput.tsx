"use client";

import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from "./ui/input-group";

type SearchInputProps = {
  onChange?: (query: string) => void;
  onSubmit?: (query: string) => void;
  className?: string;
};

function SearchInput({ onChange, onSubmit, ...props }: SearchInputProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onChange?.(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={`${props.className}`}>
      <InputGroup className="relative rounded-full min-w-[300px]">
        <InputGroupInput
          placeholder="Recherche un produit"
          value={query}
          onChange={handleChange}
        />
        <InputGroupButton type="submit" className="absolute right-3">
          <SearchIcon />
        </InputGroupButton>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
