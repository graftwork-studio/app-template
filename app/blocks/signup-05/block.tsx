"use client";

import { Button, FieldSeparator, Input } from "@graftwork/ui";
import { FingerprintIcon, GalleryVerticalEndIcon, KeyRoundIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/*
 * signup-05: an email-only sign-up page with other sign-up options.
 * Rebuilt from shadcn/ui's signup-05 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: connect your own sign-up where the form is submitted. The links point
 * at routes your app is expected to add (/log-in, /terms, /privacy).
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup05() {
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
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-surface-default p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <form
          noValidate
          aria-labelledby="signup-05-title"
          className="flex flex-col gap-5"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            setMessage(EMAIL.test(email.trim()) ? "This is a sample block. Connect your sign-up here." : "");
          }}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <Link href="/" className="flex size-8 items-center justify-center rounded-md text-text-default">
              <GalleryVerticalEndIcon aria-hidden className="size-6" />
              <span className="sr-only">Your app</span>
            </Link>
            <h1 id="signup-05-title" className="text-xl leading-heading font-semibold">
              Welcome to your app
            </h1>
            <p className="text-sm text-text-secondary">
              Already have an account? <a href="/log-in">Log in</a>
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
          <Button type="submit">Create account</Button>
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
        <p className="px-6 text-center text-sm text-text-secondary">
          By continuing, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </main>
  );
}
