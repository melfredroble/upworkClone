"use client";

import React, {useState} from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Link from 'next/link'
import axios from 'axios'
import Select from 'react-select'
// import { getCountriesData } from '../api/getCountriesData';
import { useRouter } from 'next/router';
import ClipLoader from "react-spinners/ClipLoader";

export async function getCountryList() {
  const response = await axios.get('http://localhost:3000/api/getCountriesData')
  const data = response.data
  return data
}
  
export async function getServerSideProps() {
    const countriesData = await getCountryList();
    return {
        props: {
            countriesData
        },
    };
}

const freelance = ({ countriesData }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('Philippines')
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()

    const countryOptions = countriesData.map(country => ({
        value: country.name,
        label: country.name
    }));


    // const defaultOptions = [currentCountryOption, ...countryOptions];

    // const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (country) => {
        setCountry(country);
    };

    const handleSignUp = async (e) =>{
        e.preventDefault()

        setIsLoading(true)
        try{
            const response = await axios.post('http://localhost:5000/user/addUser', {
                firstName,
                lastName,
                email,
                password,
                country
            })

            if(response){
                console.log(response)
                router.push('/create-profile/welcome')
            }
            
        } catch(err){
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }


  return (
    <>
        <Navbar bg="white" expand="lg" fixed='top' className='pt-2 pb-3 px-3 '>
            <Container fluid className='pt-3'>
                <Link href="/">
                <svg width={82}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 28" role="img" aria-hidden="true"><path fill="#14a800" d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path><path fill="#14a800" d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path><polygon fill="#14a800" points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon><path fill="#14a800" d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path><path fill="#14a800" d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"></path>
                </svg>
                </Link>
                <Link href="/signup/client" className='fs-16 text-decoration-none text-dark'>
                    Here to hire talent? <span className='text-green'>Join as a Client</span>
                </Link>
            </Container>
        </Navbar>

        <Container fluid className='pt-5 mt-3 min-vh-100'>
            <Row className='justify-content-center'>
                <Col xs={5}>
                    <Card className='bg-white br-10 h-100 d-flex flex-column mt-4 justify-content-center align-items-center py-2'>
                        <Card.Header className='bg-white br-10 border-0 mt-2'>
                            <h2 className='title'>Sign up to find work you love</h2>
                        </Card.Header>
                        <Card.Body className='px-4 w-100'>
                            <div className=' px-4 w-100'>
                                <Button variant='white' className="mb-3 border d-flex align-items-center justify-content-center border-dark px-1  shadow-none w-100 rounded-pill d-flex align-items-center mt-1 fw-bold-5">
                                    <svg width="3.8469mm" height="4.7625mm" version="1.1" viewBox="0 0 3.8469 4.7625" xmlns="http://www.w3.org/2000/svg" data-v-7b8c874d=""><g transform="translate(-64.345 -143.35)" data-v-7b8c874d=""><path d="m65.3 148.04c-0.28391-0.17313-0.67141-0.76332-0.84045-1.2801-0.08795-0.26886-0.11025-0.42084-0.11353-0.77372-5e-3 -0.53416 0.07013-0.78453 0.32071-1.0692 0.32908-0.37386 0.80475-0.48983 1.2754-0.31094 0.28741 0.10923 0.40289 0.10558 0.79215-0.0251 0.25755-0.0864 0.3669-0.10301 0.53413-0.0809 0.27892 0.0369 0.51512 0.14539 0.6838 0.31406l0.138 0.138-0.15036 0.12394c-0.35848 0.29549-0.46412 0.84523-0.24639 1.2822 0.09783 0.19631 0.33073 0.42321 0.48834 0.47574 0.07682 0.0256-0.27148 0.68647-0.49609 0.94128-0.31615 0.35864-0.47304 0.40634-0.86417 0.26274-0.38534-0.14149-0.49243-0.14492-0.83466-0.0268-0.37222 0.12848-0.51369 0.13441-0.68687 0.0288zm0.95956-3.6652c-0.04406-0.11481 0.09887-0.49259 0.25567-0.67578 0.14967-0.17485 0.45436-0.3477 0.61294-0.3477 0.08074 0 0.08756 0.0177 0.06932 0.17944-0.0488 0.43295-0.36807 0.79774-0.77487 0.88535-0.10672 0.0229-0.14178 0.0141-0.16305-0.0413z" data-v-7b8c874d=""></path></g></svg>
                                    <span className='mx-2'>
                                        Continue with Apple
                                    </span>
                                </Button>
                                <Button className="mb-3 border-0 mt-3 shadow-none w-100 rounded-pill d-flex p-0 align-items-center mt-1 fw-bold-5 ">
                                    <div className='py-1'>
                                    <div className="rounded-circle bg-white px-2 py-1 ms-1">
                                        <svg data-v-48748210="" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48"><g data-v-48748210=""><path data-v-48748210="" fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path> <path data-v-48748210="" fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path> <path data-v-48748210="" fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path> <path data-v-48748210="" fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path> <path data-v-48748210="" fill="none" d="M0 0h48v48H0z"></path></g></svg>
                                    </div>
                                    </div>
                                    <div className='google-btn-label text-center w-100'>
                                        Continue with Google
                                    </div>
                                </Button>

                                <p className="btn-separator my-4"><span className='mx-5'>or</span></p>

                                <Form onSubmit={handleSignUp}>
                                    <div className="d-flex justify-content-between">
                                        <div className="w-100">
                                            <input type="text" onChange={(e)=>setFirstName(e.target.value)} required placeholder='First name' className='form-control' />
                                        </div>
                                        <div className="w-100 ms-4">
                                            <input type="text" onChange={(e)=>setLastName(e.target.value)} required placeholder='Last name' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <input type="email" onChange={(e)=>setEmail(e.target.value)} required placeholder='Email' className='form-control'/>
                                    </div>
                                    <div className="">
                                        <input type="password" onChange={(e)=>setPassword(e.target.value)} required placeholder='Password (8 or more characters)' className='form-control'/>
                                    </div>

                                    <div className="my-3">
                                        <Select className='border-0' value={country} onChange={handleChange}  placeholder='Philippines' options={countryOptions} />
                                    </div>
                                    {/* placeholder={country ? country.label : 'Select an option'} */}
                                    <div className='d-flex align-items-center'>
                                        <div >
                                            <input id="checkbox-promo" type="checkbox" value="true" />
                                        </div>
                                        <span className='fs-12 ms-2'>Send me helpful emails to find rewarding work and job leads.
                                        </span>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <div >
                                            <input id="checkbox" type="checkbox" value="true" />
                                        </div>
                                        <span className='fs-12 ms-2'>Yes, I understand and agree to the Upwork Terms of Service , including the <span className='text-green'>User Agreement</span> and <span className='text-green'>Privacy Policy.</span>
                                        </span>
                                    </div>
                                    <div className='mt-3'>
                                        <Button type='submit'  className="mb-3 bg-green border-0 py-2 shadow-none w-100 rounded-pill mt-1 fw-bold-5">
                                            {!isLoading ? (
                                            "Create my account"
                                            ) : (
                                            <ClipLoader size={16} color="#ffffff" />
                                            )}
                                        </Button>
                                        <div className="text-center">
                                            <Link href='/login' className='text-decoration-none fs-14 text-dark '>
                                                Already have an account? <span className='text-green'>Log In</span>
                                            </Link>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}


export default freelance