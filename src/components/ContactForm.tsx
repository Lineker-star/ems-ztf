"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { contactFormSchema, CONTACT_MESSAGE_MAX_LENGTH, type ContactFormValues } from "@/lib/schema";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

function fireConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#0ea5e9", "#10b981", "#f59e0b"],
  });
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message || "(aucun message)",
          to: siteConfig.emails.contactForm,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        fireConfetti();
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldWrap = "relative";
  const inputBase =
    "input-glow peer w-full rounded-xl border bg-white px-4 pb-2.5 pt-5 text-sm text-ink-900 transition-colors focus:outline-none dark:bg-ink-900 dark:text-white";
  const inputNormal = "border-ink-200 focus:border-primary-500 dark:border-ink-700";
  const inputError = "border-red-400 focus:border-red-500";
  const labelBase =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-400 transition-all duration-200 peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-primary-600 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px]";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-green-50 p-10 text-center dark:bg-green-950/40">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="mt-4 font-display text-lg font-bold text-green-800 dark:text-green-300">Message envoyé !</h4>
        <p className="mt-2 text-sm text-green-700 dark:text-green-400">
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 min-h-[44px] rounded-full border border-green-300 bg-white px-5 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50 dark:border-green-800 dark:bg-transparent dark:text-green-300 dark:hover:bg-green-950"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className={fieldWrap}>
          <input
            id="name"
            type="text"
            placeholder=" "
            className={cn(inputBase, errors.name ? inputError : inputNormal)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <label htmlFor="name" className={labelBase}>
            Nom complet <span className="text-red-500">*</span>
          </label>
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className={fieldWrap}>
          <input
            id="email"
            type="email"
            placeholder=" "
            className={cn(inputBase, errors.email ? inputError : inputNormal)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <label htmlFor="email" className={labelBase}>
            E-mail <span className="text-red-500">*</span>
          </label>
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className={fieldWrap}>
        <input
          id="subject"
          type="text"
          placeholder=" "
          className={cn(inputBase, errors.subject ? inputError : inputNormal)}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        <label htmlFor="subject" className={labelBase}>
          Sujet <span className="text-red-500">*</span>
        </label>
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div className={fieldWrap}>
        <textarea
          id="message"
          rows={5}
          placeholder=" "
          maxLength={CONTACT_MESSAGE_MAX_LENGTH}
          className={cn(inputBase, inputNormal, "resize-none pt-5")}
          {...register("message")}
        />
        <label
          htmlFor="message"
          className="pointer-events-none absolute left-4 top-4 text-sm text-ink-400 transition-all duration-200 peer-focus:top-2.5 peer-focus:text-[11px] peer-focus:text-primary-600 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[11px]"
        >
          Message <span className="text-xs font-normal text-ink-400">(optionnel)</span>
        </label>
        <p className="mt-1.5 text-right text-xs text-ink-400">
          {messageLength}/{CONTACT_MESSAGE_MAX_LENGTH}
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-400">
          Erreur — réessayez ou contactez-nous directement par téléphone.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100",
          status === "error" ? "bg-red-600 hover:bg-red-700" : "bg-primary-600 hover:bg-primary-700"
        )}
      >
        {status === "submitting" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}
