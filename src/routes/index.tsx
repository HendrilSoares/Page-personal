import { createFileRoute } from "@tanstack/react-router";
import {
  Dumbbell,
  Laptop,
  Salad,
  Star,
  Instagram,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import transform1 from "@/assets/transform-1.jpg";
import transform2 from "@/assets/transform-2.jpg";
import transform3 from "@/assets/transform-3.jpg";
import transform4 from "@/assets/transform-4.jpg";
import rodImg from "@/assets/rod.png";
import rodVideo from "@/assets/video-rod.mp4";


const WHATSAPP = "https://wa.me/553194402150";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patrick | Personal Trainer — Resultados Reais" },
      {
        name: "description",
        content:
          "Personal trainer com treino presencial, online e consultoria nutricional. +100 alunos transformados. Agende sua avaliação gratuita.",
      },
      { property: "og:title", content: "Patrick | Personal Trainer — Resultados Reais" },
      {
        property: "og:description",
        content:
          "Treino presencial,Fichas de treinos personalizada e consultoria nutricional. +100 alunos transformados. Agende sua avaliação gratuita.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "2", label: "Anos de experiência" },
  { value: "+100", label: "Alunos atendidos" },
  { value: "4.9", label: "Avaliação média" },
];

const plans = [
  {
    icon: Dumbbell,
    title: "Treino Presencial",
    desc: "Acompanhamento individual na academia, com correção de execução em tempo real e periodização mensal.",
    price: "R$ 490/mês",
  },
  {
    icon: Laptop,
    title: "Treino Online",
    desc: "Planilha personalizada no app, vídeos de execução e ajustes semanais onde você estiver.",
    price: "R$ 190/mês",
  },
  {
    icon: Salad,
    title: "Consultoria Nutricional",
    desc: "Plano alimentar alinhado ao seu treino, rotina e objetivo, com revisões quinzenais.",
    price: "R$ 250/mês",
  },
];

const testimonials = [
  {
    name: "Marina Lopes",
    initials: "ML",
    text: "Perdi 14 kg em 7 meses sem dieta maluca. O método é firme, mas humano.",
  },
  {
    name: "Diego Ramos",
    initials: "DR",
    text: "Nunca tinha ganhado massa de verdade. Em um ano virei outra pessoa.",
  },
  {
    name: "Camila Souza",
    initials: "CS",
    text: "Treino online impecável: cobrança na medida e resultado que aparece.",
  },
];

const transformations = [transform1, transform2, transform3, transform4];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-neon">
      <span className="h-px w-8 bg-neon" />
      {children}
    </span>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src={rodImg}
          alt="Personal trainer de braços cruzados em academia"
          className="absolute inset-x-0 bottom-0 top-0 mx-auto h-full w-full object-contain object-center md:left-auto md:right-0 md:mx-0 md:w-[55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background md:bg-gradient-to-r md:from-background md:via-background/75 md:to-transparent" />


        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:justify-center md:pb-24">
          <div className="max-w-xl">
            <div className="border-l-4 border-neon pl-5">
              <h1 className="text-6xl sm:text-7xl md:text-8xl">
                Patrick
                <br />
                Personal
              </h1>
              <p className="mt-4 font-display text-lg tracking-widest text-neon text-neon-glow sm:text-xl">
                Resultados reais,
                <br />
                transformações reais.
              </p>
            </div>

            <a
              href={WHATSAPP}
              className="btn-neon mt-9 inline-flex items-center gap-3 px-8 py-4 text-sm sm:text-base"
            >
              Agendar avaliação gratuita
              <ArrowRight size={18} />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">+100 alunos</span> transformados desde
              2022
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-neon" />
              <video
                src={rodVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Personal trainer em treino na academia"
                className="aspect-4/5 w-full object-cover object-center grayscale"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionLabel>SOBRE</SectionLabel>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              Método direto,
              <br />
              <span className="text-neon">zero atalho.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Sou personal trainer formado em Educação Física (CREF ativo), com especialização em
              treinamento de força e hipertrofia e certificação em preparação física funcional. Há
              mais de 2 anos ajudo pessoas comuns — não atletas — a construir corpo, disciplina
              e saúde.
            </p>
            <p className="mt-4 text-muted-foreground">
              O trabalho começa com avaliação física completa, segue com periodização ajustada à sua
              rotina e acompanhamento constante. Sem promessa mágica: progressão de carga, técnica
              impecável e consistência.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl text-neon sm:text-5xl">{s.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>PLANOS</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-4xl sm:text-5xl">Escolha como quer evoluir</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="group flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-neon">
                  <p.icon size={34} className="text-neon" />
                  <h3 className="mt-6 text-2xl">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-8 font-display text-3xl">{p.price}</div>
                  <a
                    href={WHATSAPP}
                    className="btn-outline-neon mt-6 inline-flex items-center justify-center px-6 py-3 text-sm"
                  >
                    Saiba mais
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionLabel>DEPOIMENTOS</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl">Quem treina, fala</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col border border-border bg-card p-8">
                <div className="flex gap-1 text-neon">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 text-muted-foreground">"{t.text}"</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-neon font-display text-sm text-neon-foreground">
                    {t.initials}
                  </span>
                  <span className="font-display tracking-wide">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>RESULTADOS</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-4xl sm:text-5xl">
              Transformações <span className="text-neon">de verdade</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {transformations.map((src, i) => (
              <Reveal key={src} delay={i * 100}>
                <div className="group relative overflow-hidden">
                  <img
                    src={src}
                    alt={`Transformação de aluno ${i + 1}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-4/5 w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 bg-neon px-2 py-1 font-display text-xs text-neon-foreground">
                    Antes / Depois
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <h2 className="text-4xl sm:text-6xl">
            Pronto para começar
            <br />
            sua <span className="text-neon text-neon-glow">transformação?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            A primeira avaliação é gratuita e sem compromisso. Vamos conversar sobre o seu objetivo
            e montar o plano certo para você.
          </p>
          <a
            href={WHATSAPP}
            className="btn-neon mt-10 inline-flex items-center gap-3 px-10 py-5 text-base sm:text-lg"
          >
            Falar no WhatsApp
            <ArrowRight size={20} />
          </a>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/rodiney.patrick?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              aria-label="Instagram"
              className="flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-neon hover:text-neon"
            >
              <Instagram size={20} />
            </a>
            <a
              href={WHATSAPP}
              aria-label="WhatsApp"
              className="flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-neon hover:text-neon"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <span className="font-display text-2xl">
            ROD<span className="text-neon">.</span>TRAINER
          </span>
          <nav className="flex flex-wrap gap-6 text-sm uppercase tracking-widest text-muted-foreground">
            <a href="#sobre" className="hover:text-neon">
              Sobre
            </a>
            <a href="#planos" className="hover:text-neon">
              Planos
            </a>
            <a href="#depoimentos" className="hover:text-neon">
              Depoimentos
            </a>
            <a href="#contato" className="hover:text-neon">
              Contato
            </a>
          </nav>
          <div className="flex gap-4 text-muted-foreground">
            <a href="https://www.instagram.com/rodiney.patrick?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="hover:text-neon">
              <Instagram size={18} />
            </a>
            <a href={WHATSAPP} aria-label="WhatsApp" className="hover:text-neon">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Patrick Personal Trainer. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
