"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/schema";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

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
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:ring-2";
  const inputNormal = "border-ink-200 focus:border-primary-500 focus:ring-primary-200";
  const inputError = "border-red-400 focus:border-red-500 focus:ring-red-100";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-green-50 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="mt-4 font-display text-lg font-bold text-green-800">Message envoyé !</h4>
        <p className="mt-2 text-sm text-green-700">
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-green-300 bg-white px-5 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-800">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom"
            className={cn(inputBase, errors.name ? inputError : inputNormal)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-800">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="votre@email.com"
            className={cn(inputBase, errors.email ? inputError : inputNormal)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-ink-800">
          Sujet <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Objet de votre message"
          className={cn(inputBase, errors.subject ? inputError : inputNormal)}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-800">
          Message <span className="text-xs font-normal text-ink-400">(optionnel)</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Écrivez votre message ici..."
          className={cn(inputBase, inputNormal, "resize-none")}
          {...register("message")}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-70"
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
