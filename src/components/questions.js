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
                <h1>Que sabor prefieres?</h1>
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
        console.log(resp2);
        return resp2;
    }

    onClick = (event) => {

        switch (event.target.value) {//set class
            case 'Clara':
                this.setState({
                    class1: 'col ml-2 btn btn-primary',class2: 'col ml-2 btn btn-outline-primary',class3: 'col ml-2 btn btn-outline-primary',class4: 'col ml-2 btn btn-outline-primary',class5: 'col ml-2 btn btn-outline-primary',
                }); 
                break;
            case 'Obscura':
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
                <h1>Elige un Color?</h1>
            </div>
            <button className={this.state.class1} onClick={this.onClick} name="q2" id="r1" value="Clara">Clara</button>
            <button className={this.state.class2} onClick={this.onClick} name="q2" id="r2" value="Obscura">Obscura</button>
            <button className={this.state.class3} onClick={this.onClick} name="q2" id="r3" value="Mixto">Mixto</button>
            
        </div>
      );
    }
  }//Fin STEP 2

  class ThirdStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "TERCERA PREGUNTA",
        'class': 'col ml-2 btn btn-outline-primary'
      };
    }
    
    state = { 
        status3: ""
    }

    isValidated() {
        var resp3 = (this.state.status3 == true) ? true : false ;
        console.log(resp3);
        return resp3;
    }

    onClick = (event) => {
        switch (event.target.name) {
            case 'q3':
                this.setState({status3: true, valor3:event.target.value});
                console.log(event.target.name);
                console.log(event.target.value);
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>Pregunta 3</h1>
            </div>
            <button className={this.state.class} onClick={this.onClick} name="q3" id="r1" value="1">R1</button>
            <button className={this.state.class} onClick={this.onClick} name="q3" id="r2" value="2">R2</button>
            <button className={this.state.class} onClick={this.onClick} name="q3" id="r3" value="3">R3</button>
            
        </div>
      );
    }
  }

  class FourStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fourStep: "CUARTA PREGFUNTA",
        'class': 'col ml-2 btn btn-outline-primary'
      };
    }

    state = { 
        status4: ""
    }

    isValidated() {
        var resp4 = (this.state.status4 == true) ? true : false ;
        console.log(resp4);
        return resp4;
    }
    
    onClick = (event) => {
        switch (event.target.name) {
            case 'q4':
                this.setState({status4: true, valor4:event.target.value});
                console.log(event.target.name);
                console.log(event.target.value);
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>Pregunta 4</h1>
            </div>
            <button className={this.state.class} onClick={this.onClick} name="q4" id="r1" value="1">R1</button>
            <button className={this.state.class} onClick={this.onClick} name="q4" id="r2" value="2">R2</button>
            <button className={this.state.class} onClick={this.onClick} name="q4" id="r3" value="3">R3</button>
            
        </div>
      );
    }

  }

  class FiveStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fiveStep: "QUINTA PREGUNTA",
        'class': 'col ml-2 btn btn-outline-primary'
      };
    }
    
    onClick = (event) => {
        switch (event.target.name) {
            case 'q5':
                this.setState({status5: true, valor5:event.target.value});
                console.log(event.target.name);
                console.log(event.target.value);
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>Pregunta 5</h1>
            </div>
            <button className={this.state.class} onClick={this.onClick} name="q5" id="r1" value="1">R1</button>
            <button className={this.state.class} onClick={this.onClick} name="q5" id="r2" value="2">R2</button>
            <button className={this.state.class} onClick={this.onClick} name="q5" id="r3" value="3">R3</button>
            
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
                    <Col xs={12} md={6} className="mr-auto ml-auto">
                        <Container>
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
                                    <img className="img-rounded" src="http://dcervezas.com/199-large_default/cerveza-belga-lindemans-kriek.jpg"/>
                                    <div className="card-body">
                                        <h2><b>$60</b></h2>
                                        <h5 className="card-title">Lambic - Lindemans</h5>
                                        <p className="card-text"><i>Frutal | Mixto</i></p>
                                        <a href="#" className="btn btn-primary">Dame mi chela</a>
                                    </div>
                                </div>
                            }
                            
                        </Container>
                    </Col>
                </Row>
            </div>
         );
    }
}

ReactDOM.render(<Questions />, document.getElementById("root"));

export default Questions;