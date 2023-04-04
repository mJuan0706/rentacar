import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>Preguntas más frecuentes</h5>
              <h2>Preguntas frecuentes</h2>
              <p>
              Preguntas frecuentes sobre el proceso de reserva de alquiler de coches
                 en Nuestro Sitio Web: Respuestas a Inquietudes y Consultas Comunes.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. ¿Qué tiene de especial comparar ofertas de alquiler de coches?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                Comparar ofertas de alquiler de autos es importante ya que ayuda a encontrar el
                mejor oferta que se ajuste a su presupuesto y requisitos, asegurándole
                obtener el máximo valor por su dinero. Al comparar varios
                opciones, puede encontrar ofertas que ofrecen precios más bajos,
                servicios adicionales, o mejores modelos de autos. Puedes encontrar coche
                ofertas de alquiler investigando en línea y comparando precios de
                diferentes empresas de alquiler.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. ¿Cómo encuentro las ofertas de alquiler de coches?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                Puede encontrar ofertas de alquiler de automóviles investigando en línea y
                comparando precios de diferentes empresas de alquiler. sitios web
                como Expedia, Kayak y Travelocity le permiten comparar
                precios y ver las opciones de alquiler disponibles. Tambien es
                recomendado para suscribirse a boletines de correo electrónico y seguir alquiler
                empresas de automóviles en las redes sociales para estar informado de cualquier especial
                ofertas o promociones.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. ¿Cómo encuentro precios de alquiler de coches tan bajos?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                Reserve con anticipación: Reservar su auto de alquiler con anticipación puede
                a menudo resultan en precios más bajos. Comparar precios de múltiples
                empresas: use sitios web como Kayak, Expedia o Travelocity para
                comparar precios de varias compañías de alquiler de coches. Buscar
                códigos de descuento y cupones: Buscar códigos de descuento y
                cupones que puedes usar para bajar el precio del alquiler. Alquiler
                desde una ubicación fuera del aeropuerto a veces puede resultar en un menor
                precio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;