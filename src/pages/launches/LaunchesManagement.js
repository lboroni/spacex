import {useEffect, useState} from "react";
import Api from "../../services/Api";
import {Button, Col, Nav, Row} from "react-bootstrap";
import LaunchesCard from "./LaunchesCard";
import NoFoundData from "../../components/NoFoundData";

import './style.css';
import InfiniteScroll from "../../components/InfiniteScroll";
import Title from "../../components/Title";
import Loading from "../../components/Loading";

const labels = ["All", "Past launches", "Upcoming launches"];
const limit = 4;

const LaunchesManagement = () => {
    const [offset, setOffset] = useState(0);
    const [active, setActive] = useState(0);
    const [label, setLabel] = useState(labels[0]);
    const [launches, setLaunches] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);

    function isActive(index, label) {
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
                setLoading(false);
            }).catch(error => console.log('error', error));
        } else if (label === labels[1]) {
            Api.launches.past(limit, true, 'id', offset).then((resp) => {
                setLaunches(resp.data);
                setHasMore(resp.data.length > 0);
                setLoading(false);
            }).catch(error => console.log('error', error));
        } else {
            Api.launches.upcoming(limit, true, 'id', offset).then((resp) => {
                setLaunches(resp.data);
                setHasMore(resp.data.length > 0);
                setLoading(false);
            }).catch(error => console.log('error', error));
        }
    }, [active, label, offset]);

    if (loading) return <Loading />;
    return (
        <div>
            <Row>
                <Col>
                    <Title title="List with all SpaceX launches" className="mb-4" />
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
                        <NoFoundData />
                    </Col>
                </Row>
            )}
        </div>
    )
};

export default LaunchesManagement;