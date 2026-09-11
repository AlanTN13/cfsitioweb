import Image from 'next/image';
import Link from 'next/link';
import FAQAccordionItem from '@/components/FAQAccordionItem';
import ContactForm from '@/components/ContactForm';
import HeroBackdrop from '@/components/HeroBackdrop';
import { Ship, PlaneTakeoff, ChartNoAxesCombined, FileSearch, SearchCheck, Truck } from 'lucide-react';

const services = [
  ['Quiero importar', 'Revisamos los pasos de tu compra en el exterior y te acompañamos en la coordinación logística, aduanera y documental.'],
  ['Quiero exportar', 'Te ayudamos a planificar la salida de tus productos: requisitos, documentación y alternativas de transporte.'],
  ['Costos y viabilidad', 'Ordenamos los costos de la operación y sus supuestos para que puedas evaluar las alternativas antes de avanzar.'],
  ['Clasificación arancelaria', 'Analizamos las características de la mercadería para identificar su clasificación y los requisitos aplicables.'],
  ['Evaluación de proveedores', 'Te acompañamos en la búsqueda y revisión de proveedores, condiciones de compra y documentación disponible.'],
  ['Logística y documentación', 'Revisamos documentos y coordinamos las etapas de transporte para anticipar faltantes y evitar demoras.'],
];

const serviceIcons = [Ship, PlaneTakeoff, ChartNoAxesCombined, FileSearch, SearchCheck, Truck];

const steps = [
  ['Escuchamos tu consulta', 'Nos contás qué querés importar o exportar y en qué etapa estás.'],
  ['Revisamos la operación', 'Identificamos información pendiente, requisitos, costos y alternativas.'],
  ['Acordamos cómo avanzar', 'Definimos el alcance del trabajo, las responsabilidades y los próximos pasos.'],
  ['Te acompañamos', 'Hacemos seguimiento de las gestiones acordadas y de las dudas que surjan.'],
];

export default function Home() {
  return (
    <main id="contenido">
      <section className="hero">
        <HeroBackdrop />
        <div className="site-width hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">CF Consultores · Comercio exterior</p>
            <h1>Importar y exportar empieza por entender cada paso.</h1>
            <p className="intro">Te ayudamos a evaluar costos, ordenar la documentación y coordinar tu operación de comercio exterior.</p>
            <p className="hero-detail">Una primera consulta para entender tu proyecto y definir qué necesitás para avanzar.</p>
            <div className="hero-actions">
              <Link href="#contacto" className="button button-primary">Contanos tu proyecto <span aria-hidden="true">↗</span></Link>
              <Link href="#servicios" className="text-link">Conocé los servicios <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <figure className="hero-figure">
            <div className="photo hero-photo">
              <Image src="/images/puerto-comercio-exterior.jpg" alt="Buque portacontenedores junto a las grúas de una terminal portuaria" fill sizes="(min-width: 1200px) 620px, (min-width: 800px) 52vw, 100vw" priority className="object-cover" />
            </div>
            <figcaption>Mercadería, documentación y transporte: una operación que necesita coordinación.</figcaption>
          </figure>
        </div>
      </section>

      <section id="servicios" className="section services">
        <div className="site-width">
          <div className="section-heading">
            <h2>¿Qué necesitás resolver?</h2>
            <p>Contanos qué querés importar o exportar. Podemos acompañarte con toda la operación o ayudarte con una etapa puntual.</p>
          </div>
          <div className="service-grid">
            {services.map(([title, description], index) => {
              const Icon = serviceIcons[index];
              return (
                <article className="service-item" key={title}>
                  <span className="service-icon" aria-hidden="true"><Icon size={27} strokeWidth={1.5} /></span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="enfoque" className="section approach">
        <div className="site-width approach-grid">
          <figure className="approach-figure">
            <div className="photo approach-photo">
              <Image src="/images/logistica-contenedores.jpg" alt="Vista aérea de contenedores y vías de circulación en una terminal logística" fill sizes="(min-width: 1200px) 480px, (min-width: 800px) 42vw, 100vw" className="object-cover" />
            </div>
            <figcaption>La planificación conecta cada etapa de la operación.</figcaption>
          </figure>
          <div className="approach-copy">
            <p className="eyebrow">Nuestro enfoque</p>
            <h2>Primero, entender.<br />Después, avanzar.</h2>
            <p>No todas las operaciones necesitan lo mismo. Partimos de tu producto, tu objetivo y la información disponible para ordenar el trabajo.</p>
            <dl className="approach-list">
              <div><dt>Explicaciones claras</dt><dd>Qué hay que resolver, por qué y con qué información.</dd></div>
              <div><dt>Alcance acordado</dt><dd>Qué gestiones vamos a acompañar y qué depende de cada parte.</dd></div>
              <div><dt>Seguimiento cercano</dt><dd>Un espacio para revisar avances, pendientes y próximos pasos.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="proceso" className="section process">
        <div className="site-width">
          <div className="section-heading"><h2>Cómo trabajamos</h2><p>Un recorrido claro, desde la consulta hasta las gestiones acordadas.</p></div>
          <ol className="process-grid">
            {steps.map(([title, description], index) => (
              <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="site-width faq-grid">
          <div><p className="eyebrow">Antes de empezar</p><h2>Preguntas frecuentes</h2><p>Algunas dudas que podemos despejar desde la primera conversación.</p></div>
          <div className="faq-list">
            <FAQAccordionItem question="¿Cómo es la primera consulta?" answer="Es una reunión de diagnóstico de 30 minutos donde escuchamos tu proyecto, validamos ideas iniciales y te comentamos cómo podemos aportar valor específico a tu caso." />
            <FAQAccordionItem question="¿Qué información necesito para cotizar?" answer="Lo ideal es tener: tipo de producto (o posición arancelaria si la tenés), valor estimado, origen y destino. Si no lo tenés, te ayudamos a definirlo." />
            <FAQAccordionItem question="¿Trabajan con empresas y emprendedores?" answer="Sí. Podés consultarnos tanto si estás evaluando una primera operación como si necesitás revisar una etapa de tu proceso de importación o exportación. El alcance del trabajo se acuerda según tu necesidad." />
            <FAQAccordionItem question="¿Pueden ayudarme si estoy empezando a importar?" answer="Sí. Podemos ayudarte a ordenar la información de tu producto, identificar los pasos a revisar y evaluar los costos y requisitos antes de avanzar." />
            <FAQAccordionItem question="¿En qué países operan?" answer="El alcance se evalúa según el origen, el destino y el tipo de mercadería. Contanos qué operación tenés en mente para que podamos confirmar cómo acompañarte." />
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact">
        <div className="site-width contact-grid">
          <div className="contact-copy"><p className="eyebrow">Conversemos</p><h2>Contanos qué necesitás resolver.</h2><p>Podés empezar por el producto, el origen o destino y las dudas que tengas. Si todavía te falta información, también es un buen punto de partida.</p><p className="contact-note">Con esa primera información podemos conversar sobre el alcance de la consulta.</p></div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
