export default function ContactForm() {
    return (
        <form className="contact-form" aria-label="Formulario de consulta — muestra visual">
            <div className="form-row">
                <div><label htmlFor="name">Nombre</label><input type="text" id="name" name="name" autoComplete="name" placeholder="Tu nombre" /></div>
                <div><label htmlFor="whatsapp">WhatsApp</label><input type="tel" id="whatsapp" name="whatsapp" autoComplete="tel" placeholder="Tu número de contacto" /></div>
            </div>
            <div><label htmlFor="email">Email</label><input type="email" id="email" name="email" autoComplete="email" placeholder="Tu email" /></div>
            <div><label htmlFor="message">¿En qué podemos ayudarte?</label><textarea id="message" name="message" rows={3} placeholder="Contanos sobre tu operación o consulta." /></div>
            <div className="form-footer"><button type="button" disabled className="button button-primary" aria-describedby="form-preview-note">Enviar consulta</button><p id="form-preview-note">Formulario de muestra.<br />El envío todavía no está habilitado.</p></div>
        </form>
    );
}
