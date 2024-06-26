import { Card, Col, Container, Row, Image} from "react-bootstrap"
import avengers from "../Assets/image/superhero/avengers.jpg"
import captainamerica from "../Assets/image/superhero/captainamerica.jpg"
import multiverse from "../Assets/image/superhero/multiverse.jpg"

const SuperHero= () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={avengers} alt="Luca" className="SuperHero"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AVENGERS</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={captainamerica} alt="captainamerica" className="SuperHero"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={multiverse} alt="multiverse" className="SuperHero"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">MULTIVERSE</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default  SuperHero