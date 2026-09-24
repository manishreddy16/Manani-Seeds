import { siteConfig } from "@/data/site";

export function whatsappLink(customMessage?: string) {
  if (!customMessage) return `https://wa.me/${siteConfig.whatsapp.number}`;

  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(customMessage)}`;
}
