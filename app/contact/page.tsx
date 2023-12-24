"use client";

import { ChangeEvent, useState } from "react";

function TextInput({
  name,
  id,
  placeholder,
  getter,
  setter,
  validation,
}: {
  name?: string;
  id?: string;
  placeholder?: string;
  getter: string;
  setter: (x: string) => any;
  validation?: (x: string) => boolean;
}) {
  const [valid, setValid] = useState(true);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setValid(validateInput(e, input));
    setter(input);
  }

  function validateInput(
    e: ChangeEvent<HTMLInputElement>,
    input: string
  ): boolean {
    if (validation === undefined) {
      return true;
    }
    return validation(input);
  }

  return (
    <input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      value={getter}
      onChange={handleInputChange}
      className={
        valid
          ? "bg-slate-900 p-2 focus-visible:outline-amber-200 w-full rounded-lg placeholder:font-mono autofill:bg-slate-700"
          : "bg-red-900 p-2 focus-visible:outline-slate-700 w-full rounded-lg"
      }
    />
  );
}

export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col gap-4 max-w-prose">
      <div className="bg-slate-800 p-4 rounded-xl max-sm:w-full">
        This will be a blurb about how excited i am to hear from you
      </div>
      <form
        method="POST"
        action=""
        className="p-4 bg-slate-800 rounded-xl max-sm:w-full flex flex-col gap-2"
      >
        <div className="flex flex-row gap-2 max-sm:w-full">
          <TextInput
            name="firstname"
            placeholder="firstname: string"
            getter={firstname}
            setter={setFirstname}
          />
          <TextInput
            name="lastname"
            placeholder="lastname: string"
            getter={lastname}
            setter={setLastname}
          />
        </div>
        <TextInput
          name="company"
          placeholder="company: string | undefined"
          getter={company}
          setter={setCompany}
        />
        <TextInput
          name="email"
          placeholder="email: string"
          getter={email}
          setter={setEmail}
        />
        <textarea
          name="message"
          cols={30}
          rows={10}
          className="bg-slate-900 focus-visible:outline-amber-200 resize-none p-2 placeholder:font-mono rounded-lg"
          placeholder="message: string"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="bg-amber-200 text-slate-900 p-2 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
