import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>

                    <Nav className="mx-auto gap-2 d-flex flex-row ">

                        <Link className='text-decoration-none' to="/">Home</Link>
                        <Link className='text-decoration-none' to="/">About</Link>
                        <Link className='text-decoration-none' to="/">Career</Link>



                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}

                        {user ?
                            <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :
                            <Link to='/login'><Button variant="secondary">Login</Button>
                            </Link>
                        }

                    </Nav>

                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;