import "../../styles/components/pages/ContactoPage.css";

import { Link } from "react-router-dom";

const ContactoPage = (props) => {
  return (
    <div className="centrar1">
      <main className="activo mainContacto">
        <h2 className="centrar2">Contactanos</h2>
        <p className="centrar2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          ratione quod minus magnam illo iusto officia consectetur vel
          recusandae ipsum unde perferendis mollitia soluta porro sint deleniti
          aspernatur molestias sit. Ratione nisi nemo eius sit iusto numquam.
        </p>
        <div id="form-contacto">
          <form
            action="https://www.google.com/"
            method="get"
            enctype="multipart/form-data"
          >
            <label for="nombre">NOMBRE Y APELLIDO</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeHolder="Escribe aquí..."
            />
            <label for="correo">EMAIL</label>
            <input
              type="email"
              name="correo"
              id="correo"
              placeHolder="tucorreo@mail.com"
            />
            <label for="imagenes">
              SUBE TU IMAGEN/ES (opcional y sólo JPG/JPEG/PNG)
            </label>
            <input
              type="file"
              name="imagenes"
              id="imagenes"
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
            />
            <button className="boton-subir">SELECCIONAR ARCHIVO</button>
            <label for="mensaje">ESCRIBE TU MENSAJE O DUDA</label>
            <textarea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              placeHolder="Escribe aquí..."
            ></textarea>
            <input type="submit" value="ENVIAR" />
          </form>
          <div className="div-contacto">
            <h3>Otras formas de contacto</h3>
            <h4>Vía Mensaje</h4>
            <p>WhatsApp: +54 9 11 2222 3333</p>
            <p>Email: micorreo@mail.com</p>
            <h4>Nuestras redes sociales</h4>
            <p>
              <Link to="https://twitter.com/">X (Twitter)</Link>
            </p>
            <p>
              <Link to="https://www.instagram.com/">Instagram</Link>
            </p>
            <p>
              <Link to="https://www.tiktok.com/explore">TikTok</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactoPage;
