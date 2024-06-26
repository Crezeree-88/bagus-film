import { Navbar, Container, Nav,} from "react-bootstrap" 

const NavigationBar = () => {
    return (
    <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">BAGUSFILM</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#Tranding">TRENDING</Nav.Link>
                        <Nav.Link href ="#superhero">SUPERHERO</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar