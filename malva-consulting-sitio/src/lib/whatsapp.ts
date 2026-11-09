// WhatsApp contact for the consultancy. Mexican number: country code 52 + 10 digits.
export const WHATSAPP_NUMBER = "525545659034";
export const WHATSAPP_DISPLAY = "55 4565 9034";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Magdalena, me interesa conocer más sobre MALVA Consulting y sus servicios de Desarrollo Organizacional y Recursos Humanos.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
