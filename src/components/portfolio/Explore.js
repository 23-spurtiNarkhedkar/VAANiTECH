import React from 'react'
import '../styles/Portfolio.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import img1 from '../images/webDesign.jpg';
import grades from '../images/grades.jpg';
import andDev from '../images/andDev.jpg';
import flutter from '../images/flutter.jpg';
import ios from '../images/ios.jpg';
import srm from '../images/ios.jpg';

function Explore() {
    const data = [
        {
            id: 1,
            title: "Web Design",
            src: img1,
            desc: "Efficient in making a user-focused website with great features"
        },
        {
            id: 2,
            title: "Graphic Designing",
            src: grades,
            desc: "Right website design can maximize your online potential"
        },
        {
            id: 3,
            title: "Android Apps Development",
            src: andDev,
            desc: "Interactive mobile apps for your customers' engagement"
        },
        {
            id: 4,
            title: "Flutter App Development",
            src: flutter,
            desc: "Provide customized solutions to meet your requirements"
        },
        {
            id: 5,
            src: ios,
            title: "IOS App Development",
            desc: "A cross-platform mobile App for fast development solution"
        },
        {
            id: 6,
            title: "Custom CRM Development",
            src: srm,
            desc: "Real-time data analysis, finding deep insights"
        }

    ]
    return (
        <div>
            <Container className="WhatsetCodeGurukul p-3 px-md-5 my-4 ">
                <h2 className="WhatsetCodeGurukul-Heading RobotoSlabFont font-weight-bold text-center">
                    Explore Our Best Services
                </h2>
                {/* Columns are always 50% wide, on mobile and desktop */}
                <Container className="p-3 my-4 px-2 ps-md-5  WhatsetCodeGurukul-Content">
                    <Row className="my-3 g-0 p-2 ">
                        {data.map((element) => {
                            return (
                                <div className="col-md-6 my-2 my-3" key={element.id}>
                                    <Col>
                                        <Row className='p-2 '>
                                            <Col md={4}>
                                                <img className='w-100' src={element.src}></img>
                                            </Col>
                                            <Col md={8}>
                                                <h5 className="WhatsetCodeGurukul-Title mt-0">
                                                    {element.title}
                                                </h5>
                                                <div className="WhatsetCodeGurukul-Desc">
                                                    {element.desc}
                                                </div>
                                            </Col>
                                        </Row>

                                    </Col>
                                    {/* <WhatSetsApart title={element.title} description={element.description} /> */}
                                </div>
                            );
                        })}
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Explore