function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer-content">
              <ul className="footer-content__1">
                <li>
                  <span>RENTA</span> CAR
                </li>
                <li>
                Ofrecemos una amplia gama de vehículos para todas sus necesidades de conducción. Tenemos el coche perfecto para satisfacer tus necesidades.
                </li>
                <li>
                  <a href="tel:123456789">
                    <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                  </a>
                </li>
  
                <li>
                  <a
                    href="mailto: 
                  carrental@gmail.com"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    &nbsp; rentacar@gmail.com
                  </a>
                </li>
  
                <li>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://xpeedstudio.com/"
                  >
                    Design by XpeedStudio
                  </a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>COMPAÑÍA</li>
                <li>
                  <a href="#home">New York</a>
                </li>
                <li>
                  <a href="#home">Carreras</a>
                </li>
                <li>
                  <a href="#home">Móvil</a>
                </li>
                <li>
                  <a href="#home">Blog</a>
                </li>
                <li>
                  <a href="#home">Cómo trabajamos</a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>HORAS LABORALES</li>
                <li>Lun - Vie: 9:00 AM - 9:00 PM</li>
                <li>Sáb: 9:00 - 19:00</li>
                <li>Dom: Cerrado</li>
              </ul>
  
              <ul className="footer-content__2">
                <li>SUSCRIPCIÓN</li>
                <li>
                  <p>Suscriba su dirección de correo electrónico para recibir las últimas noticias y actualizaciones.</p>
                </li>
                <li>
                  <input type="email" placeholder="Introducir la dirección de correo electrónico"></input>
                </li>
                <li>
                  <button className="submit-email">Entregar</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;