"use server";

import { makeListPictures } from "~/generators";

export async function GET() {
  const service = makeListPictures();

  return new Response(JSON.stringify(await service.run()));
}
