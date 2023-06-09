
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { BiUserCircle } from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { AiOutlineUser, AiOutlineArrowRight } from "react-icons/ai";
import CreateProfileNav from '@/components/CreateProfileNav';
import { parseCookies } from 'next-cookies';

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);

  console.log(cookies);

  return {
    props: { cookies }
  };
}



export const CardOne = ({cookies}) => {


  console.log(cookies)

  return (
    <Card className='w-100 rounded-10 mx-3'>
        <Card.Header className='bg-white d-flex justify-content-center border-0 rounded-10 pt-5'>
          <div className="air3-presence-container">
          <span className='bg-green rounded-100' style={{width: '10px', height: '10px'}}></span>
          <picture>
            <source srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" media="(max-width: 699.98px)" /> 
            <img width="128" height="128" loading="lazy" src="https://www.upwork.com/nx/create-profile/nx/create-profile/img/person1.8d03035.png" alt="Sasheen M." class="air3-avatar air3-avatar-128" />
          </picture>
          <div className="air3-badge-tier-sm ">
            <div class="air3-icon sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.911 18.594c.3 1.096-.897 1.893-1.793 1.295l-4.086-2.69-4.085 2.69c-.897.598-2.092-.299-1.793-1.295L7.25 13.91l-3.787-3.09c-.896-.697-.398-2.092.698-2.191l4.882-.3 1.794-4.583c.398-.996 1.893-.996 2.291 0l1.794 4.584m2.491.3v6.974M21 12.117h-6.975"></path></svg></div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className='text-center'>
          <h2>Sasheen M.</h2>
          <p className='fw-semibold'>Customer Experience Consultant</p>
          <div className="d-flex justify-content-around px-5 mx-5">
            <div className="d-flex">
              <div>
                <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.142 3.813l1.782 4.802 4.927.275c.243.013.477.104.672.26.194.156.338.37.415.615.077.245.082.508.015.756a1.288 1.288 0 01-.391.633L16.726 14.4l1.282 4.993c.06.252.047.517-.038.76a1.285 1.285 0 01-.437.606c-.2.15-.439.234-.684.24a1.174 1.174 0 01-.693-.21L12 17.976 7.854 20.77a1.175 1.175 0 01-.69.214 1.178 1.178 0 01-.684-.233 1.283 1.283 0 01-.441-.599 1.36 1.36 0 01-.047-.757l1.272-4.972-3.826-3.268a1.288 1.288 0 01-.391-.633 1.349 1.349 0 01.015-.756 1.28 1.28 0 01.415-.615c.195-.156.429-.247.672-.26l4.927-.275 1.782-4.802c.092-.24.25-.446.454-.59a1.177 1.177 0 011.376-.001c.204.145.361.35.454.59z" clipRule="evenodd"></path></svg>
              </div>
              <div className="">
                <p className='fw-semibold'>5.0</p>
              </div>
            </div>
            <div>
              <p className='fw-semibold'>$65.00/hr</p>
            </div>
            <div className="d-flex">
                <div>
                  <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z" clipRule="evenodd"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"></path></svg>
              </div>
              <div className="">
                <p className='fw-semibold'>14 jobs</p>
              </div>
          </div>
        </div>
        <div className='px-3 mt-3 mb-5'>
          <h4 className='title '>
          “Upwork has enabled me to increase my rates. I know what I'm bringing to the table and love the feeling of being able to help a variety of clients.”
          </h4>
        </div>
      </Card.Body>
    </Card>
  )
}


