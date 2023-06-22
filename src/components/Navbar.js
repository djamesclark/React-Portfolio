import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({page, setPage}) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutme" onClick={()=> setPage('about')}>About Me</Nav.Link>
                        <Nav.Link href="#portfolio" onClick={()=> setPage('portfolio')}>Portfolio</Nav.Link>
                        <Nav.Link href="#contact" onClick={()=> setPage('contact')}>Contact</Nav.Link>
                        <Nav.Link href="https://docs.google.com/document/d/1N1EJ9PQpNZlJvxwNYH2ix3AYEseuJ_CLZLTZ7fAKtt8/edit">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
