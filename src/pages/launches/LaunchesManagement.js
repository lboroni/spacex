import {useEffect, useState} from "react";
import Api from "../../services/Api";
import {Button, Card, Col, Row} from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import LaunchesCard from "./LaunchesCard";

const labels = ["All", "Past launches", "Upcoming launches"];

const LaunchesManagement = () => {
    const [limit, setLimit] = useState(4);
    const [active, setActive] = useState(0);
    const [label, setLabel] = useState(labels[0]);
    const [launches, setLaunches] = useState([]);

    function isActive(index, label) {
        setLabel(label);
        setActive(index);
    }

    useEffect(() => {
        if (label === labels[0]) {
            Api.launches.all(limit, true, 'rocket_name').then((resp) => {
                setLaunches(resp.data);
            }).catch(error => console.log('error', error));
        } else if (label === labels[1]) {
            Api.launches.past(limit, true).then((resp) => {
                setLaunches(resp.data);
            }).catch(error => console.log('error', error));
        } else {
            Api.launches.upcoming(limit, true).then((resp) => {
                setLaunches(resp.data);
            }).catch(error => console.log('error', error));
        }
    }, [active, label, limit]);

    return (
        <div>
            <Row>
                <Col>
                    <h2 className={'mb-4'}>
                        List with all SpaceX launches
                    </h2>
                </Col>
            </Row>
            <Row className={'mb-4'}>
                <Col>
                    {labels.map((value, index) => (
                        <Button key={index} variant="outline-dark" className={active === index ? 'active mx-1' : 'mx-1'}
                                size={'sm'}
                                onClick={() => isActive(index, value)}>{value}</Button>
                    ))}
                </Col>
            </Row>
            {launches.length > 0 ? (
                <Row>
                    {launches.map((value, index) => (
                        <Col key={index} className={'d-flex align-items-stretch'} md={3}>
                            <LaunchesCard launch={value}/>
                        </Col>
                    ))}
                    <InfiniteScroll dataLength={launches.length} next={() => setLimit(limit + 4)} hasMore={true}/>
                </Row>
            ) : (
                <Row className={'align-items-center'}>
                    <Col>
                        <Card border="warning" style={{width: '100%'}} className={'text-center'}>
                            <Card.Body>
                                <Card.Title>
                                    Sorry!
                                </Card.Title>
                                <hr/>
                                <Card.Text>
                                    We can not find data for your request.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    )
};

export default LaunchesManagement;