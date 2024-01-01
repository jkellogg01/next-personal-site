import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const data = JSON.parse(await req.text());

		const opts: CreateEmailOptions = {
			from: "<contact@jkellogg.dev>",
			to: ["kellogg.20.joshua@gmail.com"],
			subject: "New Contact Form Submitted",
			react: EmailTemplate(data),
		};

		const emailResp = await resend.emails.send(opts);

		return Response.json(emailResp);
	} catch (err) {
		return Response.json({ err });
	}
}
