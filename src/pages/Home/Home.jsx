import React from 'react';
import './Home.css';

function Home() {
  return (
        <>
        <main>

      <div className="home-container">
    <header className="home-header">
      <h1 className="title">Bem-vindo ao Reino de D&D</h1>
      <p className="subtitle">A sua aventura começa aqui</p>
    </header>

    <section className="intro-section">
      <div className="scroll">
        <h2 className="scroll-title">O que é Dungeons & Dragons?</h2>
        <p className="scroll-content">
          Dungeons & Dragons (D&D) é um jogo de interpretação de personagens (RPG) em que os jogadores embarcam em aventuras épicas em mundos de fantasia. 
          Crie personagens, explore masmorras perigosas, lute contra monstros e colete tesouros enquanto desbrava o desconhecido.
        </p>
      </div>
    </section>

    <section className="gallery-section">
      <h2 className="section-title">Galeria de Aventuras</h2>
      <div className="gallery">
     
        <img src="/src/assets/map.jpg" alt="Mapa de uma campanha" className="gallery-image" />
        <img src="/src/assets/battle.jpg" alt="Batalha épica" className="gallery-image" />
        <img src="/src/assets/character.jpg" alt="Personagem de D&D" className="gallery-image" />
        
      </div>
    </section>

 
    <section className="rules-section">
      <h2 className="section-title">Regras Básicas</h2>
      <div className="scroll">
        <ul className="rules-list">
          <li><strong>Criação de Personagem:</strong> Escolha uma raça, uma classe, e distribua seus atributos.</li>
          <li><strong>Role os Dados:</strong> Use um dado de 20 lados (d20) para determinar o sucesso de suas ações.</li>
          <li><strong>Combate:</strong> Ataque, defenda e use magia para derrotar seus inimigos.</li>
          <li><strong>Exploração:</strong> Navegue por masmorras e descubra tesouros escondidos.</li>
        </ul>
      </div>
    </section>


    <section className="testimonials-section">
      <h2 className="section-title">Depoimentos dos Jogadores</h2>
      <div className="testimonials">
        <blockquote className="testimonial">
          <p>"D&D me deu a chance de explorar mundos que eu só havia sonhado. Cada sessão é uma nova aventura!"</p>
          <footer>- Elminster, Arquimago</footer>
        </blockquote>
        <blockquote className="testimonial">
          <p>"Jogar D&D com meus amigos criou laços que durarão uma vida inteira. Não trocaria essas memórias por nada."</p>
          <footer>- Drizzt Do'Urden, Ranger</footer>
        </blockquote>
      </div>
    </section>

    <section className="start-section">
      <button className="start-button">Começar Aventura</button>
    </section>

  </div>
 
    <footer className="home-footer">
      <p>&copy; 2024 Reino de D&D. Todos os direitos reservados.</p>
      <nav className="footer-nav">
        <a href="#">Sobre</a> | <a href="#">Regras</a> | <a href="#">Contato</a>
      </nav>
    </footer>
        </main>
        </>
  );
}

export default Home;