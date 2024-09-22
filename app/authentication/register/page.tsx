"use client";

import React from "react";
import { signUp } from "../_actions/auth";
import { useFormState, useFormStatus } from "react-dom";

const page = () => {
  const [state, action] = useFormState(signUp, undefined);
  const { pending } = useFormStatus();

  return (
    <div>
      <form action={action}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
          />
          {state?.errors?.username && <p>{state?.errors?.username}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            placeholder="Password"
          />
          {state?.errors?.password && <p>{state?.errors?.password}</p>}
        </div>
        <div>
          <button type="submit" disabled={pending}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
