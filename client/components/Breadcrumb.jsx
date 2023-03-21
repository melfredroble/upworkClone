import React from 'react'
import { Button, Container } from 'react-bootstrap'

export const Breadcrumb = () => {
    return (
        <Container className="mt-5 pt-4 bg-danger z-1" fluid>
            <nav aria-label="breadcrumb" className='bg-white position-fixed w-100 z-1' >
                <ol className="breadcrumb pt-3  text-dark-green bg-white">
                    <li className="px-2">
                        <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Development & IT</a>
                    </li>
                    <li className="px-2">
                        <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Design & Creative</a>
                    </li>
                    <li className="px-2" aria-current="page">
                        <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Sales & Marketing</a>
                    </li>
                    <li className="px-2" aria-current="page">
                        <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Writing & Translation</a>
                    </li>
                    <li className="px-2" aria-current="page">
                        <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Admin & Customer Support</a>
                    </li>
                    <li className="px-2 fw-bold-5 py-0  " aria-current="page">
                        <Button
                        variant='white'
                        className="fw-bold-5 fs-14 pb-1 pt-0 px-0 m-0">
                            More
                            <span className='px-1'>
                                <svg width={15} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 10l-6 5-6-5"></path></svg>
                            </span>
                        </Button>
                    </li>
                </ol>
            </nav>
        </Container>
    )
}

