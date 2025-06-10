import type { Metadata } from "next";
import { headers } from "next/headers";

import "./globals.css";

import { Body, Button, HTML, Main, Navbar, ToggleTheme } from "@/components/ui";

import { LogoDark, LogoLight } from "@/components/svg";
import { Suspense } from "react";
import Link from "next/link";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Suspense>
			<HTML>
				<Body>
					<Navbar.Root DarkLogo={LogoDark} LightLogo={LogoLight}>
						<div className="flex-1 flex flex-row-reverse items-center justify-start gap-2">
							<ToggleTheme />
						</div>
					</Navbar.Root>
					<Main className="">{children}</Main>
				</Body>
			</HTML>
		</Suspense>
	);
}
