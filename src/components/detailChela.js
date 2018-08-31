import React, { Component } from 'react';

class DetailChela extends Component {

    constructor(props) {
        super(props);
        const {id,nombre,estilo,cerveceria,imagen,sabor,color,precio} = this.props;
        this.state = {
          'id': id,
          'nombre': nombre,
          'estilo': estilo,
          'cerveceria': cerveceria,
          'imagen': imagen,
          'sabor': sabor,
          'color': color,
          'precio': precio
        };
    }

    state = {  }
    render() { 

        return ( 
            <div className="card">
                <h2>Tu chela ideal!!!</h2>
                <div className="card-body">
                    <img className="img-thumbnail" style={{width: '290px', border: '0px'}} src={this.state.imagen}/>
                    <h2><b>${this.state.precio}</b></h2>
                    <h5 className="card-title">{this.state.nombre} - {this.state.cerveceria}</h5>
                    <p className="card-text"><i>{this.state.sabor} | {this.state.color}</i></p>
                    <a href="#" className="btn btn-primary">Dame mi chela</a>
                </div>
            </div>
         );
    }
}
 
export default DetailChela;