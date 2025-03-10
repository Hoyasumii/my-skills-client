"use server";

import { makeGettingPicture } from "./core/src/generators";
import { GetPictureModel } from "./core/src/models/pictures";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const service = makeGettingPicture();

  const searchParams = Object.fromEntries(
    request.nextUrl.searchParams.entries()
  );

  const content = GetPictureModel.safeParse(searchParams).data;

  return new Response(await service.run(content!));
}
