import { Component } from 'react';
import './App.css';
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 100, img: '/img/tomate.jpg' },
      { name: 'Lechuga', price: 50, img: '/img/lechuga.jpg' },
      { name: 'Arbejas', price: 300, img: '/img/arbejas.jpg' },
    ],
  };
  render() {
    return (
      <div>
        <Productos agregarAlCarro={() => console.log('No hace nada')} productos={this.state.productos} />
      </div>
    );
  }
}

export default App;
