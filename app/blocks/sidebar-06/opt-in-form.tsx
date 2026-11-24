"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, SidebarInput } from "@graftwork/ui";
import { useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function OptInForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const error = !submitted
    ? undefined
    : EMAIL.test(email.trim())
      ? undefined
      : "Enter an email address in the correct format, like name@example.com.";
  return (
    <Card className="gap-2 py-4">
      <CardHeader className="px-4">
        <p className="text-sm font-medium">Get product updates</p>
        <CardDescription>Sign up for news about new features.</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form
          noValidate
          aria-label="Get product updates"
          className="flex flex-col gap-2.5"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            setMessage(EMAIL.test(email.trim()) ? "This is a sample block. Connect your sign-up here." : "");
          }}
        >
          <SidebarInput
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={setEmail}
            isInvalid={error !== undefined}
            errorMessage={error}
          />
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
          <p role="status" className="text-xs text-text-secondary">
            {message}
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
