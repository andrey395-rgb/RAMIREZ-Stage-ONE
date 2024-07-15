import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import { useState } from "react";
import ProjectCard from "../common/ProjectCard.jsx";

function Card() {
  return (
    <section id="Card" className={styles.container}>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#1"}
          src={"https://reqres.in/img/faces/1-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Bluth"}
          alt2={"George"}
          p={"george.bluth@reqres.in"}
        />
      </div>
    </section>
  );
}

export default Card;
