import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

const freelance = () => {
  return (
    <>
        <Navbar bg="white" expand="lg" fixed='top' className='pt-2 pb-3 px-3 '>
            <Container fluid >
                <Navbar.Brand href="/">
                <svg width={82}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 28" role="img" aria-hidden="true"><path fill="#14a800" d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path><path fill="#14a800" d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path><polygon fill="#14a800" points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon><path fill="#14a800" d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path><path fill="#14a800" d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"></path>
                </svg>
                </Navbar.Brand>
                <Navbar.Brand href="/" className='fs-16'>
                    Here to hire talent? <span>Join as a Client</span>
                </Navbar.Brand>
            </Container>
        </Navbar>

        <Container fluid className='pt-5 mt-5'>
            <Row className='justify-content-center'>
                <Col xs={4}>
                    <Card className='bg-white br-10 h-100 d-flex flex-column mt-4 justify-content-center align-items-center py-2'>
                        <Card.Header className='bg-white br-10 border-0 mt-2'>
                            <h4 >Log in to Upwork</h4>
                        </Card.Header>
                        <Card.Body className='px-5 w-100'>
                            <Form className=' px-4 w-100'>
                                <Form.Group className="mb-3 w-100 d-flex br-10 align-items-center border border-2 px-3" controlId="formBasicEmail">
                                    <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" width={15} viewBox="0 0 14 14" role="img"><path d="M7 8c-3.314 0-6 1.85-6 3.297v2.027c0 .373.358.676.8.676h10.4c.442 0 .8-.303.8-.676v-2.027C13 9.85 10.314 8 7 8zm3-5a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <Form.Control type="email" placeholder="Username or Email" className='border-0 shadow-none' />
                                </Form.Group>
                                <Button  className="mb-3 bg-green border-0 py-2 shadow-none w-100 rounded-pill mt-1 fw-bold-5">
                                    Continue with Email
                                </Button>
                                <p className="btn-separator my-3"><span className='mx-5'>or</span></p>
                                <Button className="mb-3 border-0 mt-4 pad-1 px-1 google-btn shadow-none w-100 rounded-pill d-flex align-items-center mt-1 fw-bold-5">
                                    <span className='google-btn-label text-center'>
                                        Continue with Google
                                    </span>
                                </Button>

                                <Button variant='white' className="mb-3 border d-flex align-items-center justify-content-center  mt-4  px-1  shadow-none w-100 rounded-pill d-flex align-items-center mt-1 fw-bold-5">
                                    <svg width="3.8469mm" height="4.7625mm" version="1.1" viewBox="0 0 3.8469 4.7625" xmlns="http://www.w3.org/2000/svg" data-v-7b8c874d=""><g transform="translate(-64.345 -143.35)" data-v-7b8c874d=""><path d="m65.3 148.04c-0.28391-0.17313-0.67141-0.76332-0.84045-1.2801-0.08795-0.26886-0.11025-0.42084-0.11353-0.77372-5e-3 -0.53416 0.07013-0.78453 0.32071-1.0692 0.32908-0.37386 0.80475-0.48983 1.2754-0.31094 0.28741 0.10923 0.40289 0.10558 0.79215-0.0251 0.25755-0.0864 0.3669-0.10301 0.53413-0.0809 0.27892 0.0369 0.51512 0.14539 0.6838 0.31406l0.138 0.138-0.15036 0.12394c-0.35848 0.29549-0.46412 0.84523-0.24639 1.2822 0.09783 0.19631 0.33073 0.42321 0.48834 0.47574 0.07682 0.0256-0.27148 0.68647-0.49609 0.94128-0.31615 0.35864-0.47304 0.40634-0.86417 0.26274-0.38534-0.14149-0.49243-0.14492-0.83466-0.0268-0.37222 0.12848-0.51369 0.13441-0.68687 0.0288zm0.95956-3.6652c-0.04406-0.11481 0.09887-0.49259 0.25567-0.67578 0.14967-0.17485 0.45436-0.3477 0.61294-0.3477 0.08074 0 0.08756 0.0177 0.06932 0.17944-0.0488 0.43295-0.36807 0.79774-0.77487 0.88535-0.10672 0.0229-0.14178 0.0141-0.16305-0.0413z" data-v-7b8c874d=""></path></g></svg>
                                    <span className='mx-2'>
                                        Continue with Apple
                                    </span>
                                </Button>
                                <div className="line-heading pb-10 my-10 text-muted">
                                    Don't have an Upwork account?
                                </div>
                                <div className="mx-5 px-3">
                                    <Link href='/signup' className='text-decoration-none text-success  shadow-none'>
                                        <Button  variant="outline-success"  className="mb-3 border-2 signup-btn py-1 shadow-none w-100 rounded-pill mt-4 fw-bold-5">
                                                Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <footer  className="footer-visitor-skinny mt-5 mb-4 py-5 mx-2">
                <div className="container-visitor pt-1">
                    <p className="up-footer-copyright fs-14">
                        <small>© 2015 - 2023 Upwork® Global Inc.</small> 
                        <small className="up-footer-decoration"> •  </small> 
                        <a href="/legal#privacy" target="_self" className="text-white text-decoration-none fs-12">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </footer>
        </Container>
    </>
  )
}


export default freelance