import './App.css';
import {Container, Navbar} from "react-bootstrap";
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className={'mb-5'}>
                <Container>
                    <Link to="/" className={'text-decoration-none'}>
                        <Navbar.Brand>
                            <img
                                alt=""
                                src="https://docs.spacexdata.com/favicon.ico"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            FARFETCH SpaceX API
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
            <Container>
                <Routes/>
            </Container>
        </div>
    )
        ;
}

export default App;
