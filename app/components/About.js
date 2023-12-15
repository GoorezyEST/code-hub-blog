"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/modules/about.module.css";

function About() {
  const imageURL = "https://i.imgur.com/qJ2SyA2.jpg";

  const [imageLoaded, setImageLoaded] = useState(false);

  //useEffect to handle the image loading
  useEffect(() => {
    const image = new Image();

    const handleLoadImage = () => {
      setImageLoaded(true);
    };

    image.src = imageURL;

    image.onload = handleLoadImage;

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <section className={styles.about_content}>
      <div className={styles.about_content_text}>
        <p>
          El propósito de este blog es almacenar scripts, funciones, soluciones
          a errores, así como cualquier otra información relacionada con la
          programación, con el fin de tener un acceso más fácil a estos
          recursos. Además, esto me brinda la oportunidad de compartir mis
          conocimientos con otros desarrolladores.
        </p>
        <p>
          Aspiro a que este espacio no solo sea un almacén de recursos, sino
          también un faro de conocimiento compartido. Este blog es un modesto
          aporte en el vasto panorama de la programación, y espero que
          encuentres aquí tanto la información que buscas como la inspiración
          para nuevos desafíos y logros.
        </p>
      </div>
      <div className={styles.about_content_image}>
        <div
          className="image_loader"
          style={{ opacity: imageLoaded ? "0" : "1" }}
        >
          <span className="image_loader_spinner"></span>
        </div>
        <img src={imageURL} alt="Imagen de Mar del Plata" />
      </div>
    </section>
  );
}

export default About;
