import { Col, Container, Row, Button, Card } from 'react-bootstrap';

export const Homepage = () => {

    return (
    <>
        <Container className='pt-5 mt-4 h-100 px-5'>
            <Row className=' px-5'>
                <Col className='d-flex justify-content-start flex-column p-0'>
                    <div className='d-flex flex-column'>
                        <h1 className='homepage-content fw-semibold text-green'>
                            How work
                            <br />
                            should work
                        </h1>
                        <h4 className='text-muted '>
                            Forget the old rules. You can have the best people. 
                            <br/>
                            Right now. Right here.
                        </h4>
                        <div className='mt-4'>
                            <Button className='rounded-pill bg-green-200 fw-bold-5 px-4 py-2 border border-0' >Get started</Button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className='text-muted fw-bold-5'>Trusted by</p>
                        <Row className='align-items-center'>
                            <Col xs={3}>   
                                <figure>
                                    <img width={100} src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg" data-qa="microsoft" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg" alt="Microsoft worked with Upwork to collaborate on an integrated solution that helps enterprises work with freelancers at scale powered by Microsoft 365 and Upwork Enterprise." className="logo microsoft first-image ls-is-cached lazyloaded" />
                                </figure>
                            </Col>
                            <Col xs={3}>
                                <figure>
                                    <img width={80}  src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/airbnb.svg" data-qa="airbnb" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/airbnb.svg" alt="Airbnb works with Upwork to post more than 10000 projects on Upwork." class="logo airbnb lazyloaded" />
                                </figure>
                            </Col>
                            <Col xs={3}>
                                <figure>
                                    <img width={60}  src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/bissell.svg" data-qa="bissell" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/bissell.svg" alt="Bissell works with Upwork as a staffing alternative to their hiring process." class="logo bissell ls-is-cached lazyloaded" />
                                </figure>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className='d-flex  justify-content-end '>
                    <img loading="" srcset="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@1x.jpg 1x,https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg 2x" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg" width="480" height="480" alt="Global talent illustration" data-qa="hero-image-desktop" className="cld-responsive vs-width-100 d-none d-md-block"/>
                </Col>
            </Row>
            <Row className='px-4 mt-5'>
                <div className='px-4 mt-2 mb-4'>
                    <h1 className='ff-nato '>Browse talent by category</h1>
                    <p className='fw-bold-5 text-muted'>Looking for work? <a href='/' className='text-green text-decoration-none'>Browse jobs</a></p>
                </div>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5 bg-green-hover'>
                        <h5>Development & IT</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.85/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>1853 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5 bg-green-hover'>
                        <h5>Design & Creative</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.91/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>968 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5 bg-green-hover'>
                        <h5>Sales & Marketing</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.77/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>392 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5 bg-green-hover'>
                        <h5>Writing & Translation</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.92/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>505 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5 bg-green-hover'>
                        <h5>Admin & Customer Support</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.77/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>508 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5 bg-green-hover'>
                        <h5>Finance & Accounting</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.79/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>214 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5 bg-green-hover'>
                        <h5>Engineering & Architecture</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.85/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>650 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5 bg-green-hover'>
                        <h5>Legal</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.85/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>133 skills</span>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>

        {/* 3rd Section */}
        <Container className='my-5 pt-5' >
            <Row className='bg-gray h-100 mx-5 br-10 py-4 px-3'>
                <Col xs={4} className='d-flex justify-content-center'>
                    <svg fill="none" width={240} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 130" aria-hidden="true" role="img"><path d="M132.321 103.679c-29.685-19.741-16.963-83.937-59.663-83.937-42.7 0-29.977 64.196-59.663 83.937-3.07 2.047-5.118 5.118-5.995 8.482h131.316c-.877-3.364-3.071-6.435-5.995-8.482z" fill="url(#paint0_radial_11393_56621-uid-1)"></path><path d="M133.783 104.85c-1.024-.293-2.194-.732-3.363-1.024-11.114-2.779-32.756-4.68-57.762-4.68s-46.648 1.901-57.761 4.68c-1.317.292-2.486.585-3.364 1.024-2.193 1.901-3.802 4.533-4.533 7.311h131.316c-.731-2.778-2.34-5.41-4.533-7.311z" fill="url(#paint1_linear_11393_56621-uid-1)"></path><path d="M73.68 19.742l.147 2.632c6.288 0 5.557-2.34 11.845-.146-3.364-1.462-7.312-2.34-11.991-2.486z" fill="url(#paint2_linear_11393_56621-uid-1)"></path><path d="M72.658 120.933c36.262 0 65.658-3.929 65.658-8.774 0-4.846-29.396-8.774-65.658-8.774S7 107.313 7 112.159c0 4.845 29.396 8.774 65.658 8.774z" fill="url(#paint3_radial_11393_56621-uid-1)"></path><path d="M81.14 109.527c-5.85 0-10.675 4.826-10.675 10.675v.731h2.193c6.727 0 13.161-.146 19.157-.438v-.439c0-5.703-4.826-10.529-10.675-10.529z" fill="#CE7E3C"></path><path d="M30.25 115.668c0-4.825 29.393-8.774 65.659-8.774 13.161 0 25.444.585 35.68 1.463-10.674-2.925-33.048-4.972-58.931-4.972-36.265 0-65.658 3.948-65.658 8.774 0 3.071 11.991 5.849 29.977 7.457-4.24-1.169-6.726-2.485-6.726-3.948z" fill="url(#paint4_linear_11393_56621-uid-1)"></path><path d="M73.828 0h-2.34v.731c-2.34 1.609-4.094 5.703-4.094 10.383 0 4.679 1.608 8.773 4.094 10.382l.146.731h2.194c3.51 0 6.434-4.972 6.434-11.26C80.262 4.68 77.337 0 73.828 0zm0 14.184c-.878 0-1.755-1.316-1.755-2.924 0-1.609.731-2.925 1.755-2.925 1.023 0 1.754 1.316 1.754 2.925 0 1.608-.73 2.925-1.754 2.925z" fill="url(#paint5_linear_11393_56621-uid-1)"></path><path d="M68.27 20.034c1.17.438 2.34 1.17 3.218 2.486 3.51-.146 6.288-5.118 6.288-11.26C77.776 5.118 74.85 0 71.34 0s-6.434 4.972-6.434 11.26c0 3.656 1.024 6.873 2.486 8.92.439-.146.731-.146.878-.146zm3.218-11.699c.877 0 1.754 1.316 1.754 2.925 0 1.608-.73 2.925-1.754 2.925-.878 0-1.755-1.317-1.755-2.925 0-1.609.731-2.925 1.755-2.925z" fill="url(#paint6_linear_11393_56621-uid-1)"></path><path d="M83.041 108.503c-6.141-3.656-16.962-2.34-21.642 1.316-1.17 2.047-1.901 4.387-1.901 6.873 0 7.311 5.995 13.307 13.307 13.307s13.307-5.996 13.307-13.307c-.146-3.071-1.316-5.849-3.07-8.189z" fill="url(#paint7_radial_11393_56621-uid-1)"></path><path d="M80.116 105.871c-.877-.585-1.609-1.463-2.193-2.486H67.1c-.438 1.023-1.17 1.755-2.047 2.486a2.017 2.017 0 01-.585.438h-.146l-.439.439-.438.439-.439.438a11.057 11.057 0 00-1.609 2.048c4.68-3.656 15.501-4.972 21.643-1.316-.878-.878-1.755-1.755-2.925-2.486z" fill="#CE7E3C"></path><defs><linearGradient id="paint1_linear_11393_56621-uid-1" x1="6.992" y1="105.747" x2="138.325" y2="105.747" gradientUnits="userSpaceOnUse"><stop stop-color="#FCCD81"></stop><stop offset=".289" stop-color="#FBCA7E"></stop><stop offset=".492" stop-color="#F9C275"></stop><stop offset=".67" stop-color="#F4B365"></stop><stop offset=".831" stop-color="#EE9E50"></stop><stop offset=".888" stop-color="#EB9546"></stop></linearGradient><linearGradient id="paint2_linear_11393_56621-uid-1" x1="73.694" y1="21.131" x2="85.703" y2="21.131" gradientUnits="userSpaceOnUse"><stop offset=".01" stop-color="#CE7E3C"></stop><stop offset=".466" stop-color="#EB9546"></stop></linearGradient><linearGradient id="paint4_linear_11393_56621-uid-1" x1="6.992" y1="111.511" x2="131.58" y2="111.511" gradientUnits="userSpaceOnUse"><stop offset=".187" stop-color="#CE7E3C"></stop><stop offset=".993" stop-color="#CE7E3C"></stop></linearGradient><linearGradient id="paint5_linear_11393_56621-uid-1" x1="73.853" y1="22.457" x2="73.853" y2=".017" gradientUnits="userSpaceOnUse"><stop stop-color="#EB9546"></stop><stop offset=".888" stop-color="#FCCD81"></stop></linearGradient><linearGradient id="paint6_linear_11393_56621-uid-1" x1="65.053" y1="17.645" x2="77.93" y2="4.767" gradientUnits="userSpaceOnUse"><stop stop-color="#EB9546"></stop><stop offset=".348" stop-color="#FBCB7F"></stop><stop offset=".888" stop-color="#FCCD81"></stop></linearGradient><radialGradient id="paint0_radial_11393_56621-uid-1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-18.439 184.325 -423.536) scale(81.3108 121.714)"><stop offset=".676" stop-color="#EB9546"></stop><stop offset=".993" stop-color="#FCCD81"></stop></radialGradient><radialGradient id="paint3_radial_11393_56621-uid-1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(94.0991 0 0 21.1064 62.858 107.002)"><stop offset=".539" stop-color="#EB9546"></stop><stop offset=".993" stop-color="#FCCD81"></stop></radialGradient><radialGradient id="paint7_radial_11393_56621-uid-1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(67.222 113.181) scale(16.3858)"><stop offset=".705" stop-color="#FCCD81"></stop><stop offset="1" stop-color="#EB9546"></stop></radialGradient></defs></svg>
                </Col>
                <Col>
                    <h1 className='title' style={{fontSize: "3.5rem"}}>
                    It’s time. <br/>
                    Full-time hiring now on <br/> Upwork.
                    </h1>
                    <p className='text-muted fw-bold-5'>Full-time hiring capabilities on Upwork allows global professionals and businesses of all sizes to find each other, trial working together, and then commit to a full-time relationship all on our Work Marketplace.</p>
                    <p className='text-green fw-bold-5'>Learn more about full-time hiring on Upwork</p>
                </Col>
            </Row>
        </Container>
        

        {/* 4th Section */}
        <Container className='my-5 py-5  br-10' >
            <Row className='bg-gray h-100 mx-5 br-10 '>
                <Col xs={7} className='d-flex flex-column br-l-10 bg-mint text-white p-5 px-4'>
                    <h4>Enterprise Suite</h4>
                    <div>
                        <h1 className='title text-white fw-bold-5 mt-2' style={{fontSize: "50px"}}>This is how <br/><span className='text-mint'>good companies <br/> find good company. </span></h1>
                    </div>
                    <h5 className='fw-bold-5'>Access the top 1% of talent on Upwork, and a full suite of hybrid <br/> workforce management tools. This is how innovation works now.</h5>
                    <div className='d-flex align-items-center fw-bold-5 mt-3 mb-2'>
                        <img data-v-0a8f139c="" className='px-2'   alt="vsuc_Skills_11" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Skills.svg" />
                            Access expert talent to fill your skill gaps
                    </div>
                    <div className='d-flex align-items-center p-0 m-0 fw-bold-5 mb-2'>
                        <img data-v-0a8f139c="" className='px-2' alt="vsuc_Control_12" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Briefcase.svg"  />
                        Control your workflow: hire, classify and pay your talent
                    </div>
                    <div className='d-flex align-items-center fw-bold-5 mb-4'>
                        <img data-v-0a8f139c="" className='px-2' alt="vsuc_Support_13" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Support.svg"  />
                        Partner with Upwork for end-to-end support
                    </div>
                    <div>
                        <Button variant='light' className='text-dark-mint px-4 fw-bold-5 py-2 shadow-none rounded-pill '>
                            Learn More
                        </Button>
                    </div>
                </Col>
                <Col xs={5} className='d-flex justify-content-center br-10'>
                    <img data-v-0a8f139c="" className='br-r-10'  loading="lazy" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/hxwn-enterprise-image@2x.png" width="582" height="580" alt="vsuc_EnterpriseImage_10" data-qa="image" title="" />
                </Col>
            </Row>
        </Container>


        {/* 5th section */}
        <Container className='my-5 py-5  br-10' >
            <Row className=' h-100 mx-5 br-10' >
                <Card style={{marginLeft: "15px"}}className='rebrand-underlay border-0 text-white pb-4'>
                    <Card.Header className='border-0 py-4 px-4'>
                        <h4 classname=''>For clients</h4>
                    </Card.Header>
                    <Card.Body className='border-0 mt-5 mx-3'>
                        <h1 className='title text-white' style={{fontSize: "4.5rem"}}>Find talent <br/> your way</h1>
                        <p className='fw-bold-5 '>Work with the largest network of independent <br/> professionals and get things done—from quick <br/>turnarounds to big transformations.</p>
                    </Card.Body>
                    <Card.Footer className='border-0'>
                        <Row>
                            <Col xs={4}>
                                <Card role="button" className='bg-green-500 px-3 py-2' style={{backgroundColor: "#14a800"}}>
                                    <h2>Post a job <br/> and hire a pro</h2>
                                    <div className="d-flex align-items-center mt-3 bg-green-500 ">
                                        <a href="/" className='text-white fs-16 fw-bold text-decoration-none '>Talent Marketplace &#8482;</a>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" data-qa="arrow" className="vertical-align-middle ml-5"><path d="M7 0.5L5.775 1.725L10.675 6.625H0L0 8.375H10.675L5.775 13.275L7 14.5L14 7.5L7 0.5Z"></path></svg>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card role="button" className='bg-green-500 px-3 py-2' style={{backgroundColor: "#14a800"}}>
                                    <h2>Browse and <br/> buy projects</h2>
                                    <div className="d-flex align-items-center  mt-3">
                                        <a href="/" className='text-white fs-16 fw-bold text-decoration-none model-name'>Project Catalog &#8482;</a>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" data-qa="arrow" className="vertical-align-middle ml-5"><path d="M7 0.5L5.775 1.725L10.675 6.625H0L0 8.375H10.675L5.775 13.275L7 14.5L14 7.5L7 0.5Z"></path></svg>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card role="button" className='bg-green-500 px-3 py-2' style={{backgroundColor: "#14a800"}}>
                                    <h2>Let us help you find <br/> the right talent</h2>
                                    <div className="d-flex align-items-center  mt-3">
                                        <a href="/" className='text-white fs-16 fw-bold text-decoration-none'>Talent Scout &#8482;</a>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" data-qa="arrow" className="vertical-align-middle ml-5"><path d="M7 0.5L5.775 1.725L10.675 6.625H0L0 8.375H10.675L5.775 13.275L7 14.5L14 7.5L7 0.5Z"></path></svg>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    </>
    )
}

