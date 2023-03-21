import {Row, Container, Col} from 'react-bootstrap'

const NavItemOne = ({setHoverNavItem}) => {
    return (
        <Container onMouseLeave={() => setHoverNavItem(0)} fluid className='z-2 mt-5 pt-3 bg-white shadow h-100 position-relative'>
            <Row className='p-1 py-4 position-fixed bg-white shadow w-100'>
                <Col className='d-flex p-4 pt-2  border-right'>
                    <div className="d-flex flex-column w-100">
                        <div className='mb-1 active-dropdown p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>Post a job and hire a pro</p>
                                <small  className='text-muted'>Talent Marketplace</small>
                            </div>
                            <div className='d-flex justify-content-end align-items-center w-50'>
                                <span >
                                    <svg width={25}   xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #108A00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg>
                                </span>
                            </div>
                        </div>
                        <div className='mb-1 p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>Browse and buy projects</p>
                                <small  className='text-muted'>Project Catalog</small>
                            </div>
                            <div className='d-flex justify-content-end align-items-center w-50'>
                                <span >
                                    <svg width={25}   xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #108A00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg>
                                </span>
                            </div>
                        </div>
                        <div className=' p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>Let us find you a right talent</p>
                                <small  className='text-muted'>Talent Scout</small>
                            </div>
                            <div className='d-flex justify-content-end align-items-center w-50'>
                                <span >
                                    <svg width={25}   xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #108A00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className='p-3'>
                        <p className='fw-bold text-dark-green text-muted'>Talent Marketplace &#8482;</p>
                        <p className='text-dark-green text-muted fs-14'>
                            Talent Marketplace&#8482;
                            Learn about working with talent or explore your specific hiring needs.
                            Hire on Talent Marketplace

                        </p>
                        <div className="d-flex align-items-center">
                            <a href="/" className='text-success fs-14 fw-bold '>Hire on Talent Marketplace</a>
                            <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/icon-arrow-link.aa81526a.svg" alt="Arrow Right" className="vertical-align-middle mx-2"></img>
                        </div>
                    </div>
                </Col>
                <Col xs={5}>
                    <div className="mt-3">
                        <p className='fs-14 text-dark-green text-hover-green'>Development & IT</p>
                        <p className='fs-14 text-dark-green text-hover-green'>Design & Creative</p>
                        <p className='fs-14 text-dark-green text-hover-green'>Sales & Marketing</p>
                        <p className='fs-14 text-dark-green text-hover-green'>Writing & Translation</p>
                        <p className='fs-14 text-dark-green text-hover-green'>Admin & Customer Support</p>
                        <p className='fs-14 text-dark-green text-hover-green'>Finance & Accounting</p>
                        <p className='fs-14 text-dark-green text-hover-green'>HR & Training</p>
                        <p className='fs-14 text-dark-green text-hover-green'>Legal</p>
                        <p className='fs-14 text-dark-green text-hover-green'>Engineering & Architecture</p>
                        <p className='fs-14 text-dark-green text-hover-green'>Hire freelancers</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NavItemOne