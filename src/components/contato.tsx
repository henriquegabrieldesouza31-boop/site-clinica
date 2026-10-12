"use client";

import { useState } from "react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section id="contato" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Agende sua consulta
        </h2>
        <p className="mt-3 text-lg text-zinc-600">
          Preencha o formulário e nossa equipe entrará em contato para confirmar
          o melhor horário para você.
        </p>

        {enviado ? (
          <p
            role="status"
            className="mt-8 rounded-lg border border-teal-200 bg-teal-50 px-4 py-4 text-teal-800"
          >
            Mensagem enviada com sucesso! Em breve entraremos em contato.
          </p>
        ) : (
          <form
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setEnviado(true);
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-sm font-medium text-zinc-800">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                autoComplete="name"
                className="rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-800">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="telefone" className="text-sm font-medium text-zinc-800">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                autoComplete="tel"
                className="rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="mensagem" className="text-sm font-medium text-zinc-800">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                className="rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-700 sm:w-auto"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
