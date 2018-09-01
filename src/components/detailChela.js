import React, { Component } from 'react';
import PaypalExpressBtn from './PayPalExpressCheckOut';

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
        //  
        const onSuccess = (payment) => {
            console.log("Your payment was succeeded!", payment);
        }	        
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup! 
            console.log('You have cancelled the payment!', data);
        }	        
        const onError = (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script! 
            console.log("Error!", err);
        // Since the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js" 
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear			 
        }		    
                
        let currency = 'USD'; // or you can set this value from your props or state   
        let total = 1; 
        //
        return ( 
            <div className="card">
                <h2>Tu chela ideal!!!</h2>
                <div className="card-body">
                    <img className="img-thumbnail" style={{width: '290px', border: '0px'}} src={this.state.imagen}/>
                    <h2><b>${this.state.precio}</b></h2>
                    <h5 className="card-title">{this.state.nombre} - {this.state.cerveceria}</h5>
                    <p className="card-text"><i>{this.state.sabor} | {this.state.color}</i></p>
                    <button href="#" className="btn btn-primary">Dame mi chela</button>
                    <PaypalExpressBtn 
                        currency={currency}
                        total={total}
                        onError={onError}
                        onSuccess={onSuccess}
                        onCancel={onCancel}
                    />
                </div>
            </div>
         );
    }
}
 
export default DetailChela;