import logo from './logo.svg';
import './App.css';
import { Componente1 } from './components/Componente1';
import { Componente2 } from './components/Componente2';
import { Componente3 } from './components/Componente3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Componente3>

        </Componente3>
        <h1>CENTRO CULTURAL DE ESPAÑA EN LA PAZ</h1>
    
      </header>
      <body className="App-body">
        <Componente1>
        </Componente1>
       

        <Componente2>

        </Componente2>


      </body>
      <footer className="App-footer">
        <h3>
          Nombre: Joel Laime Ticona <br/>
          CI: 9889077 <br/>
          Paralelo: "D"


        </h3>
      </footer>
    </div>
  );
}

export default App;
