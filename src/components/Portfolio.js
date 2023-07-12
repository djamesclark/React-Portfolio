
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

import morningJava from '../images/morning.png'
import horiseon from '../images/horiseon.jpg'
import ZenZone from '../images/ZenZone.jpg'
import puppies from '../images/puppies.png'
import cheatsheet from '../images/cheatsheet.png'
import prework from '../images/prework.png'
import codingLibrary from '../images/logo-coding-library.png'

function Portfolio() {
    return (
        <Container>
            <Row>
                <Col className='p-2'>
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src={morningJava} />
                        <Card.Body>
                            <Card.Title>Morning Java</Card.Title>
                            <Card.Text>
                            This group project showcases our API proficiency and teamwork, demonstrating mastery over making API calls collaboratively.                            </Card.Text>
                            <Button variant="dark" href='https://github.com/KaylaNorris/morning-java' className='m-2'>GitHub Repo</Button>
                            <Button variant="dark" href='https://kaylanorris.github.io/morning-java/'>Deployed Site</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src={horiseon} />
                        <Card.Body>
                            <Card.Title>Horiseon</Card.Title>
                            <Card.Text>
                            My initial coding project revolved around debugging and resolving specific website issues, providing valuable experience in problem-solving.                            </Card.Text>
                            <Button variant="dark" href='https://github.com/djamesclark/01-Challenge' className='m-2'>GitHub Repo</Button>
                            <Button variant="dark" href='https://djamesclark.github.io/01-Challenge/'>Deployed Site</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src={ZenZone} />
                        <Card.Body>
                            <Card.Title>Zen Zone</Card.Title>
                            <Card.Text>
                            This project empowered our team to explore and integrate cutting-edge technologies into our program, utilizing API calls from Calendly and Spotify to enhance functionality.                            </Card.Text>
                            <Button variant="dark" href='https://github.com/djamesclark/Zen-Zone' className='m-2'>GitHub Repo</Button>
                            <Button variant="dark" href='https://zen-zone.herokuapp.com/'>Deployed Site</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-2'>
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src={puppies} />
                        <Card.Body>
                            <Card.Title>Puppy Pals</Card.Title>
                            <Card.Text>
                            This solo website project, built from scratch, provided a glimpse into the possibilities achievable within a week of learning, even with limited functionality.                            </Card.Text>
                            <Button variant="dark" href='https://github.com/djamesclark/01-22-mini-project' className='m-2'>GitHub Repo</Button>
                            <Button variant="dark" href='https://djamesclark.github.io/01-22-mini-project/'>Deployed Site</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src={cheatsheet} />
                        <Card.Body>
                            <Card.Title>CSS Cheatsheet</Card.Title>
                            <Card.Text>
                            Showcasing mastery of flexbox, this website serves as a valuable lesson in CSS techniques, delivering an aesthetically pleasing and responsive design.                            </Card.Text>
                            <Button variant="dark" href='https://github.com/djamesclark/02-28-mini-project' className='m-2'>GitHub Repo</Button>
                            <Button variant="dark" href='https://djamesclark.github.io/02-28-mini-project/'>Deployed Site</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src={codingLibrary} />
                        <Card.Body>
                            <Card.Title>Coding Library</Card.Title>
                            <Card.Text>
                            Coding Library is meant to be a one stop shop for all things coding. It provides a vast library of resources and books for anyone learning to code. This group project solidified our understanding of MERN and helped hone our React capabilities.                            </Card.Text>
                            <Button variant="dark" href='https://github.com/djamesclark/Coding-Library' className='m-2'>GitHub Repo</Button>
                            <Button variant="dark" href='https://lit-earth-19040-5018388296c4.herokuapp.com/'>Deployed Site</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    );
}

export default Portfolio;