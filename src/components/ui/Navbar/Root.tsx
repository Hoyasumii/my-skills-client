import Link from "next/link";
import type { RootPropertiesInterface } from "./types";

export function Root({ children, DarkLogo, LightLogo }: RootPropertiesInterface) {
	return (
		<header className="px-4 py-3 bg-stone-50 dark:bg-stone-950 sticky top-0 flex items-stretch border-b-[0.5px] border-stone-300 dark:border-stone-800 text-inherit w-full z-20">
			<Link
				href={"/"}
				className="text-left border-r-[0.5px] pe-4 border-stone-300 dark:border-stone-700"
			>
				<DarkLogo className="not-dark:hidden size-8 opacity-50 rounded-full" />
				<LightLogo className="dark:hidden size-8 opacity-75 rounded-full" />
			</Link>
			<nav className="flex min-h-full divide-x-[0.5px] divide-stone-300 dark:divide-stone-800 *:px-4 border-r-[0.5px] border-stone-300 dark:border-stone-800 flex-1">
				{children}
			</nav>
		</header>
	);
}
