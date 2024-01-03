import { PathLike } from "fs";
import { readdir, readFile } from "fs/promises";
import Link from "next/link";

type essay = {
    id: number;
    title: string;
    author: string;
    path: PathLike;
};

export default async function Essays() {
    const essayPath = "public/essays";

    let essays;

    try {
        essays = await getEssays(essayPath);
        if (!essays) return "no essays found";
    } catch (err) {
        return "oops.";
    }

    return (
        <div>
            {essays.map((essay) => (
                <EssayCard essay={essay} key={essay.id} />
            ))}
        </div>
    );
}

async function EssayCard({ essay }: { essay: essay }) {
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
                <Excerpt path={essay.path} />
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
                    path: path + "/" + file,
                };
            });

        return essays;
    } catch (err) {
        console.warn(err);
    }
}

export async function Excerpt({ path }: { path: PathLike }) {
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
