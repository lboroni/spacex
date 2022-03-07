import {Badge, Button, Card, Col, Row} from "react-bootstrap";

const LaunchesCard = ({launch}) => {
    return (
        <Card style={{width: '18rem'}} className={'m-1'}>
            <Card.Img variant="top"
                      src={launch.links.mission_patch ? `${launch.links.mission_patch}` : "https://pplware.sapo.pt/wp-content/uploads/2021/01/SpaceX-Tesmanian_1600x.jpg"}
                      style={{maxHeight: '15rem', height: '15rem'}}
                      className={'p-3'}/>
            <Card.Header className={'bg-dark text-light'}>
                <b className={'text-uppercase'}>
                    <small>{launch.mission_name}</small>
                </b>
            </Card.Header>
            <Card.Body>
                <div className={'text-capitalize'}>
                    <Row>
                        <Col md={6}>
                            <b><small>year</small></b>
                        </Col>
                        <Col md={6}>
                            <small>{launch.launch_year}</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <b><small>Flight Number</small></b>
                        </Col>
                        <Col md={6}>
                            <small>{launch.flight_number}</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <b><small>Rocket name</small></b>
                        </Col>
                        <Col md={6}>
                            <small>{launch.rocket.rocket_name}</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <b><small>Success</small></b>
                        </Col>
                        <Col md={6}>
                            {launch.launch_success ? (
                                <Badge bg="success">Success</Badge>) : (
                                <Badge bg="danger">Failure</Badge>)
                            }
                        </Col>
                    </Row>
                    <div className="d-grid gap-2 mt-2">
                        <Button variant="outline-dark" size="sm">
                            Read more
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default LaunchesCard;