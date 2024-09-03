"use client";

import React, { useState } from "react";

const Input = ({
  label,
  value,
  id,
}: {
  label: string;
  id: string;
  value?: string | number;
}) => {
  const [input, setInput]: [string | number, Function] = useState(value ?? '');
  console.log('reinitialize', id)
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e?.target?.value)
        }
        placeholder={`Enter ${label}`}
        className="rounded-md border border-red-300 border-solid"
      />
    </>
  );
};

export default Input;
