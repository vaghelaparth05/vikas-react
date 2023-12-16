import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
function App() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">First</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#second">Second</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#third">Third</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#forth">forth</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#fifth">fifth</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      
    </Card>
  );


  
}



export default App;



