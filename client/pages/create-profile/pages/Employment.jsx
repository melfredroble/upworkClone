"use client";

import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from "../../../styles/Employment.module.css";
import CreateProfileNav from '@/components/CreateProfileNav';
import { FaPlus } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select'
import axios from 'axios';



const Employment = ({countriesData}) => {

  const [showModal, setShowModal] = useState(false)
  const [country, setCountry] = useState('Philippines')

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const initialValues = {
    title: '',
    company: '',
    location: '',
    currStatus: '',
    startDate: '',
    endDate: '',

  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  }


  const countryOptions = countriesData.map(country => ({
        value: country.name,
        label: country.name
    }));

  const handleChange = (country) => {
      setCountry(country);
  };


  return (
    <>
    <CreateProfileNav />

    <Container className='mt-5 pt-5 pb-3 h-100 ' fluid>
      <Row  className='mt-5  justify-content-center px-4 '>
        <Col xl={11}>
          <p className='fs-14 text-gray'>7/14</p>
          <h1 className='title'>If you have relevant work experience, add it here.</h1>
          <p className='fw-semibold'>Freelancers who add their experience are twice as likely to win work. But if you’re just starting out, you can still create a great profile. Just head on to the next page.</p>
        </Col>
      </Row>
      <Row className='justify-content-start px-4 mx-5'>
          <Col className='mt-4 ' xl={4}>
              <Card className='py-3 px-3 rounded-10 border-dashed' style={{height: '250px'}}>
                <button className='d-flex flex-column justify-content-end w-100 h-100 btn btn-white shadow-none btn-focus-none'  onClick={handleShow}>
                  <div className='btn bg-green-200 rounded-circle' style={{width: '50px', height: '45px'}}>
                    <FaPlus className='text-white'/>
                  </div>
                  <h4 className='mt-3 text-muted'>Add experience</h4>
                </button>
              </Card>
              <div className='d-flex align-items-center mt-3'>
                <input type="checkbox" name="" id="" />
                <span className='ms-2'>Nothing to add? Check the box and keep going</span>
              </div>
          </Col>
      </Row>
    </Container> 
    
    <Navbar bg="white" expand="lg" fixed='bottom' className='mb-3'>
        <Container fluid className='d-flex flex-column p-0 m-0'>
            <div className="d-flex w-100">
                <div className={styles.pageRange + ' w-100 rounded-pill'}></div>
                <div className={styles.pageRangeGray + ' w-100'}></div>
            </div>
            <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/title">
                Back 
                </Link>
                <div className='d-flex justify-content-between'>
                    <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/education">
                        Next, add your education
                    </Link>
                </div>
            </div>
        </Container>
    </Navbar>


    <Modal show={showModal} onHide={handleClose} dialogClassName={styles.empModal} aria-labelledby="contained-modal-title-vcenter"
     centered >
        <Modal.Header closeButton className='border-0 shadow-none px-4'>
          <Modal.Title className='text-green h1 fs-32'>Add Work Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body className='border-0 px-4 py-0'>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form className='d-flex flex-column'>
                <label htmlFor="title" className='fw-semibold mb-2'>Title *</label>
                <Field type="text" id="title" name="title" placeholder='Ex: Software Engineer' className='form-control border border-2'/>
                <ErrorMessage name="title" />

                <label htmlFor="company" className='fw-semibold mt-3 mb-2'>Company *</label>
                <Field type="text" id="company" name="company" placeholder='Ex: Microsoft' className='form-control border border-2'/>
                <ErrorMessage name="company" />

                <label htmlFor="location" className='fw-semibold mt-3 mb-2'>Location</label>
                <div className='d-flex'>
                  <Field type="text" id="location" name="location" placeholder='Ex. London'  className='form-control border border-2 w-50'/>
                  <Select className=' w-50 ms-3' value={country} onChange={handleChange}  placeholder='Philippines' options={countryOptions} />
                </div>
                <ErrorMessage name="location" />

                <div className='d-flex align-items-center my-3'>
                  <input type="checkbox" name="currStatus" id="currStatus" />
                  <span className='ms-2'>I am currently working in this role</span>
                </div>

                <div className="d-flex" >
                  <div className='w-50'>
                    <label htmlFor="message" className='mb-2 fw-semibold '>Start Date *</label>
                    <div className='d-flex'>
                      <Select className=' w-50 ' value={country} onChange={handleChange}  placeholder='Month' options={countryOptions} />
                      <Select className=' w-50 ms-3' value={country} onChange={handleChange}  placeholder='Year' options={countryOptions} />
                    </div>
                  </div>
                  <div className='ms-3 w-50'>
                    <label htmlFor="message" className='mb-2 fw-semibold ' >End Date *</label>
                    <div className='d-flex'>
                      <Select className=' w-50' value={country} onChange={handleChange}  placeholder='Month' options={countryOptions} />
                      <Select className=' w-50 ms-3' value={country} onChange={handleChange}  placeholder='Year' options={countryOptions} />
                    </div>
                  </div>
                </div>
                <label htmlFor="message" className='mt-3 mb-2 fw-semibold '>Description</label>
                <Field as='textarea' id="message" name="message" className='form-control border border-2 shadow-none'/>

                <div className='text-end mt-3'>
                  <Button variant="success" type="submit" disabled={isSubmitting} className='rounded-pill px-4'>
                    Save
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer className='border-0'>
        </Modal.Footer>
      </Modal>
</>
  )
}

export default Employment