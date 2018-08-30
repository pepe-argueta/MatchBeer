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
        firstStep: "first step here"
      };
    }
    render() {
      return <div>Hey from First</div>;
    }
  }
  class SecondStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        secondStep: "second step here"
      };
    }
    isValidated() {
      // do some validations
      // decide if you will
      return true;
      // or you will
      // return false;
    }
    render() {
      return <div>Hey from Second</div>;
    }
  }
  class ThirdStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        thirdStep: "third step here"
      };
    }
    render() {
      return <div>Hey from Third</div>;
    }
  }

var steps = [
    
    { stepName: "First", component: FirstStep },
    { stepName: "Second", component: SecondStep },
    { stepName: "Third", component: ThirdStep }
   /*  { stepName: "Four", component: FourStep },
    { stepName: "Five", component: FiveStep }, */
];
  

class Questions extends Component {
    
    finishButtonClick(allStates) {
        console.log(allStates);
    }

    render() { 
        return ( 
            <Container fluid style={{ marginTop: "15px" }}>
                <Row>
                <Col xs={12} md={6} className="mr-auto ml-auto">
                    <ReactWizard
                    steps={steps}
                    navSteps
                    title="react-wizard"
                    description="This will help you split a complicated flow or a complicated form in multiple steps."
                    headerTextCenter
                    validate
                    color="primary"
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