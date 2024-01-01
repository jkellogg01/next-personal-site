import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const data = JSON.parse(await req.text());
		console.log("recieved data from contact form");
		console.log(data);

		const opts: CreateEmailOptions = {
			from: "contact@jkellogg.dev",
			to: ["kellogg.20.joshua@gmail.com"],
			subject: "New Contact Form Submitted",
			react: EmailTemplate(data),
		};

		const { data: resp, error } = await resend.emails.send(opts);

		if (error) {
            console.error(error);
			return Response.json(error, { status: 500 });
		}
        console.log(resp)
		return Response.json(resp, { status: 200 });
	} catch (error) {
        console.error(error)
		return Response.json(error, { status: 500 });
	}
}