export const CardTwo = () => {
  return (
    <Card className='w-100 rounded-10 '>
        <Card.Header className='bg-white d-flex justify-content-center border-0 rounded-10 pt-5'>
          <div class="air3-presence-container">
          <span className='bg-green rounded-100' style={{width: '10px', height: '10px'}}></span>
          <picture>
            <source srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" media="(max-width: 699.98px)" /> 
            <img width="128" height="128" loading="lazy" src="https://www.upwork.com/nx/create-profile/nx/create-profile/img/person2.b92ac9b.png" alt="Alexander N." class="air3-avatar air3-avatar-128" />
          </picture>
          <div class="air3-badge-tier-sm ">
            <div class="air3-icon sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.911 18.594c.3 1.096-.897 1.893-1.793 1.295l-4.086-2.69-4.085 2.69c-.897.598-2.092-.299-1.793-1.295L7.25 13.91l-3.787-3.09c-.896-.697-.398-2.092.698-2.191l4.882-.3 1.794-4.583c.398-.996 1.893-.996 2.291 0l1.794 4.584m2.491.3v6.974M21 12.117h-6.975"></path></svg></div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className='text-center'>
          <h2>Alexander N.</h2>
          <p className='fw-semibold'>Expert Media Software Developer</p>
          <div className="d-flex justify-content-around px-5 mx-5">
            <div className="d-flex">
              <div>
                <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.142 3.813l1.782 4.802 4.927.275c.243.013.477.104.672.26.194.156.338.37.415.615.077.245.082.508.015.756a1.288 1.288 0 01-.391.633L16.726 14.4l1.282 4.993c.06.252.047.517-.038.76a1.285 1.285 0 01-.437.606c-.2.15-.439.234-.684.24a1.174 1.174 0 01-.693-.21L12 17.976 7.854 20.77a1.175 1.175 0 01-.69.214 1.178 1.178 0 01-.684-.233 1.283 1.283 0 01-.441-.599 1.36 1.36 0 01-.047-.757l1.272-4.972-3.826-3.268a1.288 1.288 0 01-.391-.633 1.349 1.349 0 01.015-.756 1.28 1.28 0 01.415-.615c.195-.156.429-.247.672-.26l4.927-.275 1.782-4.802c.092-.24.25-.446.454-.59a1.177 1.177 0 011.376-.001c.204.145.361.35.454.59z" clipRule="evenodd"></path></svg>
              </div>
              <div className="">
                <p className='fw-semibold'>5.0</p>
              </div>
            </div>
            <div>
              <p className='fw-semibold'>$90.00/hr</p>
            </div>
            <div className="d-flex">
                <div>
                  <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z" clipRule="evenodd"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"></path></svg>
              </div>
              <div className="">
                <p className='fw-semibold'>9 jobs</p>
              </div>
          </div>
        </div>
        <div className='px-3 mt-3 mb-5'>
          <h4 className='title '>
          “The success I've achieved simply would not have been possible without Upwork.”
          </h4>
        </div>
      </Card.Body>
    </Card>
  )
}

export const CardThree = () => {
  return (
    <Card className='w-100 rounded-10 '>
        <Card.Header className='bg-white d-flex justify-content-center border-0 rounded-10 pt-5'>
          <div class="air3-presence-container">
          <span className='bg-green rounded-100' style={{width: '10px', height: '10px'}}></span>
          <picture>
            <source srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" media="(max-width: 699.98px)" /> 
            <img width="128" height="128" loading="lazy" src="https://www.upwork.com/nx/create-profile/nx/create-profile/img/person3.3afb28d.png" alt="Alexander N." class="air3-avatar air3-avatar-128" />
          </picture>
          <div class="air3-badge-tier-sm ">
            <div class="air3-icon sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.911 18.594c.3 1.096-.897 1.893-1.793 1.295l-4.086-2.69-4.085 2.69c-.897.598-2.092-.299-1.793-1.295L7.25 13.91l-3.787-3.09c-.896-.697-.398-2.092.698-2.191l4.882-.3 1.794-4.583c.398-.996 1.893-.996 2.291 0l1.794 4.584m2.491.3v6.974M21 12.117h-6.975"></path></svg></div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className='text-center'>
          <h2>Ambika M.</h2>
          <p className='fw-semibold'>Market Researcher</p>
          <div className="d-flex justify-content-around px-5 mx-5">
            <div className="d-flex">
              <div>
                <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.142 3.813l1.782 4.802 4.927.275c.243.013.477.104.672.26.194.156.338.37.415.615.077.245.082.508.015.756a1.288 1.288 0 01-.391.633L16.726 14.4l1.282 4.993c.06.252.047.517-.038.76a1.285 1.285 0 01-.437.606c-.2.15-.439.234-.684.24a1.174 1.174 0 01-.693-.21L12 17.976 7.854 20.77a1.175 1.175 0 01-.69.214 1.178 1.178 0 01-.684-.233 1.283 1.283 0 01-.441-.599 1.36 1.36 0 01-.047-.757l1.272-4.972-3.826-3.268a1.288 1.288 0 01-.391-.633 1.349 1.349 0 01.015-.756 1.28 1.28 0 01.415-.615c.195-.156.429-.247.672-.26l4.927-.275 1.782-4.802c.092-.24.25-.446.454-.59a1.177 1.177 0 011.376-.001c.204.145.361.35.454.59z" clipRule="evenodd"></path></svg>
              </div>
              <div className="">
                <p className='fw-semibold'>5.0</p>
              </div>
            </div>
            <div>
              <p className='fw-semibold'>$100.00/hr</p>
            </div>
            <div className="d-flex">
                <div>
                  <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z" clipRule="evenodd"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"></path></svg>
              </div>
              <div className="">
                <p className='fw-semibold'>5 jobs</p>
              </div>
          </div>
        </div>
        <div className='px-3 mt-3 mb-5'>
          <h4 className='title '>
          “I turned to Upwork as a way to gain more control of my career. I love being able to choose everything from who I work with to how I spend my day.”
          </h4>
        </div>
      </Card.Body>
    </Card>
  )
}


