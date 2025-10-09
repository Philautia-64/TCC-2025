import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      {/* Seção 1: A frase de impacto em tela cheia */}
      <section className="hero-section">
        <h2 className="hero-title">
          For the Real ones, <br />
          we gotta be a real One
        </h2>
      </section>

      {/* Seção 2: As plataformas (só será visível após rolar) */}
      <section className="platforms-section">
        <h3 className="platforms-title">Platforms</h3>
        <div className="row g-4">
          {/* Card Roblox */}
          <div className="col-md-4">
            <div className="card bg-dark text-white h-100">
              <div className="card-body">
                <h5 className="card-title">Roblox</h5>
                <p className="card-text">A plataforma-universo onde um jogo já está pronto esperando para ser descoberto...</p>
                <a href="/roblox" className="btn btn-primary">Saiba Mais</a>
              </div>
            </div>
          </div>

          {/* Card Godot */}
          <div className="col-md-4">
            <div className="card bg-dark text-white h-100">
              <div className="card-body">
                <h5 className="card-title">Godot</h5>
                <p className="card-text">O motor indie livre e poderoso, perfeito para dar vida às suas ideias 2D e 3D...</p>
                <a href="/godot" className="btn btn-primary">Saiba Mais</a>
              </div>
            </div>
          </div>

          {/* Card Unity */}
          <div className="col-md-4">
            <div className="card bg-dark text-white h-100">
              <div className="card-body">
                <h5 className="card-title">Unity</h5>
                <p className="card-text">A potência profissional padrão da indústria para criar jogos em qualquer plataforma...</p>
                <a href="/unity" className="btn btn-primary">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;