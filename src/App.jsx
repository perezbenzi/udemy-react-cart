import { Component } from "react";
import Button from "./components/Button/button";
import "./App.css"
import Button2 from "./components/Button/button2";



class App extends Component {
  
  render() {

    console.log(this.state)
    return (
      <div>
        <p>Hola mundo</p>
        {/* <Button onClick={()=> this.setState({ valor: 2})}> Enviar </Button> */}
        <Button2> Enviar </Button2>
      </div>
    )
  }
}

export default App;
