"use client";

import { AuthLayout, Button, Card, CardContent, CardDescription, CardHeader, FieldSeparator, Input } from "@graftwork/ui";
import { FingerprintIcon, GalleryVerticalEndIcon, KeyRoundIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/*
 * login-03: a log-in card on a muted background, with other sign-in options first.
 * Rebuilt from shadcn/ui's login-03 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-in where the form is submitted. The links point
 * at routes your app is expected to add (/sign-up, /forgot-password, /terms, /privacy).
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login03() {
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
    <AuthLayout
      background="muted"
      brand={
        <Link href="/" className="flex items-center gap-2 font-medium text-text-default no-underline">
          <span className="flex size-6 items-center justify-center rounded-md bg-action-primary-bg text-text-on-primary">
            <GalleryVerticalEndIcon aria-hidden className="size-4" />
          </span>
          Your app
        </Link>
      }
      footer={
        <p>
          By continuing, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
        </p>
      }
    >
      <Card>
        <CardHeader className="text-center">
          <h1 className="text-xl leading-heading font-medium text-text-default">Welcome back</h1>
          <CardDescription>Log in with single sign-on or a passkey.</CardDescription>
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
            <div className="flex flex-col gap-3">
              <Button type="button" variant="secondary">
                <KeyRoundIcon aria-hidden />
                Log in with single sign-on
              </Button>
              <Button type="button" variant="secondary">
                <FingerprintIcon aria-hidden />
                Log in with a passkey
              </Button>
            </div>
            <FieldSeparator>Or continue with</FieldSeparator>
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
    </AuthLayout>
  );
}
