import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { blockComponents } from "../../components";
import { builtBlocks, findBlock } from "../../registry";
import { isGalleryEnabled } from "../../_gallery/availability";
import { PreviewTheme } from "../../_gallery/preview-theme";

// One block, full viewport, with no gallery chrome. The gallery shows it in an
// iframe, and the tests load it directly.

export const dynamicParams = false;

export function generateStaticParams() {
  return builtBlocks.map((block) => ({ id: block.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const block = findBlock((await params).id);
  return { title: block ? `${block.title} · Blocks` : "Blocks", robots: { index: false } };
}

export default async function BlockPreviewPage({ params }: Props) {
  if (!isGalleryEnabled()) notFound();
  const { id } = await params;
  const Block = blockComponents[id];
  if (!Block || findBlock(id)?.status !== "built") notFound();
  return (
    <>
      <Suspense>
        <PreviewTheme />
      </Suspense>
      <Block />
    </>
  );
}
