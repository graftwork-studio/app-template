import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isGalleryEnabled } from "../_gallery/availability";
import { BlockGallery } from "../_gallery/block-gallery";

export const metadata: Metadata = { title: "Blocks", robots: { index: false } };

export default function BlocksPage() {
  if (!isGalleryEnabled()) notFound();
  return (
    <>
      <section className="prose flex flex-col gap-2">
        <h1 className="text-3xl leading-heading font-semibold">Blocks</h1>
        <p className="text-text-secondary">
          Whole page layouts to copy and edit, built from the design system. Each block’s source is in{" "}
          <code>app/blocks/&lt;id&gt;</code>, and its Figma component has the same name in the Graftwork Blocks
          library. See <code>BLOCKS.md</code> to add one.
        </p>
      </section>
      <BlockGallery />
    </>
  );
}
