import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// CORREÇÃO: Importamos os estilos para um objeto 'styles'
import styles from './Header.module.css';

function Header() {
  return (
    // Usamos a classe 'appHeader' de dentro do objeto 'styles'
    <header className={styles.appHeader}>
      <div className={styles.logoContainer}>
        {/* O logo agora é um link de texto, limpo e moderno */}
        <Link to="/" className={styles.logo}>
          Enter <span>Development</span>
        </Link>
      </div>

      <nav className={styles.appNav}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Home
        </NavLink>
        <NavLink 
          to="/roblox" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Roblox
        </NavLink>
        <NavLink 
          to="/godot" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Godot
        </NavLink>
        <NavLink 
          to="/unity" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Unity
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;