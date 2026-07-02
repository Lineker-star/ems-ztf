import { z } from "zod";

export const CONTACT_MESSAGE_MAX_LENGTH = 500;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Veuillez indiquer votre nom complet."),
  email: z.string().email("Veuillez indiquer une adresse e-mail valide."),
  subject: z.string().min(3, "Veuillez indiquer un sujet."),
  message: z.string().max(CONTACT_MESSAGE_MAX_LENGTH).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
