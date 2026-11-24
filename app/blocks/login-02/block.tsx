"use client";

import { Button, FieldSeparator, Input } from "@graftwork/ui";
import { GalleryVerticalEndIcon, ImageIcon, KeyRoundIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/*
 * login-02: a two-column log-in page with a cover image.
 * Rebuilt from shadcn/ui's login-02 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-in where the form is submitted. The links point
 * at routes your app is expected to add (/sign-up, /forgot-password, /terms, /privacy). Replace the
 * image placeholder with your own image.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login02() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const emailError = !submitted
    ? undefined
    : email.trim() === ""
      ? "Enter your email address."
      : EMAIL.test(email.trim())
        ? undefined
        : "Enter an email address in the correct format, like name@example.com.";
  const passwordError = submitted && password === "" ? "Enter your password." : undefined;

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
            <form
              noValidate
              aria-labelledby="login-02-title"
              className="flex flex-col gap-5"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                const valid = EMAIL.test(email.trim()) && password !== "";
                setMessage(valid ? "This is a sample block. Connect your sign-in here." : "");
              }}
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 id="login-02-title" className="text-2xl leading-heading font-semibold">
                  Log in to your account
                </h1>
                <p className="text-sm text-text-secondary">Enter your email address to log in to your account.</p>
              </div>
              <Input
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@example.com"
                isRequired
                value={email}
                onChange={setEmail}
                isInvalid={emailError !== undefined}
                errorMessage={emailError}
              />
              <div className="flex flex-col gap-2">
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  isRequired
                  value={password}
                  onChange={setPassword}
                  isInvalid={passwordError !== undefined}
                  errorMessage={passwordError}
                />
                <a href="/forgot-password" className="self-start text-sm">
                  Forgot your password?
                </a>
              </div>
              <Button type="submit">Log in</Button>
              <FieldSeparator className="[&>span]:bg-surface-default">Or continue with</FieldSeparator>
              <div className="flex flex-col gap-3">
                <Button type="button" variant="secondary">
                  <KeyRoundIcon aria-hidden />
                  Log in with single sign-on
                </Button>
                <p className="text-center text-sm text-text-secondary">
                  Don’t have an account? <a href="/sign-up">Sign up</a>
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
