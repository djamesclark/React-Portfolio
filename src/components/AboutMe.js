import React from 'react'
import headshot from '../images/headshot.png'
import { Col, Row, Container } from 'react-bootstrap'


export default function AboutMe() {

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6} >
                    <img src={headshot} className='img-fluid' />
                </Col>
                <Col className="my-auto" xs={12} md={6}>
                    <p>
                        Greetings! I'm Danny Clark, a passionate web developer who recently graduated from a coding bootcamp at OSU. With a fresh set of skills and a hunger to create innovative and user-friendly websites, I'm eager to embark on my professional journey in the world of web development.
                        <br/>
                        <br/>
                        While coding keeps me engaged and challenged, I believe in maintaining a healthy work-life balance. In my free time, I cherish moments spent with my loving family, which includes my wonderful wife, delightful daughter, and our adorable pets—a loyal dog and two charming cats. We find joy in various activities, such as playing games that bring out our competitive spirits, exploring the great outdoors, cozying up to watch captivating movies, or simply relishing each other's company. These moments of togetherness bring warmth to our lives and remind me of the importance of balancing work and personal interests.
                        <br/>
                        <br/>
                        I'm excited to leverage my skills as a web developer, contribute to meaningful projects, and continue nurturing the bonds that make life fulfilling.
                    </p>
                </Col>
            </Row>
        </Container>


    )
}
