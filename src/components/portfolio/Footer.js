import React from 'react'
import { Col, Container, ModalFooter, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div className='bg-dark py-2  fixed-bottom'>
            <Container className='text-light text-center'>
                {/* <Row>
                    <Col md={12}></Col>
                </Row> */}
                <div className='p-3'>
                © 2022 copyright :<a href='' style={{textDecoration:'none',color:'white',fontSize:'20px'}}> VAANI TECHLABS pvt ltd</a>
                </div>
            </Container>
        </div>
    )
}

export default Footer
