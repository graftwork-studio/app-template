"use client";

import {
  AccountAccess,
  CoverArt,
  EmptyConnectBank,
  EmptyDistributeTrack,
  EmptyExploreCatalog,
  FrontDoor,
  KitchenIsland,
  LoadingCard,
  PowerUsage,
  Preferences,
  QrConnect,
  RollerShades,
  SidebarNavAccount,
  SidebarNavOverview,
  SocialLinks,
  SyncingState,
} from "./cards-home";
import {
  BuyInvestment,
  CardOverview,
  ClaimableBalance,
  ContributionHistory,
  DividendIncome,
  Faq,
  Holdings,
  IndexInvesting,
  NewMilestone,
  NotificationSettings,
  Payments,
  PayoutThreshold,
  ReceivingMethod,
  RecentTransactions,
  SavingsProgress,
  SavingsTargets,
  StockPerformance,
  TransferFunds,
  UpcomingPayments,
} from "./cards-money";

/*
 * preview-02: a second wall of example cards, mostly money, music and home controls.
 * Rebuilt from shadcn/ui's preview-02 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Upstream lays the cards out on a fixed 3000px canvas that scrolls sideways. Here they flow into as many
 * 20rem columns as fit, in upstream's order, down to one column at 320px. Upstream's two-card groups
 * (savings targets, sidebars) are separate cards here so each fits one column.
 * Sample only: the accounts, funds, people and figures are placeholders to replace.
 */

const cards = [
  ContributionHistory,
  EmptyDistributeTrack,
  QrConnect,
  DividendIncome,
  IndexInvesting,
  SyncingState,
  PayoutThreshold,
  ClaimableBalance,
  Preferences,
  SavingsProgress,
  KitchenIsland,
  SavingsTargets,
  BuyInvestment,
  RecentTransactions,
  SidebarNavOverview,
  SidebarNavAccount,
  Faq,
  Payments,
  FrontDoor,
  Holdings,
  AccountAccess,
  CardOverview,
  TransferFunds,
  CoverArt,
  LoadingCard,
  ReceivingMethod,
  PowerUsage,
  EmptyConnectBank,
  UpcomingPayments,
  RollerShades,
  StockPerformance,
  EmptyExploreCatalog,
  NewMilestone,
  SocialLinks,
  NotificationSettings,
];

export default function Preview02() {
  return (
    <main className="min-h-svh bg-surface-subtle p-4 md:p-6">
      <h1 className="sr-only">Component preview 2</h1>
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
