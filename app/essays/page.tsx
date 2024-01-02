import { PathLike } from "fs";
import { readdir } from "fs/promises";
import Link from "next/link";

type essay = {
	id: number;
	title: string;
	author: string;
	path: PathLike;
};

export default async function Essays() {
	const essayPath = "public/essays";

	try {
		const essays = await getEssays(essayPath);
		if (!essays) return "no essays found";
		return <EssayCard essay={essays[0]} />;
	} catch (err) {
		return "oops.";
	}
}

function EssayCard({ essay }: { essay: essay }) {
	const excerpt: string = "remember to programatically generate an excerpt...";

	return (
		<Link href={`/essays/${essay.id}`} className="block max-w-prose">
			<div className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl max-w-prose">
				<h3 className="text-2xl font-bold text-amber-200">
					{essay.title}
					{" ->"}
				</h3>
				<p>
					<i>by {essay.author}</i>
				</p>
				<br />
				<p>{excerpt}</p>
			</div>
		</Link>
	);
}

export async function getEssays(path: PathLike) {
	try {
		const files = await readdir(path, {
			recursive: true,
		});

		const isEssay = /^(\w+[-\w+]*)\/(\w+[-\w+]*)\.md/;
		const essays: essay[] = files
			.filter((file) => {
				return isEssay.test(file);
			})
			.map((file, index) => {
				const fields = isEssay
					.exec(file)!
					.slice(1)
					.map((field) => {
						return field
							.split("-")
							.map((word) => {
								return word.charAt(0).toUpperCase() + word.slice(1);
							})
							.join(" ");
					});

				return {
					id: index,
					title: fields[1],
					author: fields[0],
					path: path + file,
				};
			});

		return essays;
	} catch (err) {
		console.warn(err);
	}
}
