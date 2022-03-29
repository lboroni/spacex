import React from 'react'
import {useEffect, useState} from "react";
import { Col, Row, Button, Badge } from 'react-bootstrap';
import Api from "../../services/Api";
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';

const LaunchPage = ({match}) => {

  const [launch, setLaunch] = useState();

  useEffect(() => {
    Api.launches.getByID(match.params.id).then((resp) => {
      setLaunch(resp.data[0]);
    }).catch(error => console.log('error', error));
  }, [match]);

  if (launch == undefined) return (
    <Row className={'text-center'}>
      <Col>
        <p>Sorry!</p>
        <span className='me-2'>We can not find data for your request.</span>
        <Link to="/">
          <Button variant="outline-dark" size="sm">
            Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
  return (
    <section>
      <Row>
        <Col md={11}>
          <h2>Mission name: {launch.mission_name}</h2>
        </Col>
        <Col md={1} style={{textAlign: 'right'}}>
          <Link to="/">
            <Button variant="outline-dark" size="sm">
              Back
            </Button>
          </Link>
        </Col>
      </Row>
      <p>
        <b>Mission status: </b> 
        {
          launch.launch_success ? 
          (<Badge bg="success">Success</Badge>) : 
          (<Badge bg="danger">Failure</Badge>)
        }
      </p>
      {
        (launch.launch_success == true || launch.launch_success == null) ? 
        (null) : 
        (<p><b>Mission's failure datails: </b> {launch.launch_failure_details.reason}</p>)
      }
      {
        launch.details && 
        (<p><b>Mission's datail: </b> {launch.details}</p>)
      }
      <p><b>Launch Date UTC: </b> {Date(launch.launch_date_utc)}</p>
      <p><b>Rocket's name: </b> {launch.rocket.rocket_name}</p>

      <Row className='mb-4'>
        <Col md={6} style={{maxHeight: '360px', textAlign: 'center'}}>
          <img src={launch.links.mission_patch} alt={launch.mission_name} style={{maxWidth: '100%', maxHeight: '100%'}} />
        </Col>
        <Col md={6}>
          <ReactPlayer url={launch.links.video_link} controls={true} style={{maxWidth: '100%', maxHeight: '100%'}} />
        </Col>
      </Row>

      {
        launch.links.wikipedia ? 
        (<p className='mb-4'>
          <b>More informations: </b> 
          <a href={launch.links.wikipedia} target="_blank">{launch.links.wikipedia}</a>
        </p>) : 
        (null)
      }
      
    </section>
  )
}

export default LaunchPage;