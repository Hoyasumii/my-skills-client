import { CopyButton } from "@/components/CopyButton";
import { Button } from "@/components/ui";
import { Copy } from "lucide-react";
import Link from "next/link";

export default async function Home({
	searchParams,
}: { searchParams: Promise<{ icons: string }> }) {
	const allIcons: Array<string> = await (
		await fetch(`${process.env.HOST}/api/list`)
	).json();

	const { icons } = await searchParams;

	return (
		<>
			<div className="grid grid-cols-6 gap-4">
				{allIcons.map((icon, index) => (
					<Link
						href={`${process.env.HOST}/?icons=${icons ? `${icons},${icon}` : icon}`}
						key={`img-${index.toString()}`}
						className="transition-all duration-300 cursor-pointer hover:scale-95 active:scale-90"
					>
						<img
							src={`${process.env.HOST}/api/?icons=${icon}&size=64`}
							alt={icon}
						/>
					</Link>
				))}
			</div>
			{icons && (
				<CopyButton host={process.env.HOST} icons={icons} />
			)}
		</>
	);
}
