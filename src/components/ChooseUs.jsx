import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Por qué elegirnos</h4>
                <h2>Las ofertas mejor valoradas que jamás encontrarás</h2>
                <p>
                Descubre las mejores ofertas que jamás encontrarás con nuestro inmejorable
                ofertas Estamos dedicados a brindarle el mejor valor
                por su dinero, para que pueda disfrutar de servicios de primera calidad y
                productos sin romper el banco. Nuestras ofertas están diseñadas para
                brindarle la mejor experiencia de alquiler, así que no se la pierda
                su oportunidad de ahorrar en grande.
                </p>
                <a href="#home">
                Buscar detalles &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>A través del país</h4>
                    <p>
                    Lleve su experiencia de conducción al siguiente nivel con nuestro
                    vehículos de primera para tus aventuras a través del país.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Precios todo incluido</h4>
                    <p>
                    Obtenga todo lo que necesita en un lugar conveniente y transparente
                    precio con nuestra política de precios todo incluido.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Sin cargos ocultos</h4>
                    <p>
                    Disfrute de la tranquilidad con nuestra política de cargos no ocultos. Nosotros
                       creemos en precios transparentes y honestos.
                    </p>
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

export default ChooseUs;