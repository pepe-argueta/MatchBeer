import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col } from "reactstrap";
import "react-bootstrap-wizard/dist/react-wizard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Chela from './detailChela';

class FirstStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstStep: "PRIMERA PREGUNTA",
        'class1': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class2': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class3': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class4': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class5': 'col ml-2 btn btn-outline-primary'//class define el style del button, en el state sera modificado
      };
    }
    
    state = { 
        status1: ""
    }

    isValidated() {
        var resp1 = (this.state.status1 == true) ? true : false ;
        return resp1;//true next step
    }

    onClick = (event) => {

        switch (event.target.value) {//set class
            case 'Frutal':
                this.setState({
                    class1: 'col ml-2 btn btn-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'Cafe':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'Levadura':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'Caramelo':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'Toronaja':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-primary',
                }); 
                break;
        }

        switch (event.target.name) {
            case 'q1':
                this.setState({status1: true, valor1:event.target.value});//Esto es enviado el state Padre, status para isValidate(), valor1=>r1 
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>¿Qué sabores te gustan?</h1>
            </div>
            <button className={this.state.class1} onClick={this.onClick} name="q1" id="r1" value="Frutal">Frutal</button>
            <button className={this.state.class2} onClick={this.onClick} name="q1" id="r2" value="Cafe">Cafe</button>
            <button className={this.state.class3} onClick={this.onClick} name="q1" id="r3" value="Levadura">Levadura</button>
            <button className={this.state.class4} onClick={this.onClick} name="q1" id="r3" value="Caramelo">Caramelo</button>
            <button className={this.state.class5} onClick={this.onClick} name="q1" id="r3" value="Toronaja">Toronaja</button>
            
        </div>
      );
    }

  }//FIN STEP 1

  class SecondStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        secondStep: "SEGUNDA PREGUNTA",
        'class1': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class2': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class3': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
      };
    }

    state = { 
        status2: ""
    }

    isValidated() {
        var resp2 = (this.state.status2 == true) ? true : false ;
        return resp2;
    }

    onClick = (event) => {

        switch (event.target.value) {//set class
            case 'Clara':
                this.setState({
                    class1: 'col ml-2 btn btn-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'Oscura':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'Mixto':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
        }

        switch (event.target.name) {
            case 'q2':
                this.setState({status2: true, valor2:event.target.value});
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>¿Cómo te gustan más?</h1>
            </div>
            <button className={this.state.class1} onClick={this.onClick} name="q2" id="r1" value="Clara">Clara</button>
            <button className={this.state.class2} onClick={this.onClick} name="q2" id="r2" value="Oscura">Oscura</button>
            <button className={this.state.class3} onClick={this.onClick} name="q2" id="r3" value="Mixto">No discrimino</button>
            
        </div>
      );
    }
  }//Fin STEP 2

  class ThirdStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "TERCERA PREGUNTA",
        'class1': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class2': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class3': 'col ml-2 btn btn-outline-primary',
      };
    }
    
    state = { 
        status3: ""
    }

    isValidated() {
        var resp3 = (this.state.status3 == true) ? true : false ;
        return resp3;
    }

    onClick = (event) => {

        switch (event.target.value) {//set class
            case 'forever':
                this.setState({
                    class1: 'col ml-2 btn btn-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'amigos':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'morir':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
        }

        switch (event.target.name) {
            case 'q3':
                this.setState({status3: true, valor3:event.target.value});
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>¿Qué ambiente te traes?</h1>
            </div>
            <button className={this.state.class1} onClick={this.onClick} name="q3" id="r1" value="forever">Forever alone</button>
            <button className={this.state.class2} onClick={this.onClick} name="q3" id="r2" value="amigos">Chelas con los amigos</button>
            <button className={this.state.class3} onClick={this.onClick} name="q3" id="r3" value="morir">Peda hasta morir</button>
            
        </div>
      );
    }
  }

  class FourStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fourStep: "CUARTA PREGFUNTA",
        'class1': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class2': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class3': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class4': 'col ml-2 btn btn-outline-primary',
      };
    }

    state = { 
        status4: ""
    }

    isValidated() {
        var resp4 = (this.state.status4 == true) ? true : false ;
        return resp4;
    }
    
    onClick = (event) => {

        switch (event.target.value) {//set class
            case 'perreo':
                this.setState({
                    class1: 'col ml-2 btn btn-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'luismi':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'rock':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'banda':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
        }

        switch (event.target.name) {
            case 'q4':
                this.setState({status4: true, valor4:event.target.value});
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>¿Qué tipo de música te gusta escuchar?</h1>
            </div>
            <button className={this.state.class1} onClick={this.onClick} name="q4" id="r1" value="perreo">Perreo intenso</button>
            <button className={this.state.class2} onClick={this.onClick} name="q4" id="r2" value="luismi">Luismi y pop</button>
            <button className={this.state.class3} onClick={this.onClick} name="q4" id="r3" value="rock">Rock y metal</button>   
            <button className={this.state.class4} onClick={this.onClick} name="q4" id="r4" value="banda">Banda y cumbion</button>
        </div>
      );
    }

  }

  class FiveStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fiveStep: "QUINTA PREGUNTA",
        'class1': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class2': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class3': 'col ml-2 btn btn-outline-primary',//class define el style del button, en el state sera modificado
        'class4': 'col ml-2 btn btn-outline-primary',
      };
    }
    
    onClick = (event) => {

        switch (event.target.value) {//set class
            case '2040':
                this.setState({
                    class1: 'col ml-2 btn btn-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case '5080':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case '90120':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case '500':
                this.setState({
                    class1: 'col ml-2 btn btn-outline-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
        }

        switch (event.target.name) {
            case 'q5':
                this.setState({status5: true, valor5:event.target.value});
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>¿Cuanto estás dispuesto a pagar por una chela?</h1>
            </div>
            <button className={this.state.class1} onClick={this.onClick} name="q5" id="r1" value="2040">20-40</button>
            <button className={this.state.class2} onClick={this.onClick} name="q5" id="r2" value="5080">50-80</button>
            <button className={this.state.class3} onClick={this.onClick} name="q5" id="r3" value="90120">90-120</button>
            <button className={this.state.class4} onClick={this.onClick} name="q5" id="r3" value="500">Un Bénito de los nuevos</button>
        </div>
      );
    }

  }

var steps = [
    
    { stepName: "1", component: FirstStep },
    { stepName: "2", component: SecondStep },
    { stepName: "3", component: ThirdStep },
    { stepName: "4", component: FourStep },
    { stepName: "5", component: FiveStep }
];
  

class Questions extends Component { 

    state = {
        chelas: [],
        vacio: ''
    };

    finishButtonClick = (allStates) => {

        URL = 'https://beermatch-backend.herokuapp.com/api/v1/cervezas?sabor='+ allStates.valor1 +'&color='+ allStates.valor2;
        axios
            .get(URL)
            .then( respuesta => {
                this.setState({
                    chelas: respuesta.data,
                    vacio: 'ok'
                })
            })
            .catch(error => {
                this.setState({
                    chelas: '',
                    vacio: ''
                })
            });
    }
    

    render() { 
        /* const { sabor } = this.state; */
        return ( 
            <div style={{ marginTop: "15px" }}>
                <Row>
                    <Col xs={12} md={6} className="mr-auto ml-auto">
                        <ReactWizard
                        steps={steps}
                        navSteps
                        title="MATCHBEER"
                        description="Busca tu chela ideal"
                        headerTextCenter
                        validate
                        color="blue"
                        finishButtonClick={this.finishButtonClick}
                        />
                    </Col>
                    <Col xs={12} md={6} className="" style={{border: '0px'}}>
                        <div>
                            {   
                                this.state.vacio ?
                                    this.state.chelas.map( chela => {
                                        return <Chela
                                            key={chela._id}
                                            nombre={chela.nombre}
                                            estilo={chela.estilo}
                                            cerveceria={chela.cerveceria}
                                            imagen={chela.imagen}
                                            sabor={chela.sabor}
                                            color={chela.color}
                                            precio={chela.precio}
                                        />
                                    })
                                :
                                <div className="card">
                                    <h2>Sugerencia del Dia</h2>
                                    <div className="card-body">
                                        <img className="img-thumbnail" style={{width: '290px', border: '0px'}} src="http://dcervezas.com/199-large_default/cerveza-belga-lindemans-kriek.jpg"/>
                                        <h2><b>$60</b></h2>
                                        <h5 className="card-title">Lambic - Lindemans</h5>
                                        <p className="card-text"><i>Frutal | Mixto</i></p>
                                        <a href="#" className="btn btn-primary">Dame mi chela</a>
                                    </div>
                                </div>
                            }
                            
                        </div>
                    </Col>
                </Row>
            </div>
         );
    }
}

ReactDOM.render(<Questions />, document.getElementById("root"));

export default Questions;