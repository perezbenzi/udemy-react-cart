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
    carro: [],
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  render() {
    return (
      <div>
        <Navbar carro={this.state.carro} />
        <Layout>
          <Title />
          <Productos agregarAlCarro={this.agregarAlCarro} productos={this.state.productos} />
        </Layout>
      </div>
    );
  }
}

export default App;
