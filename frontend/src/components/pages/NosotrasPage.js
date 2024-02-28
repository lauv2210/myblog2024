import "../../styles/components/pages/NosotrasPage.css";

const NosotrasPage = (props) => {
  return (
    <div className="centrar1">
      <main className="activo mainNosotras">
        <h2 className="centrar2">¿Quiénes somos?</h2>
        <div id="perfiles">
          <div className="contenedor-perfil">
            <div className="front-profile">
              <img src="/images/woman1.png" alt="Chica 1" />
            </div>
            <div className="back-profile">
              <h3>Nombre 1</h3>
              <p>
                <i
                  className="fa-solid fa-graduation-cap fa-xl"
                  style={{ color: "#000000" }}
                ></i>
                Lorem, ipsum dolor.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi, atque!
              </p>
            </div>
          </div>
          <div className="contenedor-perfil">
            <div className="front-profile">
              <img src="/images/woman2.png" alt="Chica 2" />
            </div>
            <div className="back-profile">
              <h3>Nombre 2</h3>
              <p>
                <i
                  className="fa-solid fa-graduation-cap fa-xl"
                  style={{ color: "#000000" }}
                ></i>
                Lorem, ipsum dolor.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi, atque!
              </p>
            </div>
          </div>
          <div className="contenedor-perfil">
            <div className="front-profile">
              <img src="/images/woman3.png" alt="Chica 3" />
            </div>
            <div className="back-profile">
              <h3>Nombre 3</h3>
              <p>
                <i
                  className="fa-solid fa-graduation-cap fa-xl"
                  style={{ color: "#000000" }}
                ></i>
                Lorem, ipsum dolor.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi, atque!
              </p>
            </div>
          </div>
          <div className="contenedor-perfil">
            <div className="front-profile">
              <img src="/images/woman4.png" alt="Chica 4" />
            </div>
            <div className="back-profile">
              <h3>Nombre 4</h3>
              <p>
                <i
                  className="fa-solid fa-graduation-cap fa-xl"
                  style={{ color: "#000000" }}
                ></i>
                Lorem, ipsum dolor.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi, atque!
              </p>
            </div>
          </div>
        </div>
        <p className="centrar2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error
          eos aspernatur a soluta illo natus, ut cum rerum porro maxime eligendi
          in repudiandae aliquid? Quidem optio magnam in molestias, recusandae
          fuga non adipisci? Quae in atque tempore dolor, officiis corrupti! Sit
          voluptates commodi architecto vero ipsam saepe, suscipit quam expedita
          esse, cupiditate ducimus repellendus. Suscipit obcaecati harum
          assumenda quia nesciunt! Consectetur, minima natus excepturi
          distinctio optio maxime odio pariatur!
        </p>
        <img src="/images/girls.jpg" alt="Chicas" id="imgNosotras" />
      </main>
    </div>
  );
};

export default NosotrasPage;
