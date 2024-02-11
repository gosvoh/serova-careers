import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";
import fs from "node:fs/promises";

export async function GET(
  _: NextRequest,
  { params }: { params: { file: string } }
) {
  try {
    const file = await fs.readFile(`./uploads/${params.file}`);
    return new NextResponse(file);
  } catch {
    notFound();
  }
}
