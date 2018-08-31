
import React, { Component } from 'react';

class DetailChela extends Component {

    constructor(props) {
        super(props);
        this.state = {
          'class': 'card width: 18rem;'
        };
      }

    state = {  }
    render() {

        return (
                <div className={this.state.class}>
                    <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">NAME CHELA</h5>
                        <p className="card-text">DETALLES DE LA CHELA.</p>
                        <button className="btn btn-primary">COMPRAR</button>
                    </div>
                </div>
         );
    }
}
 
export default DetailChela;
