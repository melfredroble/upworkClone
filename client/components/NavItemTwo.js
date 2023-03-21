import {Row, Container, Col} from 'react-bootstrap'

const NavItemTwo = ({setHoverNavItem}) => {
    return (
        <Container onMouseLeave={() => setHoverNavItem(0)} fluid className='z-2 mt-5 pt-3 bg-white shadow h-100 position-relative'>
            <Row className='px-4 pb-5 pt-4 position-fixed bg-white shadow w-100'>
                <Col>
                    <div className="d-flex flex-column w-100">
                        <div className='mb-1 p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>Ways to earn</p>
                                <small  className='text-muted'>Learn why upwork has the right <br/> opportunities for you.</small>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex flex-column w-100">
                        <div className='mb-1 p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>Find work for your skills</p>
                                <small  className='text-muted'>Explore the kind of work available in your <br/> field.</small>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex flex-column w-100">
                        <div className='mb-1 p-3 d-flex '>
                            <div className='d-flex flex-column w-100'>
                                <p className='m-0 pb-2 fs-16 fw-bold-5'>Find ways to promote yourself</p>
                                <small  className='text-muted'>Show clients your the one they want.</small>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NavItemTwo