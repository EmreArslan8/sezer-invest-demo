"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "email" | "message", string>>;
  values?: Record<string, string>;
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Lütfen adınızı girin.";
  if (!/^[+\d\s()-]{10,}$/.test(phone)) errors.phone = "Geçerli bir telefon numarası girin.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Geçerli bir e-posta girin.";
  if (message.length < 10) errors.message = "Mesajınız en az 10 karakter olmalı.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Lütfen işaretli alanları kontrol edin.",
      errors,
      values: { name, phone, email, subject, message },
    };
  }

  // Demo: Canlıya geçişte burada e-posta (Resend / SMTP) veya CRM entegrasyonu yapılacak.
  console.log("[iletişim formu]", { name, phone, email, subject, message });

  return {
    status: "success",
    message: "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
  };
}
