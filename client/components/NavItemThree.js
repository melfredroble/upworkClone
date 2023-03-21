import {Row, Container, Col, Card} from 'react-bootstrap'

const NavItemThree = ({setHoverNavItem}) => {
    return (
        <Container onMouseLeave={() => setHoverNavItem(0)} fluid className='z-2 mt-5 pt-3 bg-white shadow h-100 position-relative'>
            <Row className='px-4 pb-5 pt-4 position-fixed bg-white shadow w-100'>
                <Col xs={2} >
                    <div className="d-flex flex-column w-100">
                        <div className='mb-1 p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>Success stories</p>
                                <small  className='text-muted'>Discover how teams work <br/> strategically and grow together.</small>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column pt-3 w-100">
                        <div className='mb-1 p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>How to hire</p>
                                <small  className='text-muted'>Learn about the different <br/> ways to get work done.</small>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={2}>
                    <div className="d-flex flex-column w-100">
                        <div className='mb-1 p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>Reviews</p>
                                <small  className='text-muted'>See what it's like to <br/> collaborate on upwork.</small>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column pt-3 w-100">
                        <div className='mb-1 p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>How to find work</p>
                                <small  className='text-muted'>Learn how to grow <br/> your independent career.</small>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className="d-flex flex-column w-100">
                        <div className='mb-1 d-flex pt-3 pb-2 '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5 text-success'>Where work gets done</p>
                            </div>
                        </div>
                        <Card className="br-10 px-3 py-1">
                            <Card.Header className="bg-white br-10 border border-0 p-0">
                                <small class='text-muted fs-11'>Guides</small>
                            </Card.Header>
                            <Card.Body className="bg-white border border-0 br-10 p-0">
                                <p className='fw-bold-5'>Getting started as a Freelancer</p>
                            </Card.Body>
                        </Card>
                        <Card className="mt-2 br-10 px-3 py-1">
                            <Card.Header className="bg-white br-10 border border-0 p-0">
                                <small class='text-muted fs-11'>Guides</small>
                            </Card.Header>
                            <Card.Body className="bg-white border border-0 br-10 p-0">
                                <p className='fw-bold-5'>Growing your Freelance Career</p>
                            </Card.Body>
                        </Card>
                        <Card className="mt-2 br-10 px-3 py-1">
                            <Card.Header className="bg-white br-10 border border-0 p-0">
                                <small class='text-muted'>Guides</small>
                            </Card.Header>
                            <Card.Body className="bg-white border border-0 br-10 p-0">
                                <p className='fw-bold-5'>Hiring & working with Independent Talent</p>
                            </Card.Body>
                        </Card>
                        <div className="d-flex align-items-center mt-3">
                            <a href="/" className='text-green fs-14 fw-bold '>See Resources</a>
                            <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/icon-arrow-link.aa81526a.svg" alt="Arrow Right" className="vertical-align-middle mx-2"></img>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NavItemThree