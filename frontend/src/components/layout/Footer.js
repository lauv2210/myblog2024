import React from "react";
import "../../styles/components/layout/Footer.css";

const Footer = (props) => {
  return (
    <footer>
      <div>
        <p>¡Informate en nuestras redes sociales!</p>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
      <div>
        <p>Para recibir noticias...</p>
        <button>ENVIAR</button>
        <input type="email" placeholder="tucorreo@mail.com" />
        <small>Diseñado por Laura Vera &copy;2024</small>
      </div>
      <div>
        <p>Escribinos a nuestro WhatsApp:</p>
        <i class="fa-brands fa-whatsapp" style={{ color: "greenyellow" }}></i>
        <i class="fa-regular fa-envelope" style={{ color: "turquoise" }}></i>
      </div>
    </footer>
  );
};

export default Footer;
