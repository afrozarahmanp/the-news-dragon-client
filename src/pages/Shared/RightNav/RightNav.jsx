import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../QZone/QZone";


const RightNav = () => {
    return (
        <div >
            <h4 className="mb-2">Login With</h4>
            <Button className="mb-2" variant="outline-primary"><FaGoogle />Login with Google</Button>{' '}
            <Button variant="outline-secondary"><FaGithub />Login with GitHub</Button>{' '}
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item ><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item ><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <QZone></QZone>

            <div  className="bg-secondary text-white p-4 mb-5">
                <h2>Create an Amazing Newspaper</h2>

                <h4>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </h4>
                <Button variant="danger">Learn More</Button>
            </div>

        </div>
    );
};

export default RightNav;