// Minimal dictionary-based i18n scaffold.
//
// French is the only locale wired into routing today. The structure below
// keeps every user-facing UI string in one place so an `en` dictionary can be
// added later without touching components — just add the `en` key to each
// entry and wire a locale switcher. We intentionally avoid next-intl /
// next-i18next so the static export stays simple (no extra build step,
// no locale-prefixed routing required).

export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";

export const dictionary = {
  fr: {
    cta: {
      enroll: "S'inscrire",
      learnMore: "En savoir plus",
      joinNow: "Rejoignez-nous",
      readMore: "Lire la suite",
      viewProgram: "Voir le programme",
      send: "Envoyer",
      sending: "Envoi en cours...",
      download: "Télécharger",
    },
    form: {
      name: "Nom",
      email: "E-mail",
      subject: "Sujet",
      message: "Message",
      messageOptional: "Message (optionnel)",
      success: "Votre message a bien été envoyé. Nous vous répondrons rapidement.",
      error: "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.",
    },
    common: {
      students: "étudiants",
      duration: "Durée",
      instructor: "Enseignant référent",
      relatedPrograms: "Programmes liés",
      allPrograms: "Toutes les filières",
      backToBlog: "Retour au blog",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  en: {
    cta: {
      enroll: "Enroll Now",
      learnMore: "Learn More",
      joinNow: "Join Us Now",
      readMore: "Read More",
      viewProgram: "View Program",
      send: "Send",
      sending: "Sending...",
      download: "Download",
    },
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      messageOptional: "Message (optional)",
      success: "Your message has been sent. We'll get back to you shortly.",
      error: "Something went wrong. Please try again or reach us by phone.",
    },
    common: {
      students: "students",
      duration: "Duration",
      instructor: "Lead Instructor",
      relatedPrograms: "Related Programs",
      allPrograms: "All Programs",
      backToBlog: "Back to blog",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const satisfies Record<Locale, Record<string, Record<string, string>>>;

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionary[locale];
}
