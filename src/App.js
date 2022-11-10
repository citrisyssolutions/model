import React from 'react';
import{Link}from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">VISHWAMEVA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link classname="text-danger" className="justfy-content-end" as={Link} to={"/"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                  <NavDropdown title="LOGIN" id="basic-nav-dropdown">
                    <NavDropdown.Item >Signin</NavDropdown.Item>
                    <NavDropdown.Item>Singup</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                   
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
      </div>
  );
}
export default App;