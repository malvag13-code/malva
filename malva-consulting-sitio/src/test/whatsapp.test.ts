import { describe, expect, it } from "vitest";

import { whatsappLink } from "@/lib/whatsapp";

describe("WhatsApp contact link", () => {
  it("opens a chat with 55 4565 9034 (Mexico, +52)", () => {
    expect(whatsappLink("Hola")).toBe("https://wa.me/525545659034?text=Hola");
  });
});
