import { Component } from 'react';
import './App.css';
import Productos from './components/Productos/Productos';
import Layout from './components/Layout/Layout';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';

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
        <Navbar />
        <Layout>
          <Title />
          <Productos agregarAlCarro={() => console.log('No hace nada')} productos={this.state.productos} />
        </Layout>
      </div>
    );
  }
}

export default App;
