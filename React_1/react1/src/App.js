import './App.css';
import Header from './components/UI/Header';
import Boton from './components/Botones/Boton';


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


import Container from 'react-bootstrap/Container';

//definimos estado inicial
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Boton:[
        {number:0,result:0},
      ],
      otherState: 'otro'
    }
  }

  inputChange = (event) =>{
    this.setState({
      Boton: [{number: event.target.value}]
    })
  }

  multiplicacion37 = () =>{
    this.setState({
      Boton:[{number: this.state.Boton[0].number, result: this.state.Boton[0].number*37}]
    })
  }

  multiplicacion43 = () =>{
    this.setState({
      Boton:[{number: this.state.Boton[0].number, result: this.state.Boton[0].number*43}]
    })
  }

  render(){


  return (
    <Container className = 'App'>
       {/* <h1 className="header">APP MULTIPLICACIONES</h1> */}
       <Header/>
       <Boton 
        number={this.state.Boton[0].number}
        changed={this.inputChange}
        result={this.state.Boton[0].result}
        click={()=> this.multiplicacion37}
        click={()=> this.multiplicacion43}
        />
        <Button size='lg'onClick={() => this.multiplicacion37()}>X 37</Button>{' '}
  
        <Button size='lg' onClick={() => this.multiplicacion43()}>X 43</Button>
    </Container>

  );


  }

}

export default App;

