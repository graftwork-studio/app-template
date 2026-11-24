"use client";

import { Button, Card, CardContent, FieldSeparator, Input } from "@graftwork/ui";
import { FingerprintIcon, ImageIcon, KeyRoundIcon, MailIcon } from "lucide-react";
import { useState } from "react";

/*
 * signup-04: a sign-up card with the form beside an image.
 * Rebuilt from shadcn/ui's signup-04 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-up where the form is submitted. The links point
 * at routes your app is expected to add (/log-in, /terms, /privacy).
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup04() {
  const FIELDS = ["email", "password", "confirm"] as const;
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
    <main className="flex min-h-svh flex-col items-center justify-center bg-surface-subtle p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6 md:max-w-4xl">
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form noValidate aria-labelledby="signup-04-title" className="flex flex-col gap-5 p-6 md:p-8" onSubmit={onSubmit}>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 id="signup-04-title" className="text-2xl leading-heading font-semibold">
                  Create your account
                </h1>
                <p className="text-sm text-text-secondary">Enter your email address to create your account.</p>
              </div>
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
              <Button type="submit">Create account</Button>
              <FieldSeparator>Or continue with</FieldSeparator>
              <div className="grid grid-cols-3 gap-4">
                <Button type="button" variant="secondary" aria-label="Sign up with single sign-on">
                  <KeyRoundIcon aria-hidden />
                </Button>
                <Button type="button" variant="secondary" aria-label="Sign up with a passkey">
                  <FingerprintIcon aria-hidden />
                </Button>
                <Button type="button" variant="secondary" aria-label="Sign up with an email link">
                  <MailIcon aria-hidden />
                </Button>
              </div>
              <p className="text-center text-sm text-text-secondary">
                Already have an account? <a href="/log-in">Log in</a>
              </p>
              <p role="status" className="text-sm text-text-secondary">
                {message}
              </p>
            </form>
            <div className="hidden items-center justify-center bg-surface-subtle text-text-secondary md:flex">
              <ImageIcon aria-hidden className="size-12" />
            </div>
          </CardContent>
        </Card>
        <p className="px-6 text-center text-sm text-text-secondary">
          By continuing, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </main>
  );
}
