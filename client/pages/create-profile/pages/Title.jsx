import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { BiTimeFive } from "react-icons/bi";
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ResumeImport.module.css";
import CreateProfileNav from '@/components/CreateProfileNav';
import { AiOutlineLinkedin, AiOutlineUpload } from "react-icons/ai";

const Title = () => {

    const [ansOne, setAnsOne] = useState(false)
    const [ansTwo, setAnsTwo] = useState(false)
    const [ansThree, setAnsThree] = useState(false)
    const [btnShow, setBtnShow] = useState(false)

    

    return (
        <>
            <CreateProfileNav />

            <Container className='mt-5 pt-5 pb-3 h-100 ' fluid>
              <Row  className='mt-5  justify-content-center px-4'>
                <Col xl={11}>
                  <p className='fs-14 text-gray'>6/14</p>
                  <h1 className='title'>Got it. Now, add a title to tell the world what you do.</h1>
                  <p className='fw-semibold'>It’s the very first thing clients see, so make it count. Stand out by describing your expertise in your own words.</p>
                </Col>
              </Row>
              <Row className='justify-content-start px-4'>
                  <Col className='mt-4 ' xl={7}>
                      <div className=' ms-5 ps-3'>
                        <label htmlFor="" className='fw-semibold mb-3'>Your professional role</label>
                          <input type="text" className='w-100 border-2 border p-1 px-3 rounded-2' placeholder='professional role'/>
                      </div>
                  </Col>
              </Row>
            </Container> 
            
            <Navbar bg="white" expand="lg" fixed='bottom' className='mb-3'>
                <Container fluid className='d-flex flex-column p-0 m-0'>
                    <div className="d-flex w-100">
                        <div className={styles.pageRange + ' w-75 rounded-pill'}></div>
                        <div className={styles.pageRangeGray + ' w-100'}></div>
                    </div>
                    <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                        <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/resume-import">
                        Back 
                        </Link>
                        <div className='d-flex justify-content-between'>
                            <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/employment">
                                Next, add your experience
                            </Link>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Title