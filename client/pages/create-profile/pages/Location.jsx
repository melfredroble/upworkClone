import { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { Button, Card, Col, Row } from 'react-bootstrap'
import styles from "../../../styles/Location.module.css"
import CreateProfileNav from '@/components/CreateProfileNav'
import Select from 'react-select'
import Modal from 'react-bootstrap/Modal'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Rate = ({countriesData}) => {
  const [showModal, setShowModal] = useState(false)
  const [country, setCountry] = useState('Philippines')
  const [value, setValue] = useState()
  const [street, setStreet] = useState('')
  const [aptSuite, setAptSuite] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState(0)
  const [selectedImage, setSelectedImage] = useState();

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const initialValues = {
    country: '',
    street: '',
    aptSuite: '',
    city: '',
    province: '',
    postalCode: '',

  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const onSubmit = (values, { setSubmitting }) => {
    // perform any necessary actions here, such as sending data to the server
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

  const handleImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }

  const imageUrl = selectedImage && URL.createObjectURL(selectedImage);

  const removeSelectedImage = () => {
    setSelectedImage();
  };
  
    return (
        <>
            <CreateProfileNav />

            <Container className='mt-5 pt-5 pb-5 h-100' fluid>
              <Row  className='mt-5  justify-content-center px-4'>
                <Col xl={11}>
                  <p className='fs-14 text-gray'>14/14</p>
                  <h1 className='title'>A few last details, then you can check and publish <br /> your profile.</h1>
                  <p className='fw-semibold text-muted'>A professional photo helps you build trust with your clients. To keep things safe and simple, they’ll pay you through us - which is why we need your personal information.</p>
                </Col>
              </Row>
              <Row className='justify-content-start px-4'>
                  <Col className='mt-3 ms-5' xl={11}>
                      <Row>
                          <Col xl={3}>
                            <div className='d-flex flex-column justify-content-center align-items-center ms-3 pb-4'>
                              <button className='d-flex flex-column justify-content-center align-items-center w-100 h-100 btn btn-white shadow-none btn-focus-none'  onClick={handleShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 0 300 130" aria-hidden="true" role="img"><circle cx="72.5" cy="65" r="65" fill="#c5d1c3"></circle><linearGradient id="add-coworker-2-a-uid-8" gradientUnits="userSpaceOnUse" x1="57.517" y1="62.769" x2="87.477" y2="62.769" gradientTransform="matrix(1 0 0 -1 .006 129.994)"><stop offset=".52" stopColor="#9b8084"></stop><stop offset=".61" stopColor="#947b79"></stop><stop offset=".77" stopColor="#836d5b"></stop><stop offset=".99" stopColor="#66572c"></stop><stop offset="1" stopColor="#645528"></stop></linearGradient><polygon points="87.5,76.9 84.8,57.6 60.2,57.6 57.5,76.9" fill="url(#add-coworker-2-a-uid-8)"></polygon><linearGradient id="add-coworker-2-b-uid-8" gradientUnits="userSpaceOnUse" x1="78.737" y1="56.648" x2="78.737" y2="64.194" gradientTransform="matrix(1 0 0 -1 .006 129.994)"><stop offset="0" stopColor="#645528" stopOpacity="0"></stop><stop offset=".18" stopColor="#645528" stopOpacity=".2"></stop><stop offset=".73" stopColor="#645528" stopOpacity=".78"></stop><stop offset="1" stopColor="#645528"></stop></linearGradient><path d="M72.5 69.5c7.7 0 14.5 3.8 14.5 3.8l-1.1-7.5H70.5l2 3.7z" fill="url(#add-coworker-2-b-uid-8)"></path><radialGradient id="add-coworker-2-c-uid-8" cx="66.5" cy="95.197" r="31.065" gradientTransform="matrix(1 0 0 -1 .006 129.994)" gradientUnits="userSpaceOnUse"><stop offset=".68" stopColor="#9b8084"></stop><stop offset=".76" stopColor="#8f766f"></stop><stop offset=".94" stopColor="#6f5d3a"></stop><stop offset="1" stopColor="#645528"></stop></radialGradient><path d="M57.3 64.6c.2.1.4.3.5.4 9.1 6.1 21 5.9 29.9-.4 11.7-8.4 14.4-24.8 6-36.5-4.8-6.8-12.6-10.8-20.9-10.9-14.3-.2-26.2 11.3-26.5 25.7-.1 8.6 4 16.7 11 21.7z" fill="url(#add-coworker-2-c-uid-8)"></path><radialGradient id="add-coworker-2-d-uid-8" cx="68.886" cy="58.57" r="78.723" gradientTransform="matrix(1 0 0 -1 .006 129.994)" gradientUnits="userSpaceOnUse"><stop offset=".68" stopColor="#bda1e7"></stop><stop offset=".77" stopColor="#ab92d2"></stop><stop offset=".97" stopColor="#7d6b9d"></stop><stop offset="1" stopColor="#746493"></stop></radialGradient><path d="M128.4 84.4c-5.4-8.2-14.5-13.1-24.3-13.1-2.6 0-5.2.4-7.8 1.1l-6.9 1.9c-11.1 3.1-22.8 3.1-33.9 0l-6.9-1.9c-2.5-.7-5.1-1.1-7.8-1.1-9.8 0-18.9 4.9-24.3 13.1-1.4 2.2-2.6 4.5-3.6 7C23.1 114.1 46 130 72.5 130s49.4-15.9 59.5-38.7c-1-2.4-2.1-4.8-3.6-6.9z" fill="url(#add-coworker-2-d-uid-8)"></path><circle cx="118.4" cy="110.9" r="19.1" fill="#14a800"></circle><g fill="none" stroke="#fff" strokeWidth="3.815" strokeLinecap="round" strokeLinejoin="round"><line x1="118.4" y1="102" x2="118.4" y2="119.7"></line><line x1="127.2" y1="110.9" x2="109.5" y2="110.9"></line></g></svg>
                              </button>
                              <button className='btn btn-outline-success btn-sm rounded-pill m-0 w-50 mt-3' onClick={handleShow}>
                              Add photo 
                              </button>
                            </div>
                          </Col>
                          <Col xl={8}>
                          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                          {({ isSubmitting }) => (
                            <FormikForm className='d-flex flex-column'>
                              <label htmlFor="country" className='fw-semibold mb-2'>Country *</label>
                              <Select className=' w-25 fs-14' name='country' value={country} onChange={handleChange}  placeholder='Country' options={countryOptions} />
                              <ErrorMessage name="country" />

                              <label htmlFor="street" className='fw-semibold mt-3 mb-2'>Street Address * (won’t show on profile)</label>
                              <div className='d-flex'>
                                <Field type="text" id="street" name="street" className='w-75 form-control border border-2'/>
                                <Field type="text" id="aptSuite" name="aptSuite" placeholder='Apt/Suite (Optional)' className='w-25 ms-3 form-control border border-2'/>
                              </div>
                              <ErrorMessage name="aptSuite" />

                              <div className="d-flex justify-content-around w-100 ">
                                <div className='w-100'>
                                  <label htmlFor="city" className='fw-semibold mt-3 mb-2 '>City *</label>
                                  <Field type="text" id="city" name="city"  className='form-control border border-2'/>
                                  <ErrorMessage name="city" />
                                </div>
                                <div className='w-100 mx-3'>
                                  <label htmlFor="province" className='fw-semibold mt-3 mb-2'>State/Province</label>
                                  <Field type="text" id="province" name="province"  className='form-control border border-2'/>
                                  <ErrorMessage name="province" />
                                </div>
                                <div className='w-100'>
                                  <label htmlFor="postalCode" className='fw-semibold mt-3 mb-2'>ZIP/Postal code</label>
                                  <Field type="text" id="postalCode" name="postalCode" className='form-control border border-2'/>
                                  <ErrorMessage name="postalCode" />
                                </div>
                              </div>

                              <label htmlFor="phone" className='fw-semibold mt-3 mb-2'>Phone</label>
                              <div className="w-100">
                              <PhoneInput
                              placeholder='+63'
                              country={'ph'}
                              value={value}
                              onChange={setValue}
                              name='phone'
                              />
                              <ErrorMessage name="phone" />
                              </div>
                            </FormikForm>
                            )}
                            </Formik>
                          </Col>
                      </Row>
                  </Col>
                  
              </Row>
            </Container> 
            
            <Navbar bg="white" expand="lg" fixed='bottom' className='pb-4'>
                <Container fluid className='d-flex flex-column p-0 m-0'>
                    <div className="d-flex w-100">
                        <div className={styles.pageRange + ' w-100 rounded-pill'}></div>
                        <div className={styles.pageRangeGray + ''}></div>
                    </div>
                    <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                        <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/rate">
                        Back 
                        </Link>
                        <div className='d-flex justify-content-between'>
                            <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/location">
                                Check your profile
                            </Link>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <Modal show={showModal} size="lg" onHide={handleClose} dialogClassName={styles.empModal} aria-labelledby="contained-modal-title-vcenter"
     centered >
              <Modal.Header closeButton className='border-0 shadow-none px-4'>
                <Modal.Title className='text-dark h1 fs-32'>Your photo </Modal.Title>
              </Modal.Header>
              <Modal.Body className='border-0 px-4 py-0 d-flex'>
                <Row>
                <Col xs={12} xl={6} className='d-flex flex-column justify-content-start align-items-center'>
                  <div className={styles.imgCrop + ' rounded-circle d-flex flex-column justify-content-center align-items-center'}>
                  {selectedImage ? (
                      <div className={styles.imagePreviewParent}>
                        <img
                          src={imageUrl}
                          alt="Thumb"
                          className={styles.imagePreview}
                        />
                       
                      </div>
                    ): ( <>
                      <svg xmlns="http://www.w3.org/2000/svg" className='mb-2' viewBox="-150 0 450 130" aria-hidden="true" role="img"><circle cx="72.5" cy="65" r="65" fill="#c5d1c3"></circle><linearGradient id="add-coworker-2-a-uid-8" gradientUnits="userSpaceOnUse" x1="57.517" y1="62.769" x2="87.477" y2="62.769" gradientTransform="matrix(1 0 0 -1 .006 129.994)"><stop offset=".52" stopColor="#9b8084"></stop><stop offset=".61" stopColor="#947b79"></stop><stop offset=".77" stopColor="#836d5b"></stop><stop offset=".99" stopColor="#66572c"></stop><stop offset="1" stopColor="#645528"></stop></linearGradient><polygon points="87.5,76.9 84.8,57.6 60.2,57.6 57.5,76.9" fill="url(#add-coworker-2-a-uid-8)"></polygon><linearGradient id="add-coworker-2-b-uid-8" gradientUnits="userSpaceOnUse" x1="78.737" y1="56.648" x2="78.737" y2="64.194" gradientTransform="matrix(1 0 0 -1 .006 129.994)"><stop offset="0" stopColor="#645528" stopOpacity="0"></stop><stop offset=".18" stopColor="#645528" stopOpacity=".2"></stop><stop offset=".73" stopColor="#645528" stopOpacity=".78"></stop><stop offset="1" stopColor="#645528"></stop></linearGradient><path d="M72.5 69.5c7.7 0 14.5 3.8 14.5 3.8l-1.1-7.5H70.5l2 3.7z" fill="url(#add-coworker-2-b-uid-8)"></path><radialGradient id="add-coworker-2-c-uid-8" cx="66.5" cy="95.197" r="31.065" gradientTransform="matrix(1 0 0 -1 .006 129.994)" gradientUnits="userSpaceOnUse"><stop offset=".68" stopColor="#9b8084"></stop><stop offset=".76" stopColor="#8f766f"></stop><stop offset=".94" stopColor="#6f5d3a"></stop><stop offset="1" stopColor="#645528"></stop></radialGradient><path d="M57.3 64.6c.2.1.4.3.5.4 9.1 6.1 21 5.9 29.9-.4 11.7-8.4 14.4-24.8 6-36.5-4.8-6.8-12.6-10.8-20.9-10.9-14.3-.2-26.2 11.3-26.5 25.7-.1 8.6 4 16.7 11 21.7z" fill="url(#add-coworker-2-c-uid-8)"></path><radialGradient id="add-coworker-2-d-uid-8" cx="68.886" cy="58.57" r="78.723" gradientTransform="matrix(1 0 0 -1 .006 129.994)" gradientUnits="userSpaceOnUse"><stop offset=".68" stopColor="#bda1e7"></stop><stop offset=".77" stopColor="#ab92d2"></stop><stop offset=".97" stopColor="#7d6b9d"></stop><stop offset="1" stopColor="#746493"></stop></radialGradient><path d="M128.4 84.4c-5.4-8.2-14.5-13.1-24.3-13.1-2.6 0-5.2.4-7.8 1.1l-6.9 1.9c-11.1 3.1-22.8 3.1-33.9 0l-6.9-1.9c-2.5-.7-5.1-1.1-7.8-1.1-9.8 0-18.9 4.9-24.3 13.1-1.4 2.2-2.6 4.5-3.6 7C23.1 114.1 46 130 72.5 130s49.4-15.9 59.5-38.7c-1-2.4-2.1-4.8-3.6-6.9z" fill="url(#add-coworker-2-d-uid-8)"></path><circle cx="118.4" cy="110.9" r="19.1" fill="#14a800"></circle><g fill="none" stroke="#fff" stroke-width="3.815" stroke-linecap="round" stroke-linejoin="round"><line x1="118.4" y1="102" x2="118.4" y2="119.7"></line><line x1="127.2" y1="110.9" x2="109.5" y2="110.9"></line></g></svg>
                      <p className='fs-14 text-muted fw-semibold text-center'><span className="text-green text-decoration-underline ">Upload</span> or drop <br /> image here</p>
                      </>
                    )}
                    
                    <input id="image-crop-29" className={styles.imageCropInput} type="file" accept="image/*"  onChange={handleImg}/>
                  </div>
                  <p className='text-muted text-center mt-3'>250 x 250 Min size/ 5 MB Max</p>
                  {
                    selectedImage ? (<button onClick={removeSelectedImage} className='btn btn-white text-green text-decoration-underline fw-semibold btn-focus-none'>
                    Delete Current Image
                  </button>) : null
                  }
                </Col>
                <Col xs={12} xl={6}>
                  <h2 class="mb-2 title">
                  Show clients the best version of yourself!
                  </h2> 
                  <div className="air3-image-crop-avatars my-5 d-flex align-items-end">
                    <div className="air3-avatar air3-avatar-88">
                      {
                        selectedImage ? (
                          <div className={styles.imagePreviewParent}>
                            <img
                              src={imageUrl}
                              alt="Thumb"
                              className={styles.imagePreview}
                            />
                          </div>
                        ) : null
                      }
                    </div>
                    <div className="air3-avatar air3-avatar-60 mx-3">
                      {
                        selectedImage ? (
                          <div className={styles.imagePreviewParent}>
                            <img
                              src={imageUrl}
                              alt="Thumb"
                              className={styles.imagePreview}
                            />
                          </div>
                        ) : null
                      }
                    </div>
                    <div className="air3-avatar air3-avatar-40">
                      {
                        selectedImage ? (
                          <div className={styles.imagePreviewParent}>
                            <img
                              src={imageUrl}
                              alt="Thumb"
                              className={styles.imagePreview}
                            />
                          </div>
                        ) : null
                      }
                    </div>
                    <div className="air3-avatar air3-avatar-32 ms-3">
                      {
                        selectedImage ? (
                          <div className={styles.imagePreviewParent}>
                            <img
                              src={imageUrl}
                              alt="Thumb"
                              className={styles.imagePreview}
                            />
                          </div>
                        ) : null
                      }
                    </div>
                    </div>
                    <div id="image-crop-description-13" className="air3-image-crop-description">
                      <p><strong>Must be an actual photo of you.</strong> <br />
                      <span className="fs-14 text-muted">Logos, clip-art, group photos, and br digitally-altered images are not allowed.</span>
                      <a href="https://support.upwork.com/hc/en-us/articles/211063208-Sample-Profiles-and-Best-Practices" className='ms-2 text-green' target="_blank">Learn more </a>
                      </p>
                    </div>
                  </Col>
                  </Row>
              </Modal.Body>
              <Modal.Footer className='border-0 shadow-none'>
                <button className='btn btn-white text-green btn-focus-none' onClick={handleClose}>Cancel</button>
                <button className='btn bg-green-200 rounded-pill text-white px-3'>Attach photo</button>
              </Modal.Footer>
            </Modal>
        </>
    )
}

export default Rate