/**
 * The block gallery is on in development and in the test build (`pnpm build:test`),
 * and returns 404 in a production build unless GRAFTWORK_BLOCKS_GALLERY=enabled
 * is set when building.
 */
export const BLOCKS_GALLERY_ENV = "GRAFTWORK_BLOCKS_GALLERY";

export function isGalleryEnabled() {
  return process.env.NODE_ENV !== "production" || process.env[BLOCKS_GALLERY_ENV] === "enabled";
}
