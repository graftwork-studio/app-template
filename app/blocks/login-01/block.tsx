"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, Input } from "@graftwork/ui";
import { useState } from "react";

/*
 * login-01: a log-in form in a card.
 * Rebuilt from shadcn/ui's login-01 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-in where the form is submitted. The links point
 * at routes your app is expected to add (/sign-up, /forgot-password, /terms, /privacy).
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login01() {
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
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <h1 className="text-md leading-heading font-medium text-text-default">Log in to your account</h1>
            <CardDescription>Enter your email address to log in to your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              noValidate
              aria-label="Log in"
              className="flex flex-col gap-5"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                const valid = EMAIL.test(email.trim()) && password !== "";
                setMessage(valid ? "This is a sample block. Connect your sign-in here." : "");
              }}
            >
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
              <div className="flex flex-col gap-3">
                <Button type="submit">Log in</Button>
                <Button type="button" variant="secondary">
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
