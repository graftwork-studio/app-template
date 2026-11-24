"use client";

import { Button, Card, CardContent, FieldSeparator, Input } from "@graftwork/ui";
import { FingerprintIcon, ImageIcon, KeyRoundIcon, MailIcon } from "lucide-react";
import { useState } from "react";

/*
 * login-04: a log-in card with the form beside an image.
 * Rebuilt from shadcn/ui's login-04 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-in where the form is submitted. The links point
 * at routes your app is expected to add (/sign-up, /forgot-password, /terms, /privacy). Replace the
 * image placeholder with your own image.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login04() {
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
    <main className="flex min-h-svh flex-col items-center justify-center bg-surface-subtle p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6 md:max-w-4xl">
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form
              noValidate
              aria-labelledby="login-04-title"
              className="flex flex-col gap-5 p-6 md:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                const valid = EMAIL.test(email.trim()) && password !== "";
                setMessage(valid ? "This is a sample block. Connect your sign-in here." : "");
              }}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 id="login-04-title" className="text-2xl leading-heading font-semibold">
                  Welcome back
                </h1>
                <p className="text-text-secondary">Log in to your account.</p>
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
              <FieldSeparator>Or continue with</FieldSeparator>
              <div className="grid grid-cols-3 gap-4">
                <Button type="button" variant="secondary" aria-label="Log in with single sign-on">
                  <KeyRoundIcon aria-hidden />
                </Button>
                <Button type="button" variant="secondary" aria-label="Log in with a passkey">
                  <FingerprintIcon aria-hidden />
                </Button>
                <Button type="button" variant="secondary" aria-label="Log in with an email link">
                  <MailIcon aria-hidden />
                </Button>
              </div>
              <p className="text-center text-sm text-text-secondary">
                Don’t have an account? <a href="/sign-up">Sign up</a>
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
