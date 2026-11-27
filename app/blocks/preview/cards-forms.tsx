"use client";

import {
  Alert,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  InputGroup,
  NativeSelect,
  NativeSelectOption,
  Select,
  SelectItem,
  Separator,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
} from "@graftwork/ui";
import { CopyIcon, PlusIcon } from "lucide-react";

/** Form cards. Sample only: replace the copy, people and options with your own. */

export function BookAppointment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book an appointment</CardTitle>
        <CardDescription>Dr Sam Patel · Cardiology</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p id="appointment-slots" className="text-sm font-medium">
            Available on 18 March 2026
          </p>
          <ToggleGroup aria-labelledby="appointment-slots" defaultSelectedKeys={["0900"]} variant="secondary" className="flex-wrap">
            {[
              ["0900", "09:00"],
              ["1030", "10:30"],
              ["1100", "11:00"],
              ["1330", "13:30"],
            ].map(([id, time]) => (
              <ToggleGroupItem key={id} id={id}>
                {time}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <Alert title="New patient?">Please arrive 15 minutes early.</Alert>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book appointment</Button>
      </CardFooter>
    </Card>
  );
}

export function ContributionsActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contributions and activity</CardTitle>
        <CardDescription>Manage who can see your contributions and activity.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <Checkbox aria-describedby="activity-private-hint">Make profile private and hide activity</Checkbox>
        <p id="activity-private-hint" className="pl-6 text-sm text-text-secondary">
          Hides your contributions and activity from your profile, and from followers, stars, feeds and leaderboards.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
}

const topics = [
  ["ai", "AI"],
  ["accounts", "Accounts and access"],
  ["billing", "Billing"],
  ["cdn", "CDN (firewall, caching)"],
  ["ci-cd", "CI/CD (builds, deployments, environment variables)"],
  ["dashboard", "Dashboard (navigation, interface issues)"],
  ["domains", "Domains"],
  ["frameworks", "Frameworks"],
  ["integrations", "Integrations"],
  ["observability", "Observability (logs, monitoring)"],
  ["storage", "Storage"],
] as const;

export function FeedbackForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send feedback</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <NativeSelect label="Topic" defaultValue="">
          <NativeSelectOption value="">Select a topic</NativeSelectOption>
          {topics.map(([value, label]) => (
            <NativeSelectOption key={value} value={value}>
              {label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        <Textarea label="Feedback" placeholder="Your feedback helps us improve…" />
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export function Profile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Manage your profile information.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input
          label="Name"
          placeholder="Alex"
          description="Your name may appear where you contribute or are mentioned. You can remove it at any time."
        />
        <NativeSelect label="Public email" defaultValue="alex" description="Manage verified email addresses in your email settings.">
          <NativeSelectOption value="alex">alex@example.com</NativeSelectOption>
          <NativeSelectOption value="work">work@example.com</NativeSelectOption>
        </NativeSelect>
        <Textarea
          label="Bio"
          placeholder="Tell us a little about yourself"
          description="You can @mention other people and teams to link to them."
        />
      </CardContent>
      <CardFooter>
        <Button>Save profile</Button>
      </CardFooter>
    </Card>
  );
}

export function InviteTeam() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite your team</CardTitle>
        <CardDescription>Add members to your workspace.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {[
          { email: "alex@example.com", role: "editor" },
          { email: "sam@example.com", role: "viewer" },
        ].map((invite, index) => (
          <div key={invite.email} className="grid grid-cols-[1fr_7rem] items-end gap-2">
            <Input label={`Email ${index + 1}`} type="email" defaultValue={invite.email} />
            <Select label={`Role ${index + 1}`} defaultSelectedKey={invite.role}>
              <SelectItem id="admin">Admin</SelectItem>
              <SelectItem id="editor">Editor</SelectItem>
              <SelectItem id="viewer">Viewer</SelectItem>
            </Select>
          </div>
        ))}
        <Button variant="secondary">
          <PlusIcon aria-hidden />
          Add another
        </Button>
        <Separator />
        <InputGroup
          label="Or share an invite link"
          defaultValue="https://example.com/invite/x8f2k"
          isReadOnly
          endAddon={
            <Button variant="ghost" size="sm" aria-label="Copy invite link">
              <CopyIcon aria-hidden />
            </Button>
          }
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send invites</Button>
      </CardFooter>
    </Card>
  );
}

export function ReportBug() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report a bug</CardTitle>
        <CardDescription>Help us fix issues faster.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input label="Title" placeholder="A short description of the issue" />
        <div className="grid grid-cols-2 gap-3">
          <Select label="Severity" defaultSelectedKey="medium">
            <SelectItem id="critical">Critical</SelectItem>
            <SelectItem id="high">High</SelectItem>
            <SelectItem id="medium">Medium</SelectItem>
            <SelectItem id="low">Low</SelectItem>
          </Select>
          <Select label="Area" defaultSelectedKey="dashboard">
            <SelectItem id="dashboard">Dashboard</SelectItem>
            <SelectItem id="auth">Sign-in</SelectItem>
            <SelectItem id="api">API</SelectItem>
            <SelectItem id="billing">Billing</SelectItem>
          </Select>
        </div>
        <Textarea label="Steps to reproduce" placeholder={"1. Go to…\n2. Select…\n3. See…"} rows={4} />
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="secondary">Attach file</Button>
        <Button>Submit bug</Button>
      </CardFooter>
    </Card>
  );
}

export function ShippingAddress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery address</CardTitle>
        <CardDescription>Where should we deliver?</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input label="Street address" placeholder="1 High Street" autoComplete="address-line1" />
        <Input label="Flat or suite" placeholder="Flat 4B" autoComplete="address-line2" />
        <div className="grid grid-cols-2 gap-3">
          <Input label="Town or city" placeholder="Manchester" autoComplete="address-level2" />
          <Input label="Postcode" placeholder="M1 1AA" autoComplete="postal-code" />
        </div>
        <Select label="Country" defaultSelectedKey="gb">
          <SelectItem id="gb">United Kingdom</SelectItem>
          <SelectItem id="ie">Ireland</SelectItem>
          <SelectItem id="fr">France</SelectItem>
        </Select>
        <Checkbox defaultSelected>Save as my default address</Checkbox>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" size="sm">
          Cancel
        </Button>
        <Button size="sm" className="ml-auto">
          Save address
        </Button>
      </CardFooter>
    </Card>
  );
}
