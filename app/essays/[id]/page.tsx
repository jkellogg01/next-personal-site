import NotFound from "@/app/not-found";
import { getEssays } from "../page";

export default async function SingleEssay({
	params,
}: { params: { id: number } }) {
	const essayPath = "public/essays";
	const thisEssay = (await getEssays(essayPath))?.at(params.id);

	if (!thisEssay) return <NotFound />;

	return "I found an essay!";
}
