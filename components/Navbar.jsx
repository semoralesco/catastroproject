"use client"
import Link from 'next/link';
import styles from './Navbar.module.css'; // Importa el archivo CSS

export default function Navbar() {
  const toggleMenu = () => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    navbar.classList.toggle(styles.collapsed);
  };

  return (
    <nav className={styles.navbar}>
      <button onClick={toggleMenu} className={styles.toggleButton}>
        ☰
      </button>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/predios">Predios</Link>
        </li>
        <li>
          <Link href="/propietarios">Propietarios</Link>
        </li>
        <li>
          <Link href="/construcciones">Construcciones</Link>
        </li>
        <li>
          <Link href="/terrenos">Terrenos</Link>
        </li>
      </ul>
    </nav>
  );
}


/*
"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.less';

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <nav className={`${styles.navbar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
            <button className={styles.toggleButton} onClick={toggleMenu}>
                {isExpanded ? '←' : '→'}
            </button>
            <h1 className={styles.title}>Navbar</h1>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/predios">Predios</Link>
                </li>
                <li>
                    <Link href="/propietarios">Propietarios</Link>
                </li>
                <li>
                    <Link href="/construcciones">Construcciones</Link>
                </li>
                <li>
                    <Link href="/terrenos">Terrenos</Link>
                </li>
            </ul>
        </nav>
    );
}
*/

/*
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
          <h1>Navbar</h1>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/predios">Predios</Link>
            </li>
            <li>
              <Link href="/propietarios">Propietarios</Link>
            </li>
            <li>
              <Link href="/construcciones">Construcciones</Link>
            </li>
            <li>
              <Link href="/terrenos">Terrenos</Link>
            </li>
          </ul>
        </nav>
    )
}
*/