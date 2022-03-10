import React from 'react';

class Boton extends React.Component{
    render(){
        return(

            <div className='App'>
                <p onClick={this.props.click}>Número introducido: {this.props.number}</p>
                <p onClick={this.props.click}>Resultado: {this.props.result}</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.result} />
                <p></p>
            </div>
            
        )

    }

};

export default Boton; 
 
