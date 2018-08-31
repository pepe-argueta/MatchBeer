import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col } from "reactstrap";
import "react-bootstrap-wizard/dist/react-wizard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class FirstStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstStep: "PRIMERA PREGUNTA",
        'class': 'col ml-2 btn btn-outline-primary'
      };
    }
    
    state = { 
        status1: ""
    }

    isValidated() {
        var resp1 = (this.state.status1 == true) ? true : false ;
        console.log(resp1);
        return resp1;
    }

    onClick = (event) => {
        switch (event.target.name) {
            case 'q1':
                this.setState({status1: true, valor1:event.target.id});
                console.log(event.target.name);
                console.log(event.target.value);
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>Pregunta 1</h1>
            </div>
            <button type="button" className={this.state.class} onClick={this.onClick} name="q1" id="r1" value="1">R1</button>
            <button type="button" className={this.state.class} onClick={this.onClick} name="q1" id="r2" value="2">R2</button>
            <button type="button" className={this.state.class} onClick={this.onClick} name="q1" id="r3" value="3">R3</button>
            
        </div>
      );
    }

  }//FIN STEP 1

  class SecondStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        secondStep: "SEGUNDA PREGUNTA"
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
        switch (event.target.name) {
            case 'q2':
                this.setState({status2: true, valor2:event.target.id});
                console.log(event.target.name);
                console.log(event.target.value);
                break;
        }
    }

    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>Pregunta 2</h1>
            </div>
            <button type="button" classNameclassName="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q2" id="r1" value="1">R1</button>
            <button type="button" classNameclassName="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q2" id="r2" value="2">R2</button>
            <button type="button" classNameclassName="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q2" id="r3" value="3">R3</button>
            
        </div>
      );
    }
  }//Fin STEP 2

  class ThirdStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "Segunda Pregunta"
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
                this.setState({status3: true, valor3:event.target.id});
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
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q3" id="r1" value="1">R1</button>
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q3" id="r2" value="2">R2</button>
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q3" id="r3" value="3">R3</button>
            
        </div>
      );
    }
  }

  class FourStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "Tercera Pregunta"
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
                this.setState({status4: true, valor4:event.target.id});
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
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q4" id="r1" value="1">R1</button>
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q4" id="r2" value="2">R2</button>
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q4" id="r3" value="3">R3</button>
            
        </div>
      );
    }

  }

  class FiveStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "Cuarta Pregunta"
      };
    }
    
    onClick = (event) => {
        switch (event.target.name) {
            case 'q5':
                this.setState({status5: true, valor5:event.target.id});
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
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q5" id="r1" value="1">R1</button>
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q5" id="r2" value="2">R2</button>
            <button type="button" className="col ml-3 btn btn-outline-primary" onClick={this.onClick} name="q5" id="r3" value="3">R3</button>
            
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
    
    finishButtonClick(allStates) {
        console.log(allStates);
    }
    

    render() { 
        return ( 
            <Container style={{ marginTop: "15px" }}>
                <Row>
                    <Col xs={12} md={12} className="mr-auto ml-auto">
                        <ReactWizard
                        steps={steps}
                        navSteps
                        title="MATCHBEER"
                        description="**Descripcion texto o imagen"
                        headerTextCenter
                        validate
                        color="blue"
                        finishButtonClick={this.finishButtonClick}
                        />
                    </Col>
                </Row>
            </Container>
         );
    }
}

ReactDOM.render(<Questions />, document.getElementById("root"));

export default Questions;