import React from "react";
import "../../styles/components/pages/HomePage.css";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomePage = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="centrar1">
      <main className="activo">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              src="/images/ideas-and-reality.jpg"
              alt="Ideas and Reality"
              className="imgCarousel"
            />
          </Carousel.Item>
          <Carousel.Item className="item2">
            <img src="/images/sky.jpg" alt="Cielo" className="imgCarousel" />
            <p>¡Envianos alguna idea!</p>
            <button>ENVIAR</button>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/enjoy-today.jpg"
              alt="Enjoy Today"
              className="imgCarousel"
            />
          </Carousel.Item>
        </Carousel>

        <div id="intro">
          <h2>Disfruta el presente</h2>
          <img src="/images/muffins.jpg" alt="Muffins" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            quas, sunt hic quibusdam est itaque, aspernatur quasi odio
            perspiciatis possimus, dignissimos et animi assumenda beatae
            excepturi reprehenderit similique aperiam? Molestiae libero incidunt
            sapiente eveniet sequi blanditiis, quasi cum maxime culpa. Odit eum,
            voluptate accusamus, tenetur at incidunt iure numquam totam
            similique quisquam aperiam? Iure vitae ipsa cupiditate tenetur?
            Asperiores corrupti temporibus nostrum voluptates quisquam delectus
            a, veniam assumenda eveniet optio voluptatum sunt, ipsa consequuntur
            hic. Vel est molestias, vero autem necessitatibus officiis, deserunt
            delectus suscipit excepturi dolor voluptatum pariatur soluta.
          </p>
        </div>
        <h2>Algunas de nuestras ideas</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut
          placeat rem, error vitae fuga voluptates deleniti reiciendis iste
          repellendus cum, ratione totam, tempore provident fugiat blanditiis
          quia culpa dicta. Eum doloribus laboriosam enim! Mollitia numquam
          facilis ipsa fuga quaerat voluptatem sunt quam fugit officia.
        </p>
        <div id="cartelera">
          <img src="/images/pink-vibes.jpg" alt="Pink Vibes Only" />
          <img src="/images/jar.jpg" alt="Frasco" />
          <img src="/images/flamingo.jpg" alt="Flamengo" />
          <img src="/images/neon-door.jpg" alt="Puerta Neón" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
