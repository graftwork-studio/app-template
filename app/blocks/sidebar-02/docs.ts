export type DocsSection = { title: string; items: { title: string; isActive?: boolean }[] };

/** Sample navigation. Replace it with your own pages. */
export const docs: DocsSection[] = [
  { title: "Getting started", items: [{ title: "Installation" }, { title: "Project structure" }] },
  {
    title: "Building your app",
    items: [
      { title: "Routing" },
      { title: "Data fetching", isActive: true },
      { title: "Rendering" },
      { title: "Caching" },
      { title: "Styling" },
      { title: "Optimising" },
      { title: "Configuring" },
      { title: "Testing" },
      { title: "Authentication" },
      { title: "Deploying" },
      { title: "Upgrading" },
      { title: "Examples" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "Components" },
      { title: "File conventions" },
      { title: "Functions" },
      { title: "Configuration options" },
      { title: "Command line" },
      { title: "Runtime" },
    ],
  },
  {
    title: "Architecture",
    items: [
      { title: "Accessibility" },
      { title: "Live reload" },
      { title: "Compiler" },
      { title: "Supported browsers" },
      { title: "Bundler" },
    ],
  },
];

export const slug = (title: string) => "#" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
