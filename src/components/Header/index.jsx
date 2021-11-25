import React from "react";

import styles from "./style.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="Logo"
      />
      <nav className={styles.nav}>
        <ul>
          <li>Filmes</li>
          <li>Séries</li>
          <li>Programas de TV</li>
        </ul>
      </nav>
    </header>
  );
}
