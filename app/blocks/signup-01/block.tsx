"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, Input } from "@graftwork/ui";
import { useState } from "react";

/*
 * signup-01: a sign-up form in a card.
 * Rebuilt from shadcn/ui's signup-01 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-up where the form is submitted. The links point
 * at routes your app is expected to add (/log-in, /terms, /privacy).
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup01() {
  const FIELDS = ["name", "email", "password", "confirm"] as const;
  const [values, setValues] = useState({ name: "", email: "", password: "", confirm: "" });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const set = (field: keyof typeof values) => (value: string) => setValues((v) => ({ ...v, [field]: value }));

  const errors = {
    name: values.name.trim() === "" ? "Enter your name." : undefined,
    email:
      values.email.trim() === ""
        ? "Enter your email address."
        : EMAIL.test(values.email.trim())
          ? undefined
          : "Enter an email address in the correct format, like name@example.com.",
    password: values.password.length < 8 ? "Enter a password of at least 8 characters." : undefined,
    confirm:
      values.confirm === ""
        ? "Enter your password again."
        : values.confirm !== values.password
          ? "The passwords don’t match."
          : undefined,
  };
  const shown = (field: keyof typeof errors) => (submitted ? errors[field] : undefined);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    const valid = FIELDS.every((field) => errors[field] === undefined);
    setMessage(valid ? "This is a sample block. Connect your sign-up here." : "");
  };
  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <h1 className="text-md leading-heading font-medium text-text-default">Create an account</h1>
            <CardDescription>Enter your details to create your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form noValidate aria-label="Create an account" className="flex flex-col gap-5" onSubmit={onSubmit}>
              <Input
                label="Full name"
                name="name"
                autoComplete="name"
                isRequired
                value={values.name}
                onChange={set("name")}
                isInvalid={shown("name") !== undefined}
                errorMessage={shown("name")}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@example.com"
                description="We’ll use this to contact you. We won’t share it with anyone."
                isRequired
                value={values.email}
                onChange={set("email")}
                isInvalid={shown("email") !== undefined}
                errorMessage={shown("email")}
              />
              <Input
                label="Password"
                type="password"
                name="new-password"
                autoComplete="new-password"
                description="At least 8 characters."
                isRequired
                value={values.password}
                onChange={set("password")}
                isInvalid={shown("password") !== undefined}
                errorMessage={shown("password")}
              />
              <Input
                label="Confirm password"
                type="password"
                name="confirm-password"
                autoComplete="new-password"
                description="Enter the same password again."
                isRequired
                value={values.confirm}
                onChange={set("confirm")}
                isInvalid={shown("confirm") !== undefined}
                errorMessage={shown("confirm")}
              />
              <div className="flex flex-col gap-3">
                <Button type="submit">Create account</Button>
                <Button type="button" variant="secondary">
                  Sign up with single sign-on
                </Button>
                <p className="text-center text-sm text-text-secondary">
                  Already have an account? <a href="/log-in">Log in</a>
                </p>
              </div>
              <p role="status" className="text-sm text-text-secondary">
                {message}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
