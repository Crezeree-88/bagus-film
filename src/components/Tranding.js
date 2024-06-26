import { Card, Col, Container, Row, Image} from "react-bootstrap"
import luca from "../Assets/image/trending/luca.jpg"
import thegooddino from "../Assets/image/trending/thegooddino.jpg"
import toystory3 from "../Assets/image/trending/toystory3.jpg"

const Tranding = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="Tranding">
                        <Card className="movieImage">
                            <Image src={luca} alt="Luca" className="tranding"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">LUCA</Card.Title>
                                    <Card.Text className="text-left">
                                    Luca Paguro adalah monster laut pra-remaja yang tinggal di lepas pantai kota Portorosso, Italia, yang menghabiskan hari-harinya menggembalakan sekumpulan ikan. 
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={thegooddino} alt="thegooddino" className="tranding"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THE GOOD DINOSAUR</Card.Title>
                                    <Card.Text className="text-left">
                                    kisah persahabatan, kerinduan akan keluarga, dan mengatasi ketakutan yang terjadi dalam garis waktu sejarah alternatif sebelum manusia mulai memberikan dampak serius di Bumi.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={toystory3} alt="toystory3" className="tranding"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">TOY STORY 3</Card.Title>
                                    <Card.Text className="text-left">
                                    Woody selalu merasa percaya diri akan posisinya di dunia, dan prioritasnya
                                    adalah menjaga anaknya, baik itu Andy atau Bonnie. Namun ketika Bonie
                                    menambahkan sebuah mainan baru bernama Forky dalam kamar mainya, sebuah
                                    pengembaraan bersama teman-teman lama dan baru akan membawa Woody
                                    untuk menyaksikan betapa besarnya dunia ini bagi sebuah mainan
                                    seperti dirinya.
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

export default  Tranding