import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className='Intro'>
          <Container className="text-white text-center d-flex justify-content-center
          align-items-center">
            <Row>
              <Col>
                <div className='tittle'>NONTON GRATIS</div>
                <div className='tittle'>GA PERLU KARCIS</div>
                    <div className='introButton mt-4 text-center'>
                        <Button variant='dark'>Lihat Selengkapnya</Button>
                    </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro