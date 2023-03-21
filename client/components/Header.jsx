import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FormGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {HeaderDropdown} from './HeaderDropdown'
import {Breadcrumb} from './Breadcrumb'
import Link from 'next/link'

export const Header = () => {

  const [hoverRight, setHoverRight] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverNavItem, setHoverNavItem] = useState(0);
  
  return (
  <>
    <Navbar bg="white" expand="lg" fixed='top' className='pt-1 pb-3 px-2 border-bottom-green'>
      <Container fluid >
        <Navbar.Brand href="#">
          <svg width={82}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 28" role="img" aria-hidden="true"><path fill="#14a800" d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path><path fill="#14a800" d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path><polygon fill="#14a800" points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon><path fill="#14a800" d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path><path fill="#14a800" d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"></path>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between align-items-center w-100 ' >
          <Container>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Button 
                variant='white'
                onMouseEnter={() => setHoverNavItem(1)}
                onClick={()=> hoverNavItem ? setHoverNavItem(0) : setHoverNavItem(1)}
                className="m-0 p-0 text-hover-green fs-14 fw-bold-5 shadow-none text-dark-green"
              >
                  Find Talent
                  <span className='px-1'>
                      <svg width={15} xmlns="http://www.w3.org/2000/svg" fill="none" className={hoverNavItem ===  1 ? 'hover-rotate' : null} aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 10l-6 5-6-5"></path></svg>
                  </span>
              </Button>
              <Button 
                variant='white'
                onMouseEnter={() => setHoverNavItem(2)}
                onClick={()=> hoverNavItem ? setHoverNavItem(0) : setHoverNavItem(2)}
                className="m-0 text-hover-green fs-14 shadow-none fw-bold-5 text-dark-green"
              >
                  Find Work
                  <span className='px-1'>
                    <svg width={15} className={hoverNavItem ===  2 ? 'hover-rotate' : null} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 10l-6 5-6-5"></path></svg>
                  </span>
              </Button>
              <Button 
                variant='white'
                onMouseEnter={() => setHoverNavItem(3)}
                onClick={()=> hoverNavItem ? setHoverNavItem(0) : setHoverNavItem(2)}
                className="m-0 p-0 text-hover-green fs-14 shadow-none fw-bold-5 text-dark-green"
              >
                  Why Upwork
                  <span className='px-1'>
                    <svg width={15} className={hoverNavItem ===  3 ? 'hover-rotate' : null} xmlns="http://www.w3.org/2000/svg"  fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 10l-6 5-6-5"></path></svg>
                  </span>
              </Button>
              <Nav.Link href="#action1" className='text-hover-green fs-14 fw-bold-5 text-dark'>Enterprise</Nav.Link>
            </Nav>
          </Container>
          <Container className="d-flex justify-content-end mt-2">
            <Form className={hoverRight || hoverLeft ? 'd-flex dropdown-hover-background rounded-pill p-0 m-0' : 'd-flex rounded-pill p-0 m-0'}>
              <FormGroup className='d-flex align-items-center border border-2 rounded-pill p-0 m-0' >
                <div 
                onMouseEnter={()=> setHoverLeft(true)}
                onMouseLeave={()=> setHoverLeft(false)}
                className='d-flex align-items-center dropdown-hover rounded-pill m-0'
                style={{padding: "3px 0 3px 0"}}>
                  <svg  xmlns="http://www.w3.org/2000/svg" className="fw-bold m-0 p-0 w-25"  height="16" fill="currentColor" viewBox="-5 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className={hoverRight ? 'border dropdown-hover-background border-0 px-1 fs-14 fw-bold-5 shadow-none' : 'border border-0 m-0 px-1 fs-14 fw-bold-5 shadow-none'} 
                    style={{backgroundColor: "transparent"}}
                    aria-label="Search"
                  >
                  </Form.Control>
                </div>
                <Dropdown as={ButtonGroup} >
                  <Dropdown.Toggle id="dropdown-custom-1" className={hoverLeft ? 'text-dark fw-bold-5 fs-14 border border-0 rounded-pill shadow-none dropdown-hover-background py-2' : 'text-dark fw-bold-5 fs-14  border border-0 rounded-pill shadow-none bg-white dropdown-hover py-2 '} onMouseEnter={()=> setHoverRight(true)} onMouseLeave={()=> setHoverRight(false)} style={{paddingLeft: "20px"}}>
                    Talent
                    <span className='p-0' style={{marginLeft: "5px"}}>
                        <svg width={15} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 10l-6 5-6-5"></path></svg>
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="super-colors">
                    <Dropdown.Item eventKey="1" className='d-flex'>
                        <span className='pe-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width={25} fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.772 10.356a3.178 3.178 0 100-6.356 3.178 3.178 0 000 6.356zM3 19.436v-.28c0-3.365 2.633-6.076 5.902-6.076s5.902 2.71 5.902 6.075v.28m1.559-8.171a2.27 2.27 0 100-4.54 2.27 2.27 0 000 4.54zm-.571 2.724h.548c2.559 0 4.66 2.142 4.66 4.75v.698"></path></svg>
                        </span>
                        <div className='d-flex flex-column mx-2'>
                          <h5 className='fs-16'>Talent</h5>
                          <small className='fs-11 text-muted'>Hire professionals and agencies</small>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" className='d-flex'>
                        <span className='pe-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width={25} fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 17.47H5.71A2.71 2.71 0 013 14.76v-9A2.71 2.71 0 015.71 3H12a2.71 2.71 0 012.72 2.71v2M5.71 6.62h6.33M5.71 9.33h2.88"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.57 21a5.43 5.43 0 100-10.86 5.43 5.43 0 000 10.86z"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 13.85l-3.46 3.45-1.39-1.4"></path></svg>
                        </span>
                        <div className='d-flex flex-column mx-2'>
                          <h5 className='fs-16'>Projects</h5>
                          <small className='fs-11 text-muted'>Buy ready-to-start services</small>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" className='d-flex'>
                        <span className='pe-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width={25} fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"></path></svg>
                        </span>
                        <div className='d-flex flex-column mx-2'>
                          <h5 className='fs-16'>Jobs</h5>
                          <small className='fs-11 text-muted'>Apply to jobs posted by clients</small>
                        </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </FormGroup>
            </Form>
            <Link href='/login' className='text-decoration-none text-dark shadow-none pt-1 mx-2'>
              <Button variant="white" className='mx-2 fw-bold-5 shadow-none fs-14'>
                  Log In
              </Button>
            </Link>
            <Link href='/signup' className='text-decoration-none shadow-none pt-1'>
              <Button className='rounded-pill bg-green fw-bold-5 fs-14 py-2 px-4 border border-0' >
                Sign Up
              </Button>
            </Link>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {hoverNavItem !== 0 && <HeaderDropdown  setHoverNavItem={setHoverNavItem} hoverNavItem={hoverNavItem}/>}
    <Breadcrumb />
  </>
  )
}

