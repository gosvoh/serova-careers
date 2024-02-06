"use server";

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

const exit = (status: number) => {
  revalidatePath("/");
  return { status };
};

export default async function contactSubmitAction(_: any, formData: FormData) {
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  const privateKey = process.env.DKIM_PRIVATE_KEY;
  const to = process.env.RECEIVE_EMAIL;

  if (!user || !pass || !privateKey || !to) exit(500);

  const name = formData.get("name");
  const login = formData.get("login");
  const message = formData.get("message");

  if (!name || !login || !message) return exit(400);

  await nodemailer
    .createTransport({
      host: "smtp.timeweb.ru",
      auth: { user, pass },
      port: 465,
      secure: true,
      dkim: {
        domainName: "serova.careers",
        keySelector: "mail",
        privateKey: privateKey!,
      },
    })
    .sendMail({
      to,
      subject: "[SEROVA.CAREERS] Обратная связь",
      text: `[${name}] ${login}: ${message}`,
      html: `<html><body>[${name}] ${login}<br/><br/>${message}</body></html>`,
    });

  return exit(200);
}
