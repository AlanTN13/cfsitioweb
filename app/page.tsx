import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import FAQAccordionItem from '@/components/FAQAccordionItem';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, CheckCircle2, MessageCircle, Calendar, Globe, BarChart3, ShieldCheck, Search, Truck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-[10px] tracking-[0.2em] uppercase mb-8 border border-accent/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Consultoría estratégica global
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-8 tracking-tight">
                Importá y exportá con <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-[12px]">seguridad</span> técnica
              </h1>
              <p className="text-xl md:text-2xl text-primary/70 leading-relaxed mb-12 max-w-xl">
                Lideramos tu operativa de comercio exterior con precisión analítica y acompañamiento personalizado de punta a punta.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="https://calendly.com/tu-link"
                  target="_blank"
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-accent hover:shadow-premium hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  Confirmar Consulta
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="https://wa.me/549XXXXXXXXXX"
                  target="_blank"
                  className="bg-white text-primary border border-primary/10 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-50 hover:shadow-subtle hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle size={18} className="text-accent" />
                  WhatsApp Directo
                </Link>
              </div>
            </div>

            {/* Visual Panel Right */}
            <div className="lg:col-span-5 relative fade-in-delayed">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-premium aspect-[4/5] border-8 border-white/50">
                <Image
                  src="/images/puerto-comercio-exterior.jpg"
                  alt="Buque portacontenedores y grúas en una terminal de comercio internacional"
                  fill
                  sizes="(min-width: 1280px) 480px, (min-width: 1024px) 40vw, (min-width: 640px) 85vw, 100vw"
                  priority
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary/35 via-primary/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Endotec style Trust Bar */}
        <div className="mt-20 border-y border-slate-100 bg-white/50 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, text: "Garantía de Operación" },
                { icon: CheckCircle2, text: "Viabilidad Técnica" },
                { icon: BarChart3, text: "Optimización de Costos" },
                { icon: Truck, text: "Seguimiento en Tiempo Real" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 group">
                  <item.icon size={20} className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <Section id="servicios" background="dark" className="py-32 relative overflow-hidden mesh-gradient bg-pattern">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="text-center mb-24 relative z-10">
          <span className="text-[11px] font-extrabold text-accent uppercase tracking-[0.4em] mb-4 block">Nuestras Soluciones</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
            ¿Cómo podemos <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">ayudarte?</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          <ServiceCard
            iconName="Truck"
            title="Gestión integral de importaciones"
            description="Manejamos toda la cadena logística y aduanera para tus compras internacionales."
          />
          <ServiceCard
            iconName="Globe"
            title="Asesoramiento en exportaciones"
            description="Estrategias para llevar tus productos al mercado global de forma competitiva."
          />
          <ServiceCard
            iconName="BarChart3"
            title="Análisis de costos y viabilidad"
            description="Evaluamos la rentabilidad de tu operación antes de que inviertas un centavo."
          />
          <ServiceCard
            iconName="Search"
            title="Clasificación arancelaria"
            description="Determinación precisa de códigos para evitar multas y optimizar impuestos."
          />
          <ServiceCard
            iconName="CheckCircle2"
            title="Búsqueda y evaluación de proveedores"
            description="Validamos contrapartes en el exterior para operaciones seguras y confiables."
          />
          <ServiceCard
            iconName="ShieldCheck"
            title="Optimización logística y documental"
            description="Reducimos tiempos y errores en la gestión de documentos críticos."
          />
        </div>
      </Section>

      {/* Enfoque Section */}
      <Section id="enfoque" className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Cada operación es una decisión estratégica</h2>
            <p className="text-lg text-muted mb-8">
              Trabajamos con análisis previo, planificación y acompañamiento personalizado en cada etapa del proceso. No solo gestionamos, asesoramos.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Análisis y viabilidad antes de avanzar",
                "Orden documental y trazabilidad",
                "Acompañamiento de punta a punta"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-premium border border-primary/10">
              <Image
                src="/images/logistica-contenedores.jpg"
                alt="Contenedores de carga apilados en una terminal logística"
                fill
                sizes="(min-width: 1280px) 576px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-primary/10 pointer-events-none" />
            </div>
          </div>

          <div className="bg-primary p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe size={160} />
            </div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">Lo que te llevás</h3>
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="font-bold text-accent text-xl">01</div>
                <div>
                  <h4 className="font-bold mb-1">Tranquilidad Operativa</h4>
                  <p className="text-sm text-slate-300">Nosotros nos ocupamos de los detalles técnicos y aduaneros.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="font-bold text-accent text-xl">02</div>
                <div>
                  <h4 className="font-bold mb-1">Certeza de Costos</h4>
                  <p className="text-sm text-slate-300">Sabrás exactamente cuánto vas a pagar antes de empezar.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="font-bold text-accent text-xl">03</div>
                <div>
                  <h4 className="font-bold mb-1">Estrategia Global</h4>
                  <p className="text-sm text-slate-300">Tu negocio escalado al mundo con bases sólidas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Proceso Section */}
      <Section id="proceso" background="dark" className="relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo trabajamos</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <ProcessStep
            number={1}
            title="Diagnóstico inicial"
            description="Entendemos tus necesidades y analizamos el potencial de tu operación."
          />
          <ProcessStep
            number={2}
            title="Plan de acción"
            description="Diseñamos la ruta crítica, tiempos y estimación de costos reales."
          />
          <ProcessStep
            number={3}
            title="Gestión y ejecución"
            description="Lideramos la operativa logística, documental y aduanera."
          />
          <ProcessStep
            number={4}
            title="Seguimiento y optimización"
            description="Aseguramos el éxito y buscamos mejoras para próximas etapas."
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" background="white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Preguntas Frecuentes</h2>
            <p className="text-muted">Despejá tus dudas sobre cómo empezar a operar en el exterior.</p>
          </div>
          <div className="space-y-2 border-t border-slate-200">
            <FAQAccordionItem
              question="¿Cómo es la primera consulta?"
              answer="Es una reunión de diagnóstico de 30 minutos donde escuchamos tu proyecto, validamos ideas iniciales y te comentamos cómo podemos aportar valor específico a tu caso."
            />
            <FAQAccordionItem
              question="¿Qué información necesito para cotizar?"
              answer="Lo ideal es tener: tipo de producto (o posición arancelaria si la tenés), valor estimado, origen y destino. Si no lo tenés, te ayudamos a definirlo."
            />
            <FAQAccordionItem
              question="¿Trabajan con empresas y emprendedores?"
              answer="Sí, adaptamos nuestra metodología tanto para grandes empresas que buscan optimizar sus procesos como para emprendedores que están dando sus primeros pasos en comercio exterior."
            />
            <FAQAccordionItem
              question="¿Pueden ayudarme si estoy empezando a importar?"
              answer="¡Exactamente! Es nuestra especialidad. Te guiamos desde el registro como importador hasta la recepción de la mercadería, asegurando que no cometas errores costosos al inicio."
            />
            <FAQAccordionItem
              question="¿En qué países operan?"
              answer="Tenemos red de agentes y experiencia operando en los 5 continentes, con especial énfasis en operaciones con China, Estados Unidos, Europa y países del Mercosur."
            />
          </div>
        </div>
      </Section>

      {/* Contacto Section */}
      <Section id="contacto" className="bg-[#F1F5F9]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase mb-6 border border-primary/20">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">¿Hablamos sobre tu próximo proyecto global?</h2>
            <p className="text-lg text-muted mb-10">
              Estamos acá para brindarte la seguridad que tu negocio necesita. Elejí el canal que prefieras y empecemos a trabajar.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Asesoramiento Personalizado</h4>
                  <p className="text-sm text-muted">Hablás directamente con consultores expertos en el área.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Respuesta Ágil</h4>
                  <p className="text-sm text-muted">Nos comprometemos a contactarte en menos de 24 horas hábiles.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Vías Directas</p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-xs text-muted mb-1">WhatsApp</p>
                  <p className="font-bold text-primary">+54 9 11 XXXX-XXXX</p>
                </div>
                <div>
                  <p className="text-xs text-muted mb-1">Email</p>
                  <p className="font-bold text-primary">info@cfconsultores.com</p>
                </div>
                <div>
                  <p className="text-xs text-muted mb-1">LinkedIn</p>
                  <p className="font-bold text-primary">CF Consultores</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Final CTA Strip */}
      <section className="relative py-24 px-4 overflow-hidden mesh-gradient bg-pattern border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-accent/5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-16 rounded-[3rem] shadow-premium flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left transition-all hover:bg-white/[0.07]">
            <div className="max-w-xl">
              <span className="text-accent font-black text-[11px] uppercase tracking-[0.4em] mb-4 block">Próximo paso</span>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
                ¿Listo para llevar tu empresa al <span className="text-accent">mundo?</span>
              </h3>
              <p className="text-white/60 text-lg md:text-xl">
                Agendá una sesión de diagnóstico y definamos juntos tu estrategia global.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="https://calendly.com/tu-link"
                className="group bg-white text-primary px-10 py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-white transition-all shadow-2xl flex items-center gap-4 active:scale-95"
              >
                Agendar ahora
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
