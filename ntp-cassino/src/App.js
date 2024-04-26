// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bem-vindo ao Cassino Online</h1>
      </header>
      <main>
        <section>
          <h2>Nossos Jogos</h2>
          <ul>
            <li>Jogo 1</li>
            <li>Jogo 2</li>
            <li>Jogo 3</li>
          </ul>
        </section>
        <section>
          <h2>Sobre Nós</h2>
          <p>Descrição do cassino e seus serviços.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Cassino Online</p>
      </footer>
    </div>
  );
}

export default App;