export const CardFour = () => {
  return (
    <Card className='w-100 rounded-10 mx-3'>
        <Card.Header className='bg-white d-flex justify-content-center border-0 rounded-10 pt-5'>
          <div class="air3-presence-container">
          <span className='bg-green rounded-100' style={{width: '10px', height: '10px'}}></span>
          <picture>
            <source srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" media="(max-width: 699.98px)" /> 
            <img width="128" height="128" loading="lazy" src="https://www.upwork.com/nx/create-profile/nx/create-profile/img/person4.fca15d3.png" alt="Alexander N." class="air3-avatar air3-avatar-128" />
          </picture>
          <div class="air3-badge-tier-sm ">
            <div class="air3-icon sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.911 18.594c.3 1.096-.897 1.893-1.793 1.295l-4.086-2.69-4.085 2.69c-.897.598-2.092-.299-1.793-1.295L7.25 13.91l-3.787-3.09c-.896-.697-.398-2.092.698-2.191l4.882-.3 1.794-4.583c.398-.996 1.893-.996 2.291 0l1.794 4.584m2.491.3v6.974M21 12.117h-6.975"></path></svg></div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className='text-center'>
          <h2>Wahidul M.</h2>
          <p className='fw-semibold'>UX/UI Designer</p>
          <div className="d-flex justify-content-around px-5 mx-5">
            <div className="d-flex">
              <div>
                <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.142 3.813l1.782 4.802 4.927.275c.243.013.477.104.672.26.194.156.338.37.415.615.077.245.082.508.015.756a1.288 1.288 0 01-.391.633L16.726 14.4l1.282 4.993c.06.252.047.517-.038.76a1.285 1.285 0 01-.437.606c-.2.15-.439.234-.684.24a1.174 1.174 0 01-.693-.21L12 17.976 7.854 20.77a1.175 1.175 0 01-.69.214 1.178 1.178 0 01-.684-.233 1.283 1.283 0 01-.441-.599 1.36 1.36 0 01-.047-.757l1.272-4.972-3.826-3.268a1.288 1.288 0 01-.391-.633 1.349 1.349 0 01.015-.756 1.28 1.28 0 01.415-.615c.195-.156.429-.247.672-.26l4.927-.275 1.782-4.802c.092-.24.25-.446.454-.59a1.177 1.177 0 011.376-.001c.204.145.361.35.454.59z" clipRule="evenodd"></path></svg>
              </div>
              <div className="">
                <p className='fw-semibold'>5.0</p>
              </div>
            </div>
            <div>
              <p className='fw-semibold'>$50.00/hr</p>
            </div>
            <div className="d-flex">
                <div>
                  <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z" clipRule="evenodd"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"></path></svg>
              </div>
              <div className="">
                <p className='fw-semibold'>20 jobs</p>
              </div>
          </div>
        </div>
        <div className='px-3 mt-3 mb-5'>
          <h4 className='title '>
          “Upwork has enabled me to build a professional career I love while living a life I love while constantly developing new skills.”
          </h4>
        </div>
      </Card.Body>
    </Card>
  )
}

