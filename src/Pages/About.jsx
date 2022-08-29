import React from 'react'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'

const About = () => {
  return (
    <div style={{marginTop: 60}}>
        <Container>
            <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={3}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <img 
                                    src='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif'
                                    alt='Design'
                                    className='img-fluid'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <img 
                                    src='https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    alt='Design'
                                    className='img-fluid'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <img 
                                    src='https://pcstartup.xyz/wp-content/uploads/2021/12/Programming-Language-Popularity.jpg'
                                    alt='Design'
                                    className='img-fluid'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fourth'>
                                <img 
                                    src='https://xcgtech.com/wp-content/uploads/2020/09/web_application_framework-01.png'
                                    alt='Design'
                                    className='img-fluid'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fifth'>
                                <img 
                                    src='https://www.vervelogic.com/blog/wp-content/uploads/2019/08/How-LMS-works.png'
                                    alt='Design'
                                    className='img-fluid'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    </div>
  )
}

export default About