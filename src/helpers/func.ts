import path from "path";

export function validateEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function firstCharToUpperCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertToSentenceCase(str: string): string {
  return str
    .split(" ")
    .map((word) => firstCharToUpperCase(word))
    .join(" ");
}

export function convertToSnakeCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("_");
}

export function renderTemplateString(
  template: string,
  data: Record<string, any>
): string {
  return template.replace(/{{([^}]+)}}/g, (_, key: string) => data[key]);
}

export function extractAttachments(attachments: Array<string>): Array<{
  filename: string;
  path: string;
}> {
  return attachments.map((attachment) => {
    return {
      filename: path.basename(attachment),
      path: attachment,
    };
  });
}

export function parseNigerianPhoneNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, "").slice(0, 11);
}

export function generateRandomString(length: number): string {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
