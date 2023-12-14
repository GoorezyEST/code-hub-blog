import React from "react";
import styles from "@/styles/modules/banner.module.css";

function Banner({ span, text }) {
  return (
    <div className={styles.banner}>
      <img
        className={styles.banner_image}
        src="https://i.imgur.com/tkv0wzE.jpg"
        alt="Banner image"
      />
      <div className={styles.banner_overlay}></div>
      <h1 className={styles.banner_title}>
        {text}&nbsp;
        <span>{span}</span>
      </h1>
    </div>
  );
}

export default Banner;
