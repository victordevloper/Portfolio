import './App.css'
import React from 'react';
import logo from './imagens/Logo.png';
import { Instagram, Linkedin, Github } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} alt='logomarca'/>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#Projects'>Projects</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </nav>
      <header className="App-header">
        <main>
        <section id='Home'>
        <h2>L. Victor</h2>
          <p>Software Enginner</p>
          <div className='social'>
            <Instagram/>
            <Linkedin/>
            <Github/>
          </div>
        </section>
        <section id='Projects'>
          Projects
        </section>
        <section id='Contact'>Contact</section>
        </main>
      </header>
    </div>
  );
}

export default App;
