import {Badge, Button, Card, Col, Row} from "react-bootstrap";

const LaunchesCard = ({launch}) => {
    return (
        <Card style={{width: '18rem'}} className={'m-1'}>
            {launch.links.mission_patch ? (
                <Card.Img variant="top" src={`${launch.links.mission_patch}`}
                          style={{maxHeight: '15rem', height: '15rem'}}
                          className={'p-3'}/>
            ) : (
                <Card.Img variant="top"
                          src="https://pplware.sapo.pt/wp-content/uploads/2021/01/SpaceX-Tesmanian_1600x.jpg"
                          style={{maxHeight: '15rem', height: '15rem'}}
                          className={'p-3'}/>
            )}
            <Card.Header className={'bg-dark text-light'}>
                <b>
                    {launch.mission_name} / {launch.launch_year}
                </b>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Row>
                        <Col md={6}>
                            <b>Flight Number</b>
                        </Col>
                        <Col md={6}>
                            {launch.flight_number}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <b>Rocket name</b>
                        </Col>
                        <Col md={6}>
                            {launch.rocket.rocket_name}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <b>Success</b>
                        </Col>
                        <Col md={6}>
                            {launch.launch_success ? (
                                <Badge bg="success">Success</Badge>) : (
                                <Badge bg="danger">Failure</Badge>)
                            }
                        </Col>
                    </Row>
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="outline-dark" size="sm">
                        Read more
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default LaunchesCard;