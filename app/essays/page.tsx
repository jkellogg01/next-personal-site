import { PathLike } from "fs";
import { readFile } from "fs/promises";
import Link from "next/link";
import { getEssays, essay } from "./utils";

export default async function Essays() {
	const essayPath = "public/essays";

	let essays;

	try {
		essays = await getEssays(essayPath);
		if (!essays) return "Had trouble finding any essays...";
	} catch (err) {
		return "oops.";
	}

	if (essays.length === 0)
		return (
			<div className="max-w-prose bg-slate-800 p-4 rounded-xl max-sm:w-full">
				<h3 className="text-2xl font-bold text-amber-200">Nothing yet...</h3>
				<p>
					Listen, man. This essay writing stuff is hard work. Check back another
					time, maybe I'll have some goodies for you. Kapisce?
				</p>
			</div>
		);

	return (
		<div className="max-w-prose">
			{essays.map((essay) => (
				<EssayCard essay={essay} key={essay.id} />
			))}
		</div>
	);
}

async function EssayCard({ essay }: { essay: essay }) {
	return (
		<Link href={`/essays/${essay.id}`} className="block max-sm:w-full">
			<div className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl max-sm:w-full">
				<h3 className="text-2xl font-bold text-amber-200">
					{essay.title}
					{" ->"}
				</h3>
				<p>
					<i>by {essay.author}</i>
				</p>
				<br />
				<Excerpt path={essay.path} />
			</div>
		</Link>
	);
}

async function Excerpt({ path }: { path: PathLike }) {
	const words = (await readFile(path, "utf-8")).slice(0, 255).split(/\n| /);

	const fileText: string = words.reduce((acc, word) => {
		const next = `${acc} ${word}`;
		return next.length > 175 ? acc : next;
	});

	return (
		<p>
			{fileText} <span className="text-amber-200 underline"> read more...</span>
		</p>
	);
}
