"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function Contact() {
    return (
        <div className="flex flex-col gap-4 sm:max-w-lg">
            <div className="bg-slate-800 p-4 rounded-xl max-sm:w-full">
                <h2 className="text-2xl text-amber-200 font-semibold">Hey There!</h2>
                <p>
                    Whether it's a personal website, a portfolio, or a web store for your
                    business, I'm excited to help bring your next web design project to
                    life!
                </p>
            </div>
            <ContactForm />
        </div>
    );
}

function ContactForm() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // using the window object in this scope caused a build error that I can't
    // remember anymore. I'll look into a way to achieve this once everything
    // else is working.
    // const widthSmall = window.matchMedia(`(max-width: 640px)`).matches;

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            firstname,
            lastname,
            company,
            email,
            message,
        };

        const validation = Object.entries(data).map(([key, value]) => {
            switch (key) {
                case "firstname":
                    console.log(`validating ${key}: ${value}`);
                    return /.+/.test(value);
                case "message":
                    console.log(`validating ${key}: ${value}`);
                    return /.+/.test(value);
                case "email":
                    console.log(`validating ${key}: ${value}`);
                    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
                default:
                    console.log(`no validation regex for ${key}`);
                    break;
            }
        });

        if (validation.includes(false)) {
            console.log("one or more form fields did not pass validation");
            return;
        }

        fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(data),
        }).then((res) => {
            console.log(res);
            // This should probably do a redirect but to where, I cannot say
        });
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="p-4 bg-slate-800 rounded-xl max-sm:w-full flex flex-col gap-2"
        >
            <div className="flex flex-row gap-2 max-sm:w-full">
                <TextInput
                    name="firstname"
                    placeholder="first: string"
                    getter={firstname}
                    setter={setFirstname}
                    validation={/.+/}
                />
                <TextInput
                    name="lastname"
                    placeholder="last: string"
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
                validation={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
            />
            <textarea
                name="message"
                cols={30}
                rows={10}
                className="bg-slate-900 focus-visible:outline-amber-200 resize-none p-2 placeholder:font-mono rounded-lg"
                placeholder="message: string | undefined"
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
    );
}

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
    validation?: RegExp;
}) {
    const [valid, setValid] = useState(true);

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const input = e.target.value;
        setValid(validateInput(input));
        setter(input);
    }

    function validateInput(input: string): boolean {
        if (validation === undefined) {
            return true;
        }
        return validation.test(input);
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