const Welcome = ({user}) => {

  const [card, setCard] = useState(0)
  console.log(user[0]['firstname'])
  return (
    <>
      <CreateProfileNav />

      <Container className='mt-5 pt-4 h-100' fluid>
        <Row className='mt-5'>
          <Col xl={7} className="px-5">
            <div className="px-5 mt-5">
              <div>
                <h1 className='title mb-5 pb-4'>Hey {user[0]['firstname']}. Ready for your next big opportunity?</h1>
                <div className='mt-5 d-flex pb-3'>
                  <AiOutlineUser size={24}/>
                  <p className='ms-4 fw-semibold'>Answer a few questions and start building your profile</p>
                </div>
                <div className='border-top pt-3 pb-3 d-flex align-items-center'>
                  <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 9v9a3 3 0 01-3 3H6a3 3 0 01-3-3V9"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 9l-7.66 6.48a2 2 0 01-2.68 0L3 9m2.5-2.03L3 9m18 0l-2.5-2.03"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 11.54V5a2 2 0 00-2-2H8a2 2 0 00-2 2v6.54"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.5 6.2l-3.56 3.56L9.5 8.32"></path></svg>
                  <p className='ms-4 mt-3 fw-semibold'>Apply for open roles or list services for clients to buy</p>
                </div>
                <div className='border-top pt-3 pb-3 d-flex align-items-center'>
                  <svg style={{width: '24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 21c7-2 7.5-6.41 7.5-6.41V5.43L11.5 3 4 5.43v9.16S4.5 19 11.5 21z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.22 13.91a2.08 2.08 0 002.28 1.79 2.08 2.08 0 002.28-1.79 1.68 1.68 0 00-1.13-1.56c-.62-.23-1.93-.55-2.54-.83a1.56 1.56 0 01-.89-1.43A2.08 2.08 0 0111.5 8.3a2.08 2.08 0 012.28 1.79M11.5 8.3V7m0 10v-1.3"></path></svg>
                  <p className='ms-4 mt-3 fw-semibold'>Get paid safely and know we’re there to help</p>
                </div>
                <div className='border-top pt-4 d-flex align-items-center'>
                  <Link className='btn px-4 fw-semibold bg-green text-white rounded-pill' href="/create-profile/experience">
                    Get started
                  </Link>
                  <p className='fs-14 ms-5 mt-3 text-muted fw-semibold'>It only takes 5-10 minutes and you can edit it later. We’ll save as you go.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={5} className="mt-5 pe-5 pt-4 h-100">
            <div className="d-flex align-items-center flex-row">

              {card !== 0 && (
                <div className='mx-3 '>
                <Button onClick={()=> setCard(Math.min(card - 1, 3))} className='border-2 border bg-white rounded-100 p-2 d-flex flex-column align-items-center justify-content-center'>
                  <svg height={24} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="#14A800" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M21 11.754H3M10.477 4L3 11.754l7.477 7.477"></path></svg>
                </Button>
              </div>
              )}

              {card === 0 && <CardOne/>}
              {card === 1 && <CardTwo/>}
              {card === 2 && <CardThree/>}
              {card === 3 && <CardFour/>}

              {card !== 3 && (
                <div className='ms-4'>
                <Button onClick={()=> setCard(Math.min(card + 1, 3))} className='border-2 border bg-white rounded-100 p-2 d-flex flex-column align-items-center justify-content-center'>
                  <svg height={24} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="#14A800" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3 11.477h18m-7.477 7.753L21 11.478 13.523 4"></path></svg>
                </Button>
              </div>
              )}

            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Welcome