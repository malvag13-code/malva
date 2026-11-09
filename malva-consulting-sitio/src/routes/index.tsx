import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Compass,
  Factory,
  Store,
  GraduationCap,
  HeartHandshake,
  Network,
  Sprout,
  Target,
  UserSearch,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { InteractiveImage } from "@/components/InteractiveImage";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import logo from "@/assets/magdalena_alva_logo.png.asset.json";
import simbolo from "@/assets/magdalena_alva_simbolo.png.asset.json";
import firma from "@/assets/firma_magdalena.png.asset.json";
import retrato from "@/assets/magdalena_alva_retrato.jpg.asset.json";
import equipo from "@/assets/equipo_desarrollo_organizacional.jpg.asset.json";
import leySilla from "@/assets/ley_silla_oficina.png.asset.json";
import liderazgo from "@/assets/liderazgo_equipo.jpg.asset.json";
import nom035 from "@/assets/nom035_bienestar.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MALVA Consulting · OD HR & Business Development" },
      {
        name: "description",
        content:
          "MALVA Consulting, de Magdalena Alva. Diagnóstico, clima, liderazgo, selección, NOM-035 y gestión del cambio para empresas que quieren crecer con su gente.",
      },
      {
        property: "og:title",
        content: "MALVA Consulting · OD HR & Business Development",
      },
      {
        property: "og:description",
        content:
          "Consultoría para fortalecer equipos, cultura y talento. Escríbeme por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const servicios: {
  icon: typeof BarChart3;
  titulo: string;
  texto: string;
  imagen?: { src: string; alt: string; caption?: string };
}[] = [
  {
    icon: BarChart3,
    titulo: "Diagnóstico organizacional",
    texto:
      "Identificamos fortalezas, brechas y oportunidades en procesos, estructura y personas para decidir con información clara.",
  },
  {
    icon: HeartHandshake,
    titulo: "Clima y cultura laboral",
    texto:
      "Medición e intervención del clima para construir ambientes de confianza, colaboración y compromiso.",
  },
  {
    icon: Compass,
    titulo: "Desarrollo de liderazgo",
    texto:
      "Acompañamiento a líderes y mandos medios para comunicar, delegar y guiar equipos de alto desempeño.",
    imagen: {
      src: liderazgo.url,
      alt: "Equipo celebrando juntos chocando las manos en alto",
      caption: "Equipos que celebran sus logros",
    },
  },
  {
    icon: UserSearch,
    titulo: "Reclutamiento y selección",
    texto:
      "Procesos de selección por competencias para incorporar a las personas adecuadas en cada puesto.",
  },
  {
    icon: GraduationCap,
    titulo: "Capacitación y talleres",
    texto:
      "Programas a la medida en habilidades blandas, trabajo en equipo, comunicación y manejo del cambio.",
  },
  {
    icon: Network,
    titulo: "Estructura y gestión del cambio",
    texto:
      "Descripción de puestos, organigramas y acompañamiento humano en procesos de transformación.",
  },
];

const normas: {
  clave: string;
  titulo: string;
  texto: string;
  imagen?: { src: string; alt: string; caption?: string };
}[] = [
  {
    clave: "NOM-035",
    titulo: "Riesgos psicosociales",
    texto:
      "Identificación, análisis y prevención de factores de riesgo psicosocial y promoción de un entorno organizacional favorable.",
    imagen: {
      src: nom035.url,
      alt: "Colaborador estresado rodeado de teléfonos y documentos que le exigen atención",
      caption: "Prevenir el estrés también es cumplir",
    },
  },
  {
    clave: "Ley Silla",
    titulo: "Derecho a descansar sentado",
    texto:
      "Adecuación de políticas, espacios y periodos de descanso para que el personal que labora de pie cuente con asientos.",
    imagen: {
      src: leySilla.url,
      alt: "Colaboradora sentada en una silla ergonómica frente a su escritorio",
      caption: "Descanso digno en cada puesto",
    },
  },
  {
    clave: "NOM-036",
    titulo: "Ergonomía y manejo de cargas",
    texto:
      "Identificación, análisis y control de factores de riesgo ergonómico por manejo manual de cargas.",
  },
  {
    clave: "NOM-037",
    titulo: "Teletrabajo",
    texto:
      "Condiciones de seguridad y salud para personas que trabajan a distancia, con políticas y lineamientos claros.",
  },
];

const segmentos = [
  { icon: Store, texto: "PYMES" },
  { icon: Factory, texto: "Industria" },
  { icon: Building2, texto: "Todo tipo de empresas" },
];

const pasos = [
  {
    n: "01",
    titulo: "Escucha",
    texto: "Conversamos sobre tu organización, sus retos y lo que quieres lograr.",
  },
  {
    n: "02",
    titulo: "Diagnóstico",
    texto: "Recabamos información con entrevistas, encuestas y observación.",
  },
  {
    n: "03",
    titulo: "Intervención",
    texto: "Diseñamos e implementamos un plan de acción a la medida.",
  },
  {
    n: "04",
    titulo: "Seguimiento",
    texto: "Medimos avances y ajustamos para asegurar resultados sostenibles.",
  },
];

