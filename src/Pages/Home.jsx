import React from 'react'
import { Button, Card, CardImg, Container, Row, Col } from 'react-bootstrap'
import { CarouselBox } from '../Components/CarouselBox'

const Home = () => {
  return (
    <div>
        <CarouselBox />
        <Container>
            <h2 className='text-center m-4'>Our team</h2>
            <Row xs='1' sm='2' md='3'>
                <Col>
                    <Card className='mx-1 my-3'>
                        <CardImg 
                            variant='top'
                            src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card className='mx-1 my-3'>
                        <CardImg 
                            variant='top'
                            src='https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        />
                        <Card.Body>
                            <Card.Title>Recruiters</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='mx-1 my-3'>
                        <CardImg 
                            variant='top'
                            src='https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        />
                        <Card.Body>
                            <Card.Title>Accounters</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home