"use server";

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.timeweb.ru",
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASS!,
  },
  port: 465,
  secure: true,
  dkim: {
    domainName: "serova.careers",
    keySelector: "mail",
    privateKey: process.env.DKIM_PRIVATE_KEY!,
  },
});

const exit = (status: number) => {
  revalidatePath("/");
  return { status };
};

export default async function contactSubmitAction(_: any, formData: FormData) {
  const name = formData.get("name");
  const login = formData.get("login");

  if (!name || !login) return exit(400);

  await transporter.sendMail({
    to: process.env.RECEIVE_EMAIL,
    subject: "[SEROVA.CAREERS] Обратная связь",
    text: `[${name}] ${login}`,
    html: `<html><body>[${name}] ${login}</body></html>`,
  });

  return exit(200);
}
