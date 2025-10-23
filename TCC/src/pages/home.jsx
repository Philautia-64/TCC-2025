import React from 'react';
import { Link } from 'react-router-dom';
// CORREÇÃO: Importamos os estilos para um objeto 'styles'
import styles from './home.module.css';

function Home() {
  return (
    <>
      {/* Seção 1: O "Hero" com a Proposta de Valor */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Aprenda a criar jogos do zero.
          </h1>
          <p className={styles.heroSubtitle}>
            Tutoriais práticos de Roblox, Godot e Unity para 
            levar sua ideia ao próximo nível.
          </p>
          <Link to="/roblox" className={styles.heroButton}>
            Começar a aprender
          </Link>
        </div>
      </section>

      {/* Seção 2: As Plataformas */}
      <section className={styles.platformsSection}>
        <h2 className={styles.platformsTitle}>Explore nossas Plataformas</h2>
        <div className={styles.platformsGrid}>
          {/* Card Roblox */}
          <div className={styles.platformCard}>
            <h3 className={styles.cardTitle}>Roblox</h3>
            <p className={styles.cardText}>
              A plataforma-universo onde um jogo já está pronto 
              esperando para ser descoberto...
            </p>
            <Link to="/roblox" className={styles.cardButton}>
              Ver Tutoriais
            </Link>
          </div>

          {/* Card Godot */}
          <div className={styles.platformCard}>
            <h3 className={styles.cardTitle}>Godot</h3>
            <p className={styles.cardText}>
              O motor indie livre e poderoso, perfeito para dar 
              vida às suas ideias 2D e 3D...
            </p>
            <Link to="/godot" className={styles.cardButton}>
              Ver Tutoriais
            </Link>
          </div>

          {/* Card Unity */}
          <div className={styles.platformCard}>
            <h3 className={styles.cardTitle}>Unity</h3>
            <p className={styles.cardText}>
              A potência profissional padrão da indústria para 
              criar jogos em qualquer plataforma...
            </p>
            <Link to="/unity" className={styles.cardButton}>
              Ver Tutoriais
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;