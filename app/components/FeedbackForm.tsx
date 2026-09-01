"use client";

import { FormEvent, useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwjTA0V7NaT7tRcwlLxQ1s1anvzP2JTdYnU4Y3p3B_daES6wYICIm7t36501bBV50sI3Q/exec"; // Paste your URL here

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#FF2E9E]";
const PRESS_SUBMIT =
  "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform duration-100 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";
const FIELD =
  "w-full border-4 border-black bg-[#EDE8DC] px-3 py-2.5 text-sm text-black placeholder:text-black/40 outline-none focus:bg-white sm:text-base " +
  FOCUS_RING;

export default function FeedbackForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Bypasses browser CORS checks for Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border-4 border-black bg-[#FFE600] p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-xl font-bold uppercase">Feedback logged.</p>
        <p className="mt-2 text-sm">Your report has been piped to the beta tracker.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 border-2 border-black bg-white px-4 py-2 text-xs font-bold hover:bg-black hover:text-white"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 sm:py-10"
    >
      <p className="text-xs text-black/50 sm:col-span-2 sm:text-sm">
        This build is under active development. Every field below maps to a row in the beta tracker: timestamp, name, email, rating, message.
      </p>

      <div>
        <label htmlFor="fb-name" className="text-xs font-bold sm:text-sm">
          name:
        </label>
        <input
          id="fb-name"
          name="name"
          type="text"
          required
          placeholder="jane_dev"
          className={`mt-2 ${FIELD}`}
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="fb-email" className="text-xs font-bold sm:text-sm">
          email:
        </label>
        <input
          id="fb-email"
          name="email"
          type="email"
          required
          placeholder="jane@university.edu"
          className={`mt-2 ${FIELD}`}
          disabled={status === "loading"}
        />
      </div>

      <fieldset className="sm:col-span-2">
        <legend className="text-xs font-bold sm:text-sm">rating: 1–5</legend>
        <div className="mt-2 flex gap-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="relative">
              <input
                type="radio"
                name="rating"
                value={n}
                required
                className="peer sr-only"
                disabled={status === "loading"}
              />
              <span
                className={`flex h-12 w-12 cursor-pointer items-center justify-center border-4 border-black bg-[#EDE8DC] text-sm font-bold transition-colors peer-checked:bg-[#FFE600] peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#FF2E9E] sm:h-14 sm:w-14 sm:text-base`}
              >
                {n}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="fb-message" className="text-xs font-bold sm:text-sm">
          message / bug report:
        </label>
        <textarea
          id="fb-message"
          name="message"
          required
          rows={5}
          placeholder="Steps to reproduce, what you expected, what happened instead..."
          className={`mt-2 resize-y ${FIELD}`}
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <p className="font-bold text-red-600 sm:col-span-2">
          Failed to send. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={`border-4 border-black bg-[#FFE600] px-8 py-6 text-lg font-bold sm:col-span-2 sm:text-xl ${PRESS_SUBMIT} ${FOCUS_RING} disabled:opacity-50`}
      >
        {status === "loading" ? "Executing..." : "Submit feedback"}
      </button>
    </form>
  );
}