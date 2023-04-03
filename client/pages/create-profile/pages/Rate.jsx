import { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { BiDollar, BiTimeFive } from "react-icons/bi";
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ResumeImport.module.css";
import CreateProfileNav from '@/components/CreateProfileNav';
import Select from 'react-select'
import { FaPlus, FaRegTimesCircle } from 'react-icons/fa';

const Rate = () => {

    return (
        <>
            <CreateProfileNav />

            <Container className='mt-5 pt-5 pb-3 h-100 ' fluid>
              <Row  className='mt-5  justify-content-center px-4'>
                <Col xl={11}>
                  <p className='fs-14 text-gray'>13/14</p>
                  <h1 className='title'>Now, let’s set your hourly rate.</h1>
                  <p className='fw-semibold'>Clients will see this rate on your profile and in search results once you publish your profile. You can adjust your rate every time you submit a proposal.</p>
                </Col>
              </Row>
              <Row className='justify-content-start px-4'>
                  <Col className='mt-3 ms-5 ' xl={11}>
                      <div className='d-flex justify-content-between ms-3 pb-4 border-bottom'>
                        <div className="">
                          <div className="d-flex justify-content-start p-0 m-0">
                            <h5>Hourly rate</h5>
                            <Link href='/' className='ms-3 text-green fw-semibold'>Learn more</Link>
                          </div>
                          <h6 className='mt-2'>Total amount the client will see.</h6>
                        </div>
                        <div className='d-flex align-items-end'>
                          <div className="form-control d-flex align-items-center ">
                            <BiDollar size={23}/>
                            <input type="text" className='border p-0 ms-2 border-0 shadow-none form-control' placeholder='0.00'/>
                          </div>
                          <h6 className="text-muted ms-3"> /hr</h6>
                        </div>
                      </div>
                  </Col>
                  <Col className='mt-3 ms-5 ' xl={11}>
                      <div className='d-flex justify-content-between ms-3 pb-4 border-bottom'>
                        <div className="">
                          <div className="d-flex justify-content-start p-0 m-0">
                            <h5>Service fee</h5>
                            <Link href='/' className='ms-3 text-green fw-semibold'>Learn more</Link>
                          </div>
                          <h6 className='mt-2'>This helps us run the platform and provide services like payment protection and customer support.</h6>
                        </div>
                        <div className='d-flex align-items-end'>
                          <div className="form-control d-flex align-items-center bg-gray">
                            <BiDollar size={23}/>
                            <input type="text" readOnly className='bg-gray border p-0 ms-2 border-0 shadow-none form-control' placeholder='0.00'/>
                          </div>
                          <h6 className="text-muted ms-3"> /hr</h6>
                        </div>
                      </div>
                  </Col>
                  <Col className='mt-3 ms-5 ' xl={11}>
                      <div className='d-flex justify-content-between ms-3 pb-4 border-bottom'>
                        <div className="">
                          <div className="d-flex justify-content-start p-0 m-0">
                            <h5>You'll get</h5>
                          </div>
                          <h6 className='mt-2'>The estimated amount you’ll get paid after service fees.</h6>
                        </div>
                        <div className='d-flex align-items-end'>
                          <div className="form-control d-flex align-items-center ">
                            <BiDollar size={23}/>
                            <input type="text" className='border p-0 ms-2 border-0 shadow-none form-control' placeholder='0.00'/>
                          </div>
                          <h6 className="text-muted ms-3"> /hr</h6>
                        </div>
                      </div>
                  </Col>
              </Row>
            </Container> 
            
            <Navbar bg="white" expand="lg" fixed='bottom' className='mb-3'>
                <Container fluid className='d-flex flex-column p-0 m-0'>
                    <div className="d-flex w-100">
                        <div className={styles.pageRange + ' w-100 rounded-pill'}></div>
                        <div className={styles.pageRangeGray + ' w-10'}></div>
                    </div>
                    <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                        <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/categories">
                        Back 
                        </Link>
                        <div className='d-flex justify-content-between'>
                            <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/location">
                                Next, add your photo and location
                            </Link>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Rate