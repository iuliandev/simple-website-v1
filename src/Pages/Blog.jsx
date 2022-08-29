import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

const Blog = () => {
  return (
    <div style={{marginTop: 60}}>
        <Container>
            <Row>
                <Col md='9'>
                    <Card className='m-5'>
                        <Row>
                            <Col md='4'>
                                <img 
                                    src='https://www.computerhope.com/jargon/j/javascript.png'
                                    className='img-fluid'
                                    alt='post img'
                                />
                            </Col>
                            <Col md='8'>
                                <Card.Body>
                                    <Card.Title>Blog title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </Card.Text>
                                    <Button variant='primary'>Read more</Button>
                                </Card.Body>
                            </Col>
                        </Row>  
                    </Card>

                    <Card className='m-5'>
                        <Row>
                            <Col md='4'>
                                <img 
                                    src='https://www.computerhope.com/jargon/j/javascript.png'
                                    className='img-fluid'
                                    alt='post img'
                                />
                            </Col>
                            <Col md='8'>
                                <Card.Body>
                                    <Card.Title>Blog title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </Card.Text>
                                    <Button variant='primary'>Read more</Button>
                                </Card.Body>
                            </Col>
                        </Row>  
                    </Card>

                    <Card className='m-5'>
                        <Row>
                            <Col md='4'>
                                <img 
                                    src='https://www.computerhope.com/jargon/j/javascript.png'
                                    className='img-fluid'
                                    alt='post img'
                                />
                            </Col>
                            <Col md='8'>
                                <Card.Body>
                                    <Card.Title>Blog title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </Card.Text>
                                    <Button variant='primary'>Read more</Button>
                                </Card.Body>
                            </Col>
                        </Row>  
                    </Card>

                    <Card className='m-5'>
                        <Row>
                            <Col md='4'>
                                <img 
                                    src='https://www.computerhope.com/jargon/j/javascript.png'
                                    className='img-fluid'
                                    alt='post img'
                                />
                            </Col>
                            <Col md='8'>
                                <Card.Body>
                                    <Card.Title>Blog title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </Card.Text>
                                    <Button variant='primary'>Read more</Button>
                                </Card.Body>
                            </Col>
                        </Row>  
                    </Card>
                </Col>

                <Col md='3'>
                    <h5 className='mt-5 text-center'>Categories</h5>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>Html/CSS</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>Java</ListGroup.Item>
                            <ListGroup.Item>PHP</ListGroup.Item>
                            <ListGroup.Item>C++</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className='mt-3' bg='light'>
                        <Card.Body>
                            <Card.Title className='text-center'>Side widget</Card.Title>
                            <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Blog