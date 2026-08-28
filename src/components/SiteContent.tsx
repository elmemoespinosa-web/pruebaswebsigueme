import '../styles/legacy-site.css'

export default function SiteContent() {
  return (
    <div className="legacy-site relative z-[1]">
      {/* ============ CLIENT LOGOS (marquee) ============ */}
      <section className="clients">
        <div className="clients-marquee">
          <div className="clients-track">
            <img src="/assets/clients/LogosLABS.svg" alt="Laboratorios con los que hemos trabajado" />
            <img src="/assets/clients/LogosLABS.svg" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE ============ */}
      <section className="expertise" id="expertise">
        <div className="wrap">
          <h2>Expertise personalizado que da confianza</h2>
          <p className="eyebrow">
            VAMOS POR tres décadas impulsando marcas farmacéuticas exitosas con innovación, compromiso y confianza.&nbsp;
          </p>
          <a className="btn btn-coral" href="https://artepunto.info">
            Conoce nuestro portafolio completo
          </a>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="timeline">
        <div className="timeline-marquee">
          <div className="timeline-scroll">
            <img src="/assets/portfolio/timelinecompleto.png" alt="clientes pharma desde 1998" />
            <img src="/assets/portfolio/timelinecompleto.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ============ NO SOMOS NUEVOS ============ */}
      <section className="no-somos">
        <h2>No somos nuevos, somos novedosos</h2>
      </section>

      {/* ============ FRAMEWORK IA + CRITERIO ============ */}
      <section id="ia-criterio">
        <div className="wrap">
          <div className="framework">
            <h2>La IA propone... el criterio decide</h2>
            <p>
              La inteligencia artificial acelera la exploración y la ejecución de contenidos. Pero es el
              criterio senior en pharma lo que decide aquello que realmente comunica y cumple con lo que
              tu marca necesita.
            </p>

            <div className="framework-row">
              <img
                className="formula-desktop"
                src="/assets/icons/formula-desktop.svg"
                alt=" comunicación que sí funciona en pharma"
              />
              <img
                className="formula-mobile"
                src="/assets/icons/formula-movil.svg"
                alt="formula efectiva en comunicacion pharma"
              />
            </div>

            <p className="footnote">
              IA CON CRITERIO HUMANO QUE TE BRINDA RESULTADOS CONSIDERANDO LOS PROCESOS REGULATORIOS Y/O
              COMPLIANCE, SOMOS LA EXPERIENCIA PERSONALIZADA QUE LA INDUSTRIA PHARMA REQUIERE
            </p>
          </div>
        </div>
      </section>

      {/* ============ CREATIVE SPRINT ============ */}
      <section className="sprint" id="sprint">
        <div className="wrap">
          <h2>Creative Sprint Pharma</h2>
          <p>
            UN PROYECTO PILOTO DE 72 HORAS EN EL QUE NOS DAS UN BRIEF Y TE MOSTRAMOS LO QUÉ PODEMOS
            HACER.
          </p>

          <div className="sprint-card">
            <h3>Incluye:</h3>
            <ul>
              <li>1 Concepto creativo</li>
              <li>1 key visual</li>
              <li>2 Bocetos de ejecutables</li>
              <li>1 Estratégica de materiales y Next Steps</li>
            </ul>
            <h3 className="kicker">
              NO TE PEDIMOS UNA CUENTA DE $500,000 TE PEDIMOS 25 MINUTOS DE TU TIEMPO PARA MOSTRARTE DE
              QUÉ SE TRATA EL SPRINT
            </h3>
            <a
              className="btn btn-coral"
              href="https://memoespinosa.com/formulario-reto.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero probar sin compromiso
            </a>
          </div>
        </div>
      </section>

      {/* ============ CONTACTO ============ */}
      <section className="contact" id="contacto">
        <div className="wrap">
          <h2>Ponte en contacto</h2>
          <div className="contact-people">
            <a className="person" href="mailto:eduardomendoza@arteypunto.com.mx">
              <img src="/assets/team/eduardo-mendoza.png" alt="Eduardo Mendoza" />
              <div className="name">EDUARDO MENDOZA</div>
              <div className="mail">eduardomendoza@arteypunto.com.mx</div>
            </a>

            <a className="person" href="mailto:memo.espinosa@arteypunto.com.mx">
              <img src="/assets/team/guillermo-espinosa.png" alt="Guillermo Espinosa" />
              <div className="name">GUILLERMO ESPINOSA</div>
              <div className="mail">memo.espinosa@arteypunto.com.mx</div>
            </a>
          </div>
          <form
            className="contact-form"
            action="mailto:administracion@arteypunto.com.mx"
            method="post"
            encType="text/plain"
          >
            <input type="text" name="Nombre" placeholder="Nombre" required />
            <input type="text" name="Empresa" placeholder="Empresa" required />
            <input type="text" name="Marca o proyecto" placeholder="Marca o proyecto" required />
            <button className="btn btn-navy" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrapfooter">
          <div className="footer-inner">
            <a className="footer-logo" href="https://www.artepunto.info">
              <img src="/assets/logo/footerTitulo.png" alt="Arte y Punto Studio" />
            </a>
            <div className="footer-info">
              Avant Publica Advertisement SA de CV,
              <br />
              contacto: administracion@arteypunto.com.mx
              <br />
              CDMX
            </div>
            <div className="footer-links">
              <a href="#">Privacidad de datos</a>
              <br />
              <a href="#">Legales</a>
              <br />
              <a href="#">Proovedores</a>
            </div>
          </div>
          <div className="footer-bottom">
            Web desarrollada y ejecutada en IA con criterio humano. DR 2026 Avant Publica Advertisement
          </div>
        </div>
      </footer>
    </div>
  )
}
