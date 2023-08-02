
import { Button, Container} from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";





const Header = () => {


    return (
        <Container>
            <div>
                <div className='text-center'>
                    <img src={logo} alt="" />
                    <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex gap-2'>
                    <Button variant="danger">Latest</Button>
                    <Marquee className='text-danger' speed={40}>
                        I can be a React component, multiple React components, or just some text...
                    </Marquee>

                </div>

            </div>
        </Container>

    );
};

export default Header;