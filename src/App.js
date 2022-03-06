import './App.css';
import {Container, Navbar} from "react-bootstrap";
import Routes from "./Routes";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className={'mb-5'}>
                <Container>
                    <Navbar.Brand href="7">
                        <img
                            alt=""
                            src="https://docs.spacexdata.com/favicon.ico"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        FARFETCH SpaceX API
                    </Navbar.Brand>
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
