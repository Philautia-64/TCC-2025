import React from 'react';
// Precisamos importar os estilos!
import styles from './RobloxPage.module.css';

// Componente placeholder para um card de tutorial
function TutorialCard({ title, description }) {
  return (
    <div className={styles.tutorialCard}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

function RobloxPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Tutoriais de Roblox</h1>
        <p>
          Do básico de Luau à monetização. 
          Encontre guias e snippets para seu jogo.
        </p>
      </header>

      {/* Seção 1: Iniciante */}
      <section className={styles.tutorialSection}>
        <h2>Iniciante</h2>
        <div className={styles.cardGrid}>
          {/* Exemplos de cards. Você irá substituí-los por dados reais */}
          <TutorialCard 
            title="Configurando seu Ambiente" 
            description="Como instalar e navegar no Roblox Studio." 
          />
          <TutorialCard 
            title="Seu primeiro Script (Luau)" 
            description="Entendendo variáveis, eventos e o 'Hello World'." 
          />
          <TutorialCard 
            title="Manipulando 'Parts'" 
            description="Como criar, mover e estilizar blocos no jogo." 
          />
        </div>
      </section>

      {/* Seção 2: Intermediário */}
      <section className={styles.tutorialSection}>
        <h2>Intermediário</h2>
        <div className={styles.cardGrid}>
          <TutorialCard 
            title="Criando uma UI (Interface)" 
            description="Botões, menus e barras de vida com ScreenGui." 
          />
          <TutorialCard 
            title="Física e 'BodyMovers'" 
            description="Aplicando forças e movimentos em objetos." 
          />
        </div>
      </section>

      {/* Seção 3: Snippets (Funções Prontas) */}
      <section className={styles.tutorialSection}>
        <h2>Snippets (Funções Prontas)</h2>
        <div className={styles.cardGrid}>
          <TutorialCard 
            title="Função de 'debounce'" 
            description="Evita que um evento dispare múltiplas vezes." 
          />
        </div>
      </section>
    </div>
  );
}

export default RobloxPage;