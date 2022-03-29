import {useEffect, useState} from "react";
import Api from "../../services/Api";
import {Button, Card, Col, Nav, Row} from "react-bootstrap";
import LaunchesCard from "./LaunchesCard";

import './style.css';
import InfiniteScroll from "../../components/InfiniteScroll";

const labels = ["All", "Past launches", "Upcoming launches"];
const limit = 4;

const LaunchesManagement = () => {
    const [offset, setOffset] = useState(0);
    const [active, setActive] = useState(0);
    const [label, setLabel] = useState(labels[0]);
    const [launches, setLaunches] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    function isActive(index, label) {
        setOffset(0);
        setLaunches([]);
        setLabel(label);
        setActive(index);
    }

    function loadMore() {
        console.log("load" + offset)
        setOffset(offset + limit);
    }

    useEffect(() => {
        if (label === labels[0]) {
            Api.launches.all(limit, true, 'id', offset).then((resp) => {
                setLaunches(old => [...old, ...resp.data]);
                setHasMore(resp.data.length > 0);
            }).catch(error => console.log('error', error));
        } else if (label === labels[1]) {
            Api.launches.past(limit, true, 'id', offset).then((resp) => {
                setLaunches(old => [...old, ...resp.data]);
                setHasMore(resp.data.length > 0);
            }).catch(error => console.log('error', error));
        } else {
            Api.launches.upcoming(limit, true, 'id', offset).then((resp) => {
                setLaunches(old => [...old, ...resp.data]);
                setHasMore(resp.data.length > 0);
            }).catch(error => console.log('error', error));
        }
    }, [active, label, offset]);

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
                    <Nav>
                        {labels.map((value, index) => (
                            <Button key={index} variant="outline-dark"
                                    className={active === index ? 'active mx-1' : 'mx-1'}
                                    size={'sm'}
                                    onClick={() => isActive(index, value)}>{value}</Button>
                        ))}
                    </Nav>
                </Col>
            </Row>
            {launches.length > 0 ? (
                <div className={"div-scroll"}>
                    <InfiniteScroll loadMore={loadMore}
                                    hasMore={hasMore}
                                    loader={""}
                                    initialLoad={false}
                                    threshold={400}

                    >
                        <Row>
                            {launches.map((value, index) => (
                                <Col key={index} className={'d-flex align-items-stretch'} xs={12} sm={12} md={6}
                                     lg={4}
                                     xl={3}>
                                    <LaunchesCard launch={value}/>
                                </Col>
                            ))}
                        </Row>
                    </InfiniteScroll>
                </div>
            ) : (
                <Row className={'align-items-center'}>
                    <Col>
                        <Card border="dark" style={{width: '100%'}} className={'text-center'}>
                            <Card.Body>
                                <Card.Title>
                                    Sorry!
                                </Card.Title>
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