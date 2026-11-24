"use client";

import { AuthLayout, Button, FieldSeparator, Input } from "@graftwork/ui";
import { FingerprintIcon, GalleryVerticalEndIcon, KeyRoundIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/*
 * login-05: an email-only log-in page.
 * Rebuilt from shadcn/ui's login-05 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-in where the form is submitted. The links point
 * at routes your app is expected to add (/sign-up, /forgot-password, /terms, /privacy).
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login05() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const emailError = !submitted
    ? undefined
    : email.trim() === ""
      ? "Enter your email address."
      : EMAIL.test(email.trim())
        ? undefined
        : "Enter an email address in the correct format, like name@example.com.";

  return (
    <AuthLayout
      footer={
        <p>
          By continuing, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
        </p>
      }
    >
      <form
        noValidate
        aria-labelledby="login-05-title"
        className="flex flex-col gap-5"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
          setMessage(EMAIL.test(email.trim()) ? "This is a sample block. Connect your sign-in here." : "");
        }}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <Link href="/" className="flex size-8 items-center justify-center rounded-md text-text-default">
            <GalleryVerticalEndIcon aria-hidden className="size-6" />
            <span className="sr-only">Your app</span>
          </Link>
          <h1 id="login-05-title" className="text-xl leading-heading font-semibold">
            Welcome to your app
          </h1>
          <p className="text-sm text-text-secondary">
            Don’t have an account? <a href="/sign-up">Sign up</a>
          </p>
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
        <Button type="submit">Log in</Button>
        <FieldSeparator className="[&>span]:bg-surface-default">Or</FieldSeparator>
        <div className="grid gap-4 sm:grid-cols-2">
          <Button type="button" variant="secondary">
            <KeyRoundIcon aria-hidden />
            Single sign-on
          </Button>
          <Button type="button" variant="secondary">
            <FingerprintIcon aria-hidden />
            Passkey
          </Button>
        </div>
        <p role="status" className="text-sm text-text-secondary">
          {message}
        </p>
      </form>
    </AuthLayout>
  );
}
