"use client";

import { Button, FieldSeparator, Input } from "@graftwork/ui";
import { GalleryVerticalEndIcon, ImageIcon, KeyRoundIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/*
 * signup-02: a two-column sign-up page with a cover image.
 * Rebuilt from shadcn/ui's signup-02 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-up where the form is submitted. The links point
 * at routes your app is expected to add (/log-in, /terms, /privacy).
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup02() {
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
    <main className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium text-text-default no-underline">
            <span className="flex size-6 items-center justify-center rounded-md bg-action-primary-bg text-text-on-primary">
              <GalleryVerticalEndIcon aria-hidden className="size-4" />
            </span>
            Your app
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form noValidate aria-labelledby="signup-02-title" className="flex flex-col gap-5" onSubmit={onSubmit}>
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 id="signup-02-title" className="text-2xl leading-heading font-semibold">
                  Create your account
                </h1>
                <p className="text-sm text-text-secondary">Fill in the form below to create your account.</p>
              </div>
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
              <Button type="submit">Create account</Button>
              <FieldSeparator className="[&>span]:bg-surface-default">Or continue with</FieldSeparator>
              <div className="flex flex-col gap-3">
                <Button type="button" variant="secondary">
                  <KeyRoundIcon aria-hidden />
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
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-center bg-surface-subtle text-text-secondary lg:flex">
        <ImageIcon aria-hidden className="size-12" />
      </div>
    </main>
  );
}
