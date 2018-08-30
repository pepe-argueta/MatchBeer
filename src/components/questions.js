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
        firstStep: "Bienvenida"
      };
    }
    render() {
      return <div>Aqui la Bienvenida y/o Logina Primer Paso</div>;
    }
  }
  class SecondStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        secondStep: "Primera Pregunta"
      };
    }

    state = { 
        respond1: "false"
    }

    isValidated() {
    
    const resp = false;
      // do some validations
      // decide if you will
      return resp;
      // or you will
      // return false;
    }

    onInputChange = (event) => {
        switch (event.target.name) {
            case 'respond1':
                this.setState({respond1: true});
                break;
        }
    
    }
    render() {
      return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h1>Pregunta 1</h1>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" onChange={this.onInputChange} id="customRadio1" name="respond1" class="custom-control-input"/>
                <label class="custom-control-label" for="customRadio1">Resp1</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" onChange={this.onInputChange} id="customRadio2" name="respond1" class="custom-control-input"/>
                <label class="custom-control-label" for="customRadio2">Resp2</label>
            </div>
        </div>
      );
    }
  }
  class ThirdStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "Segunda Pregunta"
      };
    }
    render() {
      return <div>Aqui va la Segunda Pregunta</div>;
    }
  }

  class FourStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "Tercera Pregunta"
      };
    }
    render() {
      return <div>Aqui va la Tercera Pregunta</div>;
    }
  }

  class FiveStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "Cuarta Pregunta"
      };
    }
    render() {
      return <div>Aqui va la Cuarta Pregunta</div>;
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