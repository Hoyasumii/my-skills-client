"use server";

import { makeGettingPicture } from "~/generators";
import { GetPictureModel } from "~/models/pictures";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const service = makeGettingPicture();

	const searchParams = Object.fromEntries(
		request.nextUrl.searchParams.entries(),
	);

	const content = GetPictureModel.safeParse(searchParams).data;

	if (!content) return;

	return new Response(new Uint8Array(await service.run(content)), {
		status: 200,
		headers: {
			"Content-Type": "image/webp",
		},
	});
}
