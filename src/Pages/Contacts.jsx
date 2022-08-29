import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Contacts = () => {
  return (
    <div style={{marginTop: 80}}>
        <Container style={{width: '500px'}}>
            <h1 className='text-center'>Contact us</h1>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type='email'
                        placeholder='Your email'
                    />
                    <Form.Text>We'll never share your email with anyone else</Form.Text>
                </Form.Group>
                
                <Form.Group controlId='formBasicMessage' className='mt-3'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as='textarea' rows='3'
                    />
                </Form.Group>

                <Form.Group controlId='formBasicCheckbox' className='mt-3'>
                    <Form.Check
                        type='checkbox'
                        label='Check me out'
                    />
                </Form.Group>

                <Button variant='primary' type='submit' className='mt-3 px-5'>Submit</Button>
            </Form>
        </Container>
    </div>
  )
}

export default Contacts