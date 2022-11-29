import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function NavbarComp() {
    const linkStyle = {
        textDecoration: 'none',
        color: '#000',
        marginLeft: '20px'
    }
    const logoStyle = {
        fontSize : '30px',
        fontWeight: '900',
        color: 'red'
    }
  return (
    <Navbar bg="#fff" style={{position:'sticky', top:0, boxShadow:'none'}}>
      <Container>
        <Navbar.Brand style={logoStyle} ><b>FUDATOO</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link style = {linkStyle} to="/">Home</Link>
            <Link style = {linkStyle} to="/menu">List</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;