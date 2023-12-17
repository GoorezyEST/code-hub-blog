"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/modules/posts-preview.module.css";
import formatSpanishDate from "@/functions/formatSpanishDate";

//Component to display the user a preview of all the posts
function PostPreview({ postData, url }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  //useEffect to handle the image loading
  useEffect(() => {
    const image = new Image();

    const handleLoadImage = () => {
      setImageLoaded(true);
    };

    image.src = postData.image;

    image.onload = handleLoadImage;

    return () => {
      image.onload = null;
    };
  }, [postData.image]);

  return (
    <Link href={url} className={styles.container}>
      <div className={styles.image}>
        <div
          className="image_loader"
          style={{ opacity: imageLoaded ? "0" : "1" }}
        >
          <span className="image_loader_spinner"></span>
        </div>
        <img src={postData.image} />
      </div>
      <div className={styles.text}>
        <h2 className={styles.text_title}>{postData.title}</h2>
        <p className={styles.text_description}>{postData.subtitle}</p>
        <p className={styles.text_date}>{formatSpanishDate(postData.date)}</p>
      </div>
    </Link>
  );
}

export default PostPreview;
