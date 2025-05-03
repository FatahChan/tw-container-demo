import { Link } from "@tanstack/react-router";
import { Github, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
	const [stars, setStars] = useState<number | null>(null);

	useEffect(() => {
		fetch("https://api.github.com/repos/FatahChan/tw-container-demo")
			.then((res) => res.json())
			.then((data) => setStars(data.stargazers_count))
			.catch(console.error);
	}, []);

	return (
		<header className="p-2 flex gap-2 bg-white text-black justify-between items-center">
			<nav className="flex flex-row gap-4">
				<div className="px-2 font-bold">
					<Link to="/">Container Demo</Link>
				</div>
				<div className="px-2 font-bold">
					<Link to="/responsive-grid">Responsive Grid</Link>
				</div>
			</nav>
			<Button
				variant="outline"
				size="sm"
				className="flex items-center gap-2 hover:bg-muted"
				asChild
			>
				<a
					href="https://github.com/FatahChan/tw-container-demo"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2"
				>
					<Github className="h-4 w-4" />
					<span>Star</span>
					<div className="w-px h-4 bg-border mx-1" />
					<span className="font-semibold flex gap-1 justify-center items-center"><Star/>{stars ?? "–"}</span>
				</a>
			</Button>
		</header>
	);
}
