"use client";

import React, { useEffect, useState } from "react";

function TextAndImage({ children }) {
  const rawSubtitle = children.filter((item) => item.type === "image_subtitle");
  let subtitle = null;

  if (rawSubtitle.length > 0) {
    subtitle = rawSubtitle[0].props.children[0];
  }

  const rawText = children.filter((item) => item.type === "image_text");
  const text = rawText.map((item) => item.props.children[0]);

  const rawImage = children.filter((item) => item.type === "image_source");
  const image = rawImage[0].props.children[0].props.href;

  const [imageLoaded, setImageLoaded] = useState(false);

  //useEffect to handle the image loading
  useEffect(() => {
    const imageElement = new Image(); // Use a different variable name

    const handleLoadImage = () => {
      setImageLoaded(true);
    };

    imageElement.src = image; // Use imageElement instead of image

    imageElement.onload = handleLoadImage;

    return () => {
      imageElement.onload = null;
    };
  }, [image]);

  return (
    <div className="image_and_text_container">
      <div className="image_and_text_text">
        {subtitle !== null && <h2 className="subtitle">{subtitle}</h2>}
        {text.map((item, index) => (
          <p className="text" key={index}>
            {item}
          </p>
        ))}
      </div>
      <div className="image_and_text_image">
        <div
          className="image_loader"
          style={{ opacity: imageLoaded ? "0" : "1" }}
        >
          <span className="image_loader_spinner"></span>
        </div>
        <img src={image} />
      </div>
    </div>
  );
}

export default TextAndImage;
