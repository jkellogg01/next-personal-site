import { EmailTemplate, ContactFormData } from '@/components/email-template';
import { Resend } from 'resend';
import { CreateEmailOptions } from 'resend/build/src/emails/interfaces';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const reader = req.body!.getReader();
  const dataMap = new Map<string, string>;
  try {
    const data = (await reader.read()).value?.toLocaleString()
    data?.split(/-{6}WebKitFormBoundary.*/).forEach((block) => {
      const lines = block.split("\r\n")
      if (lines.length < 4) {
        return
      }
      const dataName = /^.*name=\"(\w+)\"/
      const key = dataName.exec(lines[1])![1]
      const val = lines[3]

      dataMap.set(key, val);
    })

    const bodyData: ContactFormData = {
      firstname: dataMap.get("firstname")!,
      lastname: dataMap.get("lastname")!,
      company: dataMap.get("company"),
      email: dataMap.get("email")!,
      message: dataMap.get("message")!,
    };
    
    const opts: CreateEmailOptions = {
      from: '<contact@jkellogg.dev>',
      to: ['kellogg.20.joshua@gmail.com'],
      subject: 'New Contact Form Submitted',
      react: EmailTemplate(bodyData)
    }

    const emailResp = await resend.emails.send(opts)
  
    return Response.json(emailResp)
  } catch (err) {
    return Response.json({err})
  }
}