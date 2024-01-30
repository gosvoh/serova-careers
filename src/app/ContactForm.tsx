"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import contactSubmitAction from "./ContactSubmitAction";

const className = {
  input: cn(
    "p-1 md:p-2 border border-[#999999] rounded-md outline-none transition-all",
    "-outline-offset-1 focus:outline-violet-500 focus:outline-2"
  ),
  button: cn(
    "py-2 px-4 md:py-4 md:px-8 bg-color-accent text-white font-bold rounded-md outline-none transition-all",
    "hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-100 m-auto"
  ),
};

const SubmitButton = ({ icon }: { icon?: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={cn(className.button, pending && "cursor-wait opacity-50")}
    >
      {icon ? icon : pending ? "Отправка..." : "Отправить"}
    </button>
  );
};

export default function ContactForm(props: { className?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(contactSubmitAction, {
    status: 0,
  });

  return (
    <form
      action={async (formData) => {
        formAction(formData);
        formRef.current?.reset();
      }}
      className={cn(
        "border border-color-accent rounded-2xl p-6 flex flex-col gap-4 md:gap-8",
        props.className
      )}
      ref={formRef}
    >
      <p>
        Карьерный совет: здесь вы можете оставить запрос или  задать любой
        вопрос
      </p>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Ваше имя:</label>
        <input
          autoComplete="off"
          id="name"
          name="name"
          type="text"
          className={className.input}
          minLength={2}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="login">
          Как с вами связаться (логин tg или телефон):
        </label>
        <input
          autoComplete="off"
          id="login"
          name="login"
          type="text"
          className={className.input}
          minLength={6}
          required
        />
      </div>
      <SubmitButton
        icon={state.status === 200 ? <Check className="mx-auto" /> : undefined}
      />
    </form>
  );
}
