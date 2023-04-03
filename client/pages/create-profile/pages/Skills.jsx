
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ResumeImport.module.css";
import CreateProfileNav from '@/components/CreateProfileNav';
import Select from 'react-select'


const Skills = () => {

  const [selectedSkills, setSelectedSkills] = useState([])

  const skillsData = [
  {
    "skill_name" : "Javascript",
    "uuid" : "de9b9ed78d7e2e1dceeffee780e2f919"
  },
  {
    "skill_name" : "Programming",
    "uuid" : "04f99eb1151d9033ab1823eb82b8a8e5"
  },
  {
    "skill_name" : "Logic Programming",
    "uuid" : "17c4136a02e01c7b27fa3fc360c406cc"
  },
  {
    "skill_name" : "Software architecture",
    "uuid" : "5a1ec6e187e8f2cc37e1615211272c59"
  },
  {
    "skill_name" : "Oracle javaserver pages jsp",
    "uuid" : "65821708d91bd434eb7614bd493a991e"
  },
  {
    "skill_name" : "Sun microsystems java 2 platform enterprise edition j2ee",
    "uuid" : "3969d5d4a03b9f9fae765f425bbc9ff4"
  },
  {
    "skill_name" : "Oracle java 2 platform enterprise edition j2ee",
    "uuid" : "fd5269a86b7526a709220801f14d57f6"
  },
  {
    "skill_name" : "Xerces2 java parser",
    "uuid" : "bd44a6cb68147625f1a7e1dcf73a0640"
  },
  {
    "skill_name" : "Java profiler",
    "uuid" : "4de3023163eecffb2a7194a08c185b33"
  },
  {
    "skill_name" : "Sun microsystems java servlet api",
    "uuid" : "ecffd5adbb9465312d6290006996d414"
  },
  {
    "skill_name" : "Sun microsystems java",
    "uuid" : "30da491ae8edb2920db909cfd6be7681"
  },
  {
    "skill_name" : "Javamin composer",
    "uuid" : "ff30ae35a80a94c4e77c02413baa421c"
  },
  {
    "skill_name" : "Oralce java enterprise system",
    "uuid" : "8ccee48c50987ff63fb45478509ed127"
  }
]

  const skillsOptions = skillsData.map(skill => ({
      value: skill.skill_name,
      label: skill.skill_name
  }))

  
  const handleSelectSkills = (selected) => {
    setSelectedSkills(selected);
    console.log(selected[0]?.value)


  }


  return (
      <>
          <CreateProfileNav />
          <Container className='mt-5 pt-5 pb-5 mb-5 h-100 ' fluid>
              <Row  className='mt-5 justify-content-center px-4'>
                  <Col xl={11}>
                      <p className='fs-14 text-gray'>10/14</p>
                      <h1 className='title mt-2'>Nearly there! What work are you here to do?</h1>
                      <p className='fw-semibold'>Your skills show clients what you can offer, and help us choose which jobs to recommend to you. Add or remove the ones we’ve <br /> suggested, or start typing to pick more. It’s up to you.</p>
                  </Col>
              </Row>
              <Row className='justify-content-between px-3'>
                  <Col className='mt-4'  xl={6}>
                      <div className=' ms-5 ps-4'>
                          <div className='px-2'>
                            <label htmlFor="skills" className='fw-semibold mb-2'>Your skills</label>
                            <Select isMulti  className='w-100 fs-14' value={selectedSkills} placeholder='Enter skills here' onChange={handleSelectSkills} options={skillsOptions}/>
                          </div>
                          {/* <div>
                            {selectedSkills.map((option) => (
                              <span key={option.value}>{option.label}, </span>
                            ))}
                          </div> */}
                      </div>
                  </Col>
                  <Col xl={5}>
                      <div style={{background: '#f5f7f0'}} className=' w-350 rounded-10 py-3 px-4'>
                          <img data-v-c3743742="" alt="avatar" width="60" src="https://www.upwork.com/nx/create-profile/nx/create-profile/img/pro-tip-avatar.7e803ad.png"class="mb-4 upwork-pro-tip" />
                          <div>
                              <h4 className='title'>
                              “Upwork’s algorithm will recommend specific job posts to you based on your skills. So choose them carefully to get the best match!” 
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
                      <div className={styles.pageRange + ' w-240 rounded-pill'}></div>
                      <div className={styles.pageRangeGray + ' w-100'}></div>
                  </div>
                  <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                      <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/languages">
                      Back 
                      </Link>
                      <div className='d-flex justify-content-between'>
                          <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/overview">
                              Next, write an overview
                          </Link>
                      </div>
                  </div>
              </Container>
          </Navbar>
      </>
  )
}

export default Skills