const beneficios = [
  { icon: Target, texto: "Objetivos alineados entre dirección y equipos" },
  { icon: Sprout, texto: "Talento que se desarrolla y permanece" },
  { icon: HeartHandshake, texto: "Comunicación y colaboración más sanas" },
];

function WhatsAppCTA({
  children,
  variant = "whatsapp",
  className,
}: {
  children: ReactNode;
  variant?: "whatsapp" | "gold";
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size="xl" className={className}>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {children}
      </a>
    </Button>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Encabezado */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={simbolo.url} alt="" className="h-11 w-11 object-contain" />
            <span className="leading-tight">
              <span className="block font-display text-2xl font-medium text-navy">
                <span className="font-semibold tracking-wide">MALVA</span> Consulting
              </span>
              <span className="eyebrow block text-[0.6rem] text-muted-foreground">
                OD HR &amp; Business Development
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
            <a href="#servicios" className="transition-colors hover:text-navy">
              Servicios
            </a>
            <a href="#normatividad" className="transition-colors hover:text-navy">
              Normatividad
            </a>
            <a href="#enfoque" className="transition-colors hover:text-navy">
              Enfoque
            </a>
            <a href="#proceso" className="transition-colors hover:text-navy">
              Proceso
            </a>
            <a href="#sobre-mi" className="transition-colors hover:text-navy">
              Sobre mí
            </a>
          </nav>
          <Button asChild variant="navy" className="rounded-full px-5">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              <span className="hidden sm:inline">Contáctame</span>
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 h-[620px] w-[620px] rounded-full border border-gold/40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-28 h-[460px] w-[460px] rounded-full bg-gold-soft/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
          <div className="animate-rise">
            <p className="eyebrow text-gold">MALVA Consulting · OD HR &amp; Business Development</p>
            <h1 className="mt-6 text-5xl font-medium leading-[1.02] text-navy sm:text-6xl lg:text-7xl">
              Personas que crecen,{" "}
              <em className="text-gold-gradient font-normal">organizaciones</em> que avanzan.
            </h1>
            <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
              Acompaño a empresas y equipos a fortalecer su cultura, desarrollar a su talento y
              transformar los retos humanos en resultados concretos.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppCTA>Escríbeme por WhatsApp</WhatsAppCTA>
              <Button asChild variant="line" size="xl">
                <a href="#servicios">
                  Ver servicios <ArrowRight />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-4 rounded-t-full border border-gold/60" aria-hidden />
            <InteractiveImage
              src={retrato.url}
              alt="Magdalena Alva, psicóloga organizacional"
              className="rounded-t-full bg-card shadow-soft"
              imgClassName="aspect-[4/5] object-top"
              tilt={8}
              reveal={false}
              loading="eager"
            />
            <div className="absolute -bottom-8 -left-6 rounded-xl bg-card px-6 py-4 shadow-soft">
              <img src={firma.url} alt="Firma de M. Alva G." className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Franja */}
      <div className="bg-gradient-navy py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 font-display text-xl italic text-navy-foreground/90">
          <span>Cultura</span>
          <span className="text-gold">✦</span>
          <span>Liderazgo</span>
          <span className="text-gold">✦</span>
          <span>Talento</span>
          <span className="text-gold">✦</span>
          <span>Clima laboral</span>
          <span className="text-gold">✦</span>
          <span>Cambio</span>
          <span className="text-gold">✦</span>
          <span>NOM-035</span>
        </div>
      </div>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Servicios</p>
          <h2 className="mt-4 text-4xl font-medium text-navy sm:text-5xl">
            Soluciones a la medida de tu organización
          </h2>
          <p className="mt-5 text-muted-foreground">
            Cada empresa es distinta. Diseño cada intervención a partir de tus objetivos, tu cultura
            y tu gente.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, titulo, texto, imagen }) => (
            <article
              key={titulo}
              className="group bg-card p-9 transition-colors duration-300 hover:bg-secondary"
            >
              {imagen && (
                <InteractiveImage
                  src={imagen.src}
                  alt={imagen.alt}
                  caption={imagen.caption}
                  className="-mx-4 -mt-4 mb-7 w-[calc(100%+2rem)] rounded-xl"
                  imgClassName="aspect-[16/9]"
                />
              )}
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-2xl font-medium text-navy">{titulo}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Normatividad */}
      <section id="normatividad" className="relative overflow-hidden bg-gradient-navy py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full border border-gold/25"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-gold">Cumplimiento normativo</p>
              <h2 className="mt-4 text-4xl font-medium leading-tight text-navy-foreground sm:text-5xl">
                También implementamos la normatividad laboral que tu empresa necesita
              </h2>
            </div>
            <div>
              <p className="text-lg font-light leading-relaxed text-navy-foreground/75">
                Acompañamos la implementación completa, desde el diagnóstico hasta la evidencia
                documental, para que tu organización cumpla y, sobre todo, cuide a su gente.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {segmentos.map(({ icon: Icon, texto }) => (
                  <span
                    key={texto}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-sm text-navy-foreground"
                  >
                    <Icon className="h-4 w-4 text-gold" />
                    {texto}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {normas.map((n) => (
              <article
                key={n.clave}
                className="group flex flex-col rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-8 transition-colors duration-300 hover:border-gold/60 hover:bg-navy-foreground/10"
              >
                {n.imagen && (
                  <InteractiveImage
                    src={n.imagen.src}
                    alt={n.imagen.alt}
                    caption={n.imagen.caption}
                    className="-mx-3 -mt-3 mb-6 w-[calc(100%+1.5rem)] rounded-xl"
                    imgClassName="aspect-[4/3]"
                  />
                )}
                <span className="font-display text-4xl font-medium text-gold-gradient">
                  {n.clave}
                </span>
                <h3 className="mt-4 text-xl font-medium text-navy-foreground">{n.titulo}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy-foreground/70">
                  {n.texto}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button asChild variant="gold" size="xl">
              <a
                href={whatsappLink(
                  "Hola Magdalena, me interesa implementar la normatividad laboral (NOM-035, Ley Silla, NOM-036, NOM-037) en mi empresa.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Cotiza tu implementación
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enfoque */}
      <section id="enfoque" className="bg-secondary/60 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative">
            <InteractiveImage
              src={equipo.url}
              alt="Equipo uniendo sus manos como piezas de un rompecabezas"
              caption="Cada pieza cuenta"
              className="rounded-2xl shadow-soft"
              imgClassName="aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-gradient-gold shadow-gold sm:block" aria-hidden />
          </div>
          <div>
            <p className="eyebrow text-gold">Mi enfoque</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-navy sm:text-5xl">
              Cada pieza cuenta para que la organización despegue
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              El Desarrollo Organizacional une la psicología y la estrategia: entender cómo piensan,
              sienten y colaboran las personas para que la empresa funcione mejor como un todo.
              Trabajo de cerca con la dirección y con los equipos para que los cambios sean reales y
              duraderos.
            </p>
            <ul className="mt-9 space-y-4">
              {beneficios.map(({ icon: Icon, texto }) => (
                <li key={texto} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Cómo trabajamos</p>
          <h2 className="mt-4 text-4xl font-medium text-navy sm:text-5xl">
            Un proceso claro, de principio a fin
          </h2>
        </div>
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <li key={p.n} className="relative border-t border-gold/60 pt-8">
              <span className="font-display text-6xl font-light text-gold-gradient">{p.n}</span>
              <h3 className="mt-3 text-2xl font-medium text-navy">{p.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{p.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="border-y border-border bg-card py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <img
            src={logo.url}
            alt="Logotipo Magdalena Alva, Psicóloga Organizacional"
            className="mx-auto w-full max-w-sm"
            loading="lazy"
          />
          <div>
            <p className="eyebrow text-gold">Sobre mí</p>
            <h2 className="mt-4 text-4xl font-medium text-navy sm:text-5xl">
              Hola, soy Magdalena Alva
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
              Soy psicóloga organizacional y consultora en Desarrollo Organizacional y Recursos
              Humanos. Creo que las organizaciones más sólidas son aquellas donde las personas se
              sienten escuchadas, capaces y comprometidas.
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
              Mi trabajo es tender puentes entre los objetivos del negocio y el bienestar de quienes
              lo hacen posible, con soluciones prácticas, cercanas y medibles.
            </p>
            <img src={firma.url} alt="" className="mt-8 h-14 w-auto" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="relative overflow-hidden bg-gradient-navy py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold">Hablemos</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight text-navy-foreground sm:text-6xl">
            ¿Lista tu organización para dar el siguiente paso?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-navy-foreground/75">
            Cuéntame qué está viviendo tu equipo. La primera conversación es para escucharte y
            encontrar juntos el mejor camino.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <WhatsAppCTA variant="gold">Escríbeme por WhatsApp</WhatsAppCTA>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest text-navy-foreground/70 transition-colors hover:text-gold"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Pie */}
      <footer className="bg-navy-deep pb-28 pt-10 sm:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm sm:pr-28 text-navy-foreground/60 sm:flex-row">
            <span className="font-display text-lg text-navy-foreground">
            MALVA Consulting ·{" "}
            <span className="italic text-gold">OD HR &amp; Business Development</span>
          </span>
          <span>© {new Date().getFullYear()} MALVA Consulting. Todos los derechos reservados.</span>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition-transform animate-wa-pulse hover:scale-105"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
