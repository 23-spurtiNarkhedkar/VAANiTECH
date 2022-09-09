import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import '../styles/Carousel.css';

function CarouselComp() {
    const img = [
        {
            id: 1,
            name: "spurti",
            desc:"VAANI TECHLABS",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3MlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id: 2,
            name: "kou",
            desc:"COMPANY PORTFOLIO",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BnVOEnyueKljwm4-fjtCpC0Jh0MtvTDz2Q&usqp=CAU"
        }
    ]
    return (
        <>
            <Carousel>
                {img.map((ele) => {
                    return (
                        <CarouselItem className='mainCar'>
                            <img className="d-block w-100 Carimg" src={ele.src} />
                            <Carousel.Caption>
                                <h3>{ele.desc}</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </CarouselItem>

                    )
                })}
            </Carousel>
        </>
    )
}

export default CarouselComp



