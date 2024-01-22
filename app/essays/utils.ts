import { PathLike } from "fs";
import { readdir } from "fs/promises";

export type essay = {
	id: number;
	title: string;
	author: string;
	path: PathLike;
};

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
					path: path + "/" + file,
				};
			});

		return essays;
	} catch (err) {
		console.warn(err);
	}
}
