"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, Input } from "@graftwork/ui";
import { GalleryVerticalEndIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/*
 * signup-03: a sign-up card on a muted background.
 * Rebuilt from shadcn/ui's signup-03 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-up where the form is submitted. The links point
 * at routes your app is expected to add (/log-in, /terms, /privacy).
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup03() {
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
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-surface-subtle p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium text-text-default no-underline">
            <span className="flex size-6 items-center justify-center rounded-md bg-action-primary-bg text-text-on-primary">
              <GalleryVerticalEndIcon aria-hidden className="size-4" />
            </span>
            Your app
          </Link>
        <Card>
          <CardHeader className="text-center">
            <h1 className="text-xl leading-heading font-medium text-text-default">Create your account</h1>
            <CardDescription>Enter your email address to create your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form noValidate aria-label="Create your account" className="flex flex-col gap-5" onSubmit={onSubmit}>
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
                isRequired
                value={values.email}
                onChange={set("email")}
                isInvalid={shown("email") !== undefined}
                errorMessage={shown("email")}
              />
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
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
                  isRequired
                  value={values.confirm}
                  onChange={set("confirm")}
                  isInvalid={shown("confirm") !== undefined}
                  errorMessage={shown("confirm")}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit">Create account</Button>
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
        <p className="px-6 text-center text-sm text-text-secondary">
          By continuing, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </main>
  );
}
