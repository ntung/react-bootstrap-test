import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container fluid>
        <Row className="jumbotron">
          <Col xs={12} sm={4}>
          <Button variant="primary">Click here</Button>
          </Col>
          <Col xs={12} sm={4}><h1>Next</h1></Col>
          <Col xs={12} sm={4}>Next</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
