"use client";

import { Copy } from "lucide-react";
import { Button } from "./ui";

export function CopyButton({ icons, host }: { icons: string; host: string }) {
	return (
		<Button
			className="absolute bottom-4 right-4 scale-110"
			onClick={() => {
				navigator.clipboard.writeText(`${host}/api/?icons=${icons}&size=64`);
			}}
		>
			<Copy />
		</Button>
	);
}
