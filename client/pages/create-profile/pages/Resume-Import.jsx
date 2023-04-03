
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { BiTimeFive } from "react-icons/bi";
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ResumeImport.module.css";
import CreateProfileNav from '@/components/CreateProfileNav';
import { AiOutlineLinkedin, AiOutlineUpload } from "react-icons/ai";

const ResumeImport = () => {

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
                        <div className="d-flex">
                            <p className='fs-14 text-gray'>5/14</p>
                            <p className='fs-14 fw-semibold mx-3'>Create your profile</p>
                            <BiTimeFive size={24}/>
                            <p className='fs-14 text-gray ms-2'>5-10 min</p>
                        </div>
                        <h1 className='title mt-2'>How would you like to tell us about yourself?</h1>
                        <p className='fw-semibold'>We need to get a sense of your education, experience and skills. It’s quickest to import your information — you can edit it before your profile goes live.</p>
                    </Col>
                </Row>
                <Row className='justify-content-start'>
                    <Col className='mt-4'  xl={7}>
                        <div className=' ms-5 ps-4'>
                            <div className='px-2'>
                                <div className='border-green rounded-pill text-center'> 
                                    <button className='btn btn-white text-green fw-semibold btn-focus-none w-100'>
                                        <AiOutlineLinkedin size={25} style={{color: 'green'}}/> &nbsp;
                                        Import from LinkedIn
                                    </button>
                                </div>
                                <div className='border-green rounded-pill my-3  text-center'>
                                    <button className='btn btn-white text-green fw-semibold btn-focus-none'>
                                        <AiOutlineUpload size={25} style={{color: 'green'}}/> &nbsp;
                                        Upload your resume
                                    </button>
                                </div>
                                <div className='border-green rounded-pill text-center'>
                                    <Link href='/create-profile/title' className='btn btn-white text-green fw-semibold w-100 shadow-none btn-focus-none'>Fill out manually (15 min)</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={5}>
                        <div style={{background: '#f5f7f0'}} className=' w-50 rounded-10 py-3 px-4' >
                            <img data-v-c3743742="" alt="avatar" width="60" src="https://www.upwork.com/nx/create-profile/nx/create-profile/img/pro-tip-avatar.7e803ad.png" class="mb-4 upwork-pro-tip" />
                            <div>
                                <h4 className='title'>
                                    “Your Upwork profile is how you stand out from the crowd.It’s what you use to win work, so let’s make it a good one.”
                                </h4>
                                <p className='fw-semibold'> -- Upwork Pro Tip</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> 
            
            <Navbar bg="white" expand="lg" fixed='bottom' className='mb-3'>
                <Container fluid className='d-flex flex-column p-0 m-0'>
                    <div className="d-flex w-100">
                        <div className={styles.pageRange + ' w-56 rounded-pill'}></div>
                        <div className={styles.pageRangeGray + ' w-100'}></div>
                    </div>
                    <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                        <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/work-preference">
                        Back 
                        </Link>
                        <div className='d-flex justify-content-between'>
                            <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/title">
                                Continue editing your profile
                            </Link>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default ResumeImport