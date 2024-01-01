import * as React from "react";

export interface ContactFormData {
  firstname: string;
  lastname: string;
  company?: string;
  email: string;
  message: string;
}

export function EmailTemplate({
  firstname,
  lastname,
  company,
  email,
  message,
}: ContactFormData) {
  return (
    <html>
      <h1>
        New Contact from {firstname} {lastname}
      </h1>
      {company && <p>company: {company}</p>}
      <p>email: {email}</p>
      <p>
        message: <blockquote>{message}</blockquote>
      </p>
    </html>
  );
}
