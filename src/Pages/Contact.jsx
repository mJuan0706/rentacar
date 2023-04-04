import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>¿Necesita información adicional?</h2>
              <p>
                Un profesional multifacético experto en múltiples campos de
                especialista en investigación, desarrollo y aprendizaje. Más de 15
                años de experiencia.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                rentacar@carmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Argentina,
                Buenos Aires
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                Nombre completo <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                Correo electrónico <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                Consulta <b>*</b>
                </label>
                <textarea placeholder="Ingrese su consulta!.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Enviar
                Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Reserva un coche poniéndote en contacto con nosotros</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;