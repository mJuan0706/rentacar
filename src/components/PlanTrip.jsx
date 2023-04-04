import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Planifica tu viaje ahora</h3>
              <h2>Alquiler de coches fácil y rápido</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Seleccionar coche</h3>
                <p>
                Ofrecemos una amplia gama de vehículos para todas sus necesidades de conducción.
                Tenemos el auto perfecto para satisfacer tus necesidades
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Operador de contacto</h3>
                <p>
                Nuestros operadores expertos y amigables están siempre listos para
                ayudar con cualquier pregunta o inquietud
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Manejemos</h3>
                <p>
                Ya sea que salga a la carretera abierta, lo tenemos cubierto
                   con nuestra amplia gama de coches
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;