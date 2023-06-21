import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import morningJava from '../images/morning.png'
import horiseon from '../images/horiseon.jpg'
import ZenZone from '../images/ZenZone.jpg'
import puppies from '../images/puppies.png'
import cheatsheet from '../images/cheatsheet.png'
import prework from '../images/prework.png'

function Portfolio() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={morningJava} />
                <Card.Body>
                    <Card.Title>Morning Java</Card.Title>
                    <Card.Text>
                        This is a group project meant to show our mastery over API calls and working as a team!
                    </Card.Text>
                    <Button variant="dark" href='https://github.com/KaylaNorris/morning-java' className='m-2'>GitHub Repo</Button>
                    <Button variant="dark" href='https://kaylanorris.github.io/morning-java/'>Deployed Site</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={horiseon} />
                <Card.Body>
                    <Card.Title>Horiseon</Card.Title>
                    <Card.Text>
                        This was my first coding project centered around debugging and fixing certain aspects of the website.
                    </Card.Text>
                    <Button variant="dark" href='https://github.com/djamesclark/01-Challenge' className='m-2'>GitHub Repo</Button>
                    <Button variant="dark" href='https://djamesclark.github.io/01-Challenge/'>Deployed Site</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ZenZone} />
                <Card.Body>
                    <Card.Title>Zen Zone</Card.Title>
                    <Card.Text>
                        This project taught our team to research and implement new and exciting technologies to our program. This one uses Calendly and Spotify API calls.
                    </Card.Text>
                    <Button variant="dark" href='https://github.com/djamesclark/Zen-Zone' className='m-2'>GitHub Repo</Button>
                    <Button variant="dark" href='https://zen-zone.herokuapp.com/'>Deployed Site</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={puppies} />
                <Card.Body>
                    <Card.Title>Puppy Pals</Card.Title>
                    <Card.Text>
                        This was my first solo website build! Not a lot of functionality, but it was cool to see what could be accomplished with a week's worth of learning.
                    </Card.Text>
                    <Button variant="dark" href='https://github.com/djamesclark/01-22-mini-project' className='m-2'>GitHub Repo</Button>
                    <Button variant="dark" href='https://djamesclark.github.io/01-22-mini-project/'>Deployed Site</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cheatsheet} />
                <Card.Body>
                    <Card.Title>CSS Cheatsheet</Card.Title>
                    <Card.Text>
                        This website demonstrates skill with flexbox, while simultaneously teaching about CSS.
                    </Card.Text>
                    <Button variant="dark" href='https://github.com/djamesclark/02-28-mini-project' className='m-2'>GitHub Repo</Button>
                    <Button variant="dark" href='https://djamesclark.github.io/02-28-mini-project/'>Deployed Site</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prework} />
                <Card.Body>
                    <Card.Title>Prework Study Guide</Card.Title>
                    <Card.Text>
                        This was a project that took place prior to the coding bootcamp that walked me through basic HTML, CSS, and JavaScript
                    </Card.Text>
                    <Button variant="dark" href='https://github.com/djamesclark/prework-study-guide' className='m-2'>GitHub Repo</Button>
                    <Button variant="dark" href='https://djamesclark.github.io/prework-study-guide/'>Deployed Site</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Portfolio;