import React from "react";
import styles from "./Gallery.module.css";
import image from "../../public/gallery/1.png";

const Gallery = () => {
  return (
    <div className={styles.cards}>
      <img src="/gallery/1.png" alt="Sample photo" />
      <img src="/gallery/2.png" alt="Sample photo" />
      <img src="/gallery/3.png" alt="Sample photo" />
      <img src="/gallery/4.png" alt="Sample photo" />
      <img src="/gallery/5.png" alt="Sample photo" />
      <img src="/gallery/6.png" alt="Sample photo" />
      <img src="/gallery/7.png" alt="Sample photo" />
      <img src="/gallery/8.png" alt="Sample photo" />
      <img src="/gallery/9.png" alt="Sample photo" />
      <img src="/gallery/10.png" alt="Sample photo" />
      <img src="/gallery/11.png" alt="Sample photo" />
      <img src="/gallery/12.png" alt="Sample photo" />
    </div>
  );
};

export default Gallery;
