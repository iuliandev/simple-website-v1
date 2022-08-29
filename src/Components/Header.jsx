import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from './logo192.png'

export const Header = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand as={Link} to='/'>
                <img 
                    src={logo}
                    height='30'
                    width='30'
                    alt='logo'
                    className='d-inline-block align-top'
                /> React-WebSite
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Container className='d-md-flex justify-content-between'>
                    <Nav className='mr-auto'>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About us</Nav.Link>
                        <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                    </Nav>
                    <Form className='d-flex'>
                        <FormControl 
                            type='text'
                            placeholder='Search'
                            className='mr-sm-2 me-2'
                        />
                        <Button variant='outline-info'>Search</Button>
                    </Form>
                </Container>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
