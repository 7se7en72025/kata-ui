import { loadRegistryItem } from "shadcn/registry";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const item = await loadRegistryItem(slug);
    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
