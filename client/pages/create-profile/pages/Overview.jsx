
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ResumeImport.module.css";
import CreateProfileNav from '@/components/CreateProfileNav';
import Select from 'react-select'


const Overview = () => {


  return (
      <>
          <CreateProfileNav />
          <Container className='mt-5 pt-5 pb-5 mb-5 h-100 ' fluid>
              <Row className='px-4'>
                  <Col xl={7} className='ps-3'>
                    <Row  className='mt-5 justify-content-center ps-4'>
                        <Col xl={11}>
                            <p className='fs-14 text-gray'>11/14</p>
                            <h1 className='title mt-2'>Great! Now write a bio to tell the world <br /> about yourself.</h1>
                            <p className='fw-semibold'>Help people get to know you at a glance. What work are you best at? Tell them clearly, using <br /> paragraphs or bullet points. You can always edit later - just make sure you proofread now!</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-between'>
                        <Col className='mt-4'  xl={11}>
                            <div className=' ms-5 me-5'>
                                <div className='px-3 d-flex flex-column'>
                                  <label htmlFor="skills" className='fw-semibold mb-2'>Your overview</label>
                                  <textarea rows={7} className='form-control shadow-none fs-14' placeholder='Enter your top skills, experiences, and interests. This is one of the first things clients will see on your profile.'></textarea>
                                  <div className="text-end">
                                    <p className='text-muted fs-11 fw-semibold mt-1'>Atleast 100 characters</p>
                                  </div>
                                </div>
                                {/* <div>
                                  {selectedSkills.map((option) => (
                                    <span key={option.value}>{option.label}, </span>
                                  ))}
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                  </Col>
                  <Col xl={5} className="d-flex justify-content-end mt-5">
                    <Card className='w-350 rounded-10 me-5'>
                        <Card.Header className='bg-white d-flex justify-content-center border-0 rounded-10 pt-5'>
                          <div class="air3-presence-container">
                          <span className='bg-green rounded-100' style={{width: '15px', height: '15px'}}></span>
                          <picture>
                            <source srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" media="(max-width: 699.98px)" /> 
                            <img width="128" height="128" loading="lazy" src="https://www.upwork.com/nx/create-profile/nx/create-profile/img/beard-man-avatar-new.37c405a.png" alt="Sasheen M." class="air3-avatar air3-avatar-128" />
                          </picture>
                          <div class="air3-badge-tier-sm ">
                            <div class="air3-icon sm">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.911 18.594c.3 1.096-.897 1.893-1.793 1.295l-4.086-2.69-4.085 2.69c-.897.598-2.092-.299-1.793-1.295L7.25 13.91l-3.787-3.09c-.896-.697-.398-2.092.698-2.191l4.882-.3 1.794-4.583c.398-.996 1.893-.996 2.291 0l1.794 4.584m2.491.3v6.974M21 12.117h-6.975"></path></svg></div>
                            </div>
                          </div>
                        </Card.Header>
                        <Card.Body className='text-center'>
                          <h2>Sasheen M.</h2>
                          {/* <p className='fw-semibold'>Customer Experience Consultant</p> */}
                          <div className="d-flex justify-content-around px-5">
                            <div className="d-flex">
                              <div>
                                <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.142 3.813l1.782 4.802 4.927.275c.243.013.477.104.672.26.194.156.338.37.415.615.077.245.082.508.015.756a1.288 1.288 0 01-.391.633L16.726 14.4l1.282 4.993c.06.252.047.517-.038.76a1.285 1.285 0 01-.437.606c-.2.15-.439.234-.684.24a1.174 1.174 0 01-.693-.21L12 17.976 7.854 20.77a1.175 1.175 0 01-.69.214 1.178 1.178 0 01-.684-.233 1.283 1.283 0 01-.441-.599 1.36 1.36 0 01-.047-.757l1.272-4.972-3.826-3.268a1.288 1.288 0 01-.391-.633 1.349 1.349 0 01.015-.756 1.28 1.28 0 01.415-.615c.195-.156.429-.247.672-.26l4.927-.275 1.782-4.802c.092-.24.25-.446.454-.59a1.177 1.177 0 011.376-.001c.204.145.361.35.454.59z" clipRule="evenodd"></path></svg>
                              </div>
                              <div className="">
                                <p className='fw-semibold text-muted'>5.0</p>
                              </div>
                            </div>
                            <div>
                              <p className='fw-semibold text-muted'>$65.00/hr</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z" clipRule="evenodd"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"></path></svg>
                                </div>
                                <div className="">
                                  <p className='fw-semibold text-muted'>14 jobs</p>
                                </div>
                            </div>
                          </div>
                          <div className=' mt-2 mb-5'>
                            <h5 className='title '>
                            “I’m a developer with experience in building websites for small and medium sized businesses. Whether you’re trying to win work, list your services or even create a whole online store – I can help!
                            </h5>
                            <ul className='mt-3'>
                              <li className='h6 fs-14'>I’m experienced in HTML and CSS 3, PHP, jQuery, WordpPess and SEO</li>
                              <li className='h6 fs-14'>I’ll fully project manage your brief from start to finish</li>
                              <li className='h6 fs-14'>Regular communication is really important to me, so let’s keep in touch!”</li>
                            </ul>
                          </div>
                        </Card.Body>
                      </Card>
                  </Col>
              </Row>
          </Container> 
          
          <Navbar bg="white" expand="lg" fixed='bottom' className='mb-3'>
              <Container fluid className='d-flex flex-column p-0 m-0'>
                  <div className="d-flex w-100">
                      <div className={styles.pageRange + ' w-400 rounded-pill'}></div>
                      <div className={styles.pageRangeGray + ' w-100'}></div>
                  </div>
                  <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                      <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/skills">
                      Back 
                      </Link>
                      <div className='d-flex justify-content-between'>
                          <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/categories">
                              Next, choose your categories
                          </Link>
                      </div>
                  </div>
              </Container>
          </Navbar>
      </>
  )
}

export default Overview