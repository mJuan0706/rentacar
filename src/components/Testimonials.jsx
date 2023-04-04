import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Revisado por personas</h4>
              <h2>Testimonios de clientes</h2>
              <p>
                Descubra el impacto positivo que hemos tenido en nuestros clientes al
                leyendo sus testimonios. Nuestros clientes han experimentado
                nuestro servicio y resultados, y están ansiosos por compartir sus
                experiencias positivas contigo.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                "Alquilamos un auto de este sitio web y tuvimos una increíble
                ¡experiencia! La reserva fue fácil y las tarifas de alquiler fueron
                muy accesible. "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Parry Hotter</h4>
                      <p>Buenos Aires</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                "El auto estaba en excelentes condiciones e hizo que nuestro viaje fuera aún mejor.
                ¡Muy recomendable para este sitio web de alquiler de coches!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Ron Rizzly</h4>
                      <p>Salta</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;