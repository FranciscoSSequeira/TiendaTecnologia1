import { useState } from "react";
import styles from "./Carrusel.module.css";

const carouselImages = [
  "/images/banner_carrusel.jpg",
  "/images/banner2_carrusel.jpg",
  "/images/banner3_carrusel.jpg"
];

export default function Carrusel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % carouselImages.length);
  const prevSlide = () => setCurrent((current - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className={styles.carousel}>
      <button className={styles["carousel-btn"]} onClick={prevSlide}>&lt;</button>
      <img
        src={carouselImages[current]}
        alt={`Slide ${current + 1}`}
        className={styles["carousel-img"]}
      />
      <button className={styles["carousel-btn"]} onClick={nextSlide}>&gt;</button>
    </div>
  );
}