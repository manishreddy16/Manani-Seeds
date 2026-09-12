import { siteConfig } from "@/data/site";

export function whatsappLink(customMessage?: string) {
  const message = encodeURIComponent(
    customMessage ?? siteConfig.whatsapp.defaultMessage
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`;
}
