"use client";

import { TrafficChannels, Analytics, BrowserShare, SleepReport, Usage, Visitors, WeeklyFitness } from "./cards-charts";
import {
  BookAppointment,
  ContributionsActivity,
  FeedbackForm,
  InviteTeam,
  Profile,
  ReportBug,
  ShippingAddress,
} from "./cards-forms";
import {
  ActivateAssistant,
  AnomalyAlert,
  Contributors,
  EnvironmentVariables,
  FileUpload,
  IconPreviewGrid,
  Invoice,
  LiveWaveform,
  NoTeamMembers,
  NotFound,
  Observability,
  Shortcuts,
  SkeletonLoading,
  StyleOverview,
  TypographySpecimen,
  UIElements,
  Workspaces,
} from "./cards-misc";

/*
 * preview: a wall of example cards that shows the theme at a glance.
 * Rebuilt from shadcn/ui's preview block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Upstream lays the cards out on a fixed 3000px canvas that scrolls sideways. Here they flow into as many
 * 20rem columns as fit, in upstream's order, down to one column at 320px.
 * Sample only: the copy, people and figures are placeholders to replace.
 */

const cards = [
  StyleOverview,
  TypographySpecimen,
  Workspaces,
  Invoice,
  IconPreviewGrid,
  UIElements,
  Observability,
  ShippingAddress,
  EnvironmentVariables,
  TrafficChannels,
  InviteTeam,
  ActivateAssistant,
  SkeletonLoading,
  BrowserShare,
  NoTeamMembers,
  ReportBug,
  Contributors,
  FeedbackForm,
  BookAppointment,
  SleepReport,
  Profile,
  WeeklyFitness,
  FileUpload,
  Analytics,
  Usage,
  Shortcuts,
  AnomalyAlert,
  LiveWaveform,
  Visitors,
  ContributionsActivity,
  NotFound,
];

export default function Preview() {
  return (
    <main className="min-h-svh bg-surface-subtle p-4 md:p-6">
      <h1 className="sr-only">Component preview</h1>
      <div className="columns-[20rem] gap-4 md:gap-6">
        {cards.map((Card, index) => (
          // The list never changes, so its order is a stable key.
          <div key={index} className="mb-4 break-inside-avoid md:mb-6">
            <Card />
          </div>
        ))}
      </div>
    </main>
  );
}
