import Contato from "@/components/contato";

const servicos = [
  {
    icone: "✨",
    titulo: "Clareamento",
    descricao:
      "Clareamento dental em consultório e caseiro supervisionado, com resultados progressivos e seguros.",
  },
  {
    icone: "🦷",
    titulo: "Ortodontia",
    descricao:
      "Aparelhos fixos, autoligados e alinhadores invisíveis para todas as idades.",
  },
  {
    icone: "🔧",
    titulo: "Implantes",
    descricao:
      "Reabilitação com implantes dentários e próteses, devolvendo função e estética ao sorriso.",
  },
  {
    icone: "🪥",
    titulo: "Limpeza",
    descricao:
      "Profilaxia, raspagem e polimento para manter gengiva e dentes sempre saudáveis.",
  },
  {
    icone: "🩺",
    titulo: "Endodontia",
    descricao:
      "Tratamento de canal com tecnologia e anestesia para um procedimento confortável.",
  },
  {
    icone: "🧸",
    titulo: "Odontopediatria",
    descricao:
      "Cuidado infantil com ambiente acolhedor e abordagem lúdica, do primeiro dente em diante.",
  },
];

const depoimentos = [
  {
    citacao:
      "Fiz meu clareamento e o resultado superou o que eu esperava. Atendimento cuidadoso do começo ao fim.",
    nome: "Mariana Lopes",
    tratamento: "Clareamento dental",
  },
  {
    citacao:
      "Sempre tive medo de dentista. A equipe me acalmou e o tratamento de canal passou sem dor alguma.",
    nome: "Rafael Souza",
    tratamento: "Endodontia",
  },
  {
    citacao:
      "Meu filho adora as consultas. A odontopediatria daqui é de outro nível, muito paciente e gentil.",
    nome: "Camila Ferreira",
    tratamento: "Odontopediatria",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-semibold tracking-tight text-teal-700">
            Clínica Sorriso Claro
          </a>
          <nav aria-label="Navegação principal" className="hidden gap-6 text-sm font-medium text-zinc-600 md:flex">
            <a href="#sobre" className="hover:text-teal-700">Sobre</a>
            <a href="#servicos" className="hover:text-teal-700">Serviços</a>
            <a href="#depoimentos" className="hover:text-teal-700">Depoimentos</a>
            <a href="#contato" className="hover:text-teal-700">Contato</a>
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700"
          >
            Agendar consulta
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-teal-200 to-sky-200 opacity-70 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-100 to-teal-300 opacity-60 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Um sorriso saudável começa com cuidado de verdade
            </h1>
            <p className="mt-5 max-w-xl text-lg text-zinc-600">
              A Clínica Sorriso Claro reúne odontologia completa, tecnologia
              moderna e uma equipe que trata cada paciente pelo nome. Da limpeza
              ao implante, você é acompanhado em cada etapa.
            </p>
            <div className="mt-8">
              <a
                href="#contato"
                className="inline-block rounded-full bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-700"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-24 border-t border-zinc-100 bg-zinc-50 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Sobre a Clínica Sorriso Claro
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Há mais de 10 anos cuidando dos sorrisos de Curitiba, unimos
                experiência clínica e tecnologia de ponta para oferecer
                tratamentos previsíveis, confortáveis e com acompanhamento de
                perto. Nossa equipe é formada por especialistas em cada área da
                odontologia.
              </p>
              <p className="mt-4 text-lg text-zinc-600">
                Acreditamos que prevenir é melhor (e mais barato) do que tratar:
                por isso, cada consulta começa com um plano personalizado e
                orientações claras para o dia a dia.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <dl className="grid grid-cols-2 gap-8">
                <div>
                  <dt className="text-sm text-zinc-500">Pacientes atendidos</dt>
                  <dd className="mt-1 text-4xl font-semibold text-teal-700">+8.000</dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Anos de estrada</dt>
                  <dd className="mt-1 text-4xl font-semibold text-teal-700">10+</dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Especialistas</dt>
                  <dd className="mt-1 text-4xl font-semibold text-teal-700">12</dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Avaliação média</dt>
                  <dd className="mt-1 text-4xl font-semibold text-teal-700">4,9</dd>
                </div>
              </dl>
              <p className="mt-8 border-t border-zinc-100 pt-6 text-zinc-600">
                Atendimento humanizado, esterilização rigorosa e agenda
                flexível, incluindo horários noturnos e sábados.
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Serviços
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-zinc-600">
              Do check-up de rotina aos procedimentos mais complexos, oferecemos
              todas as especialidades em um só lugar.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicos.map((servico) => (
                <div
                  key={servico.titulo}
                  className="rounded-2xl bg-white p-6 ring-1 ring-zinc-100 transition-shadow hover:shadow-md"
                >
                  <span aria-hidden className="text-3xl">{servico.icone}</span>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                    {servico.titulo}
                  </h3>
                  <p className="mt-2 text-zinc-600">{servico.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="scroll-mt-24 bg-zinc-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Depoimentos
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {depoimentos.map((depoimento) => (
                <figure
                  key={depoimento.nome}
                  className="rounded-2xl bg-white p-6 ring-1 ring-zinc-100"
                >
                  <blockquote className="text-zinc-700">
                    “{depoimento.citacao}”
                  </blockquote>
                  <figcaption className="mt-4">
                    <p className="font-medium text-zinc-900">{depoimento.nome}</p>
                    <p className="text-sm text-zinc-500">{depoimento.tratamento}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Contato />
      </main>

      <footer className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-lg font-semibold text-teal-700">Clínica Sorriso Claro</p>
            <p className="mt-2 text-zinc-600">
              Rua das Palmeiras, 452 — Centro
              <br />
              Curitiba/PR — 80010-010
            </p>
          </div>
          <div>
            <p className="font-medium text-zinc-900">Horários</p>
            <p className="mt-2 text-zinc-600">
              Segunda a sexta: 8h às 19h
              <br />
              Sábado: 8h às 12h
            </p>
          </div>
          <div>
            <p className="font-medium text-zinc-900">Contato</p>
            <p className="mt-2 text-zinc-600">
              Telefone: (41) 3333-4444
              <br />
              WhatsApp: (41) 99999-8888
            </p>
          </div>
        </div>
        <div className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
          © 2026 Clínica Sorriso Claro. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
