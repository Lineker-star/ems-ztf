"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Nouvelle inscription à la newsletter EMS-ZTF",
          email,
          message: `Nouvelle inscription newsletter : ${email}`,
          to: siteConfig.emails.contactForm,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Newsletter</h3>
      <p className="mt-2 text-sm text-ink-400">Recevez nos actualités et dates d&apos;inscription.</p>
      <form onSubmit={onSubmit} className="mt-4 flex gap-2">
        <input
          type="email"
          required
          placeholder="Votre e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-glow min-h-[44px] w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-ink-500 focus:border-primary-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex-shrink-0 rounded-full bg-primary-600 px-5 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-primary-700 active:scale-[0.97] disabled:opacity-60"
        >
          S&apos;abonner
        </button>
      </form>
      {status === "success" && (
        <p role="status" className="mt-2 text-xs font-medium text-emerald-400">Merci ! Vous êtes inscrit(e).</p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-2 text-xs font-medium text-red-400">Erreur — réessayez plus tard.</p>
      )}
    </div>
  );
}
