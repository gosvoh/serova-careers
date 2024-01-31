"use server";

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;
const privateKey = process.env.DKIM_PRIVATE_KEY;
const to = process.env.RECEIVE_EMAIL;

console.log(user, pass, privateKey, to);

const transporter = nodemailer.createTransport({
  host: "smtp.timeweb.ru",
  auth: { user, pass },
  port: 465,
  secure: true,
  dkim: {
    domainName: "serova.careers",
    keySelector: "mail",
    privateKey: privateKey!,
  },
});

const exit = (status: number) => {
  revalidatePath("/");
  return { status };
};

export default async function contactSubmitAction(_: any, formData: FormData) {
  if (!user || !pass || !privateKey || !to) exit(500);

  const name = formData.get("name");
  const login = formData.get("login");

  if (!name || !login) return exit(400);

  await transporter.sendMail({
    to,
    subject: "[SEROVA.CAREERS] Обратная связь",
    text: `[${name}] ${login}`,
    html: `<html><body>[${name}] ${login}</body></html>`,
  });

  return exit(200);
}
