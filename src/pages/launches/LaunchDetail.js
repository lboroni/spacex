import React from 'react'
import {useEffect, useState} from "react";
import {Col, Row, Badge} from 'react-bootstrap';
import Api from "../../services/Api";
import ReactPlayer from 'react-player/youtube';
import Title from '../../components/Title';
import ButtonLink from '../../components/ButtonLink';
import Loading from '../../components/Loading';
import NoFoundData from "../../components/NoFoundData";
import moment from 'moment';
import LaunchFactory from "../../LaunchFactory";

const LaunchPage = ({match}) => {

  const [launch, setLaunch] = useState();
  const [loading, setLoading] = useState(true);

    function buildPage(data, load) {
        setLaunch(data);
        setLoading(load);
    }

    useEffect(() => {
        Api.launches.getByID(match.params.id).then((resp) => {
            buildPage(LaunchFactory.builder(resp.data), false);
        }).catch(error => Api.error.default(error));
    }, [match]);

  if (loading) return <Loading />;
  return (
    <section>
      {launch === undefined ? 
        (<Row className={'text-center'}>
            <Col>
              <NoFoundData />
              <ButtonLink link="/" text="Back" className={'mt-4'} />
            </Col>
          </Row>) : 
        (<>
          <Row>
            <Col md={11} style={{display: 'flex', alignItems: 'center'}}>
              <Title title={`Mission name: ${launch.mission_name}`} className={'me-3'} /> - 
              {
                launch.launch_success ? 
                (<h3 className={'ms-3'}><Badge bg="success 1rem">Success</Badge></h3>) : 
                (<h3 className={'ms-3'}><Badge bg="danger">Failure</Badge></h3>)
              }
            </Col>
            <Col md={1} style={{textAlign: 'right'}}>
              <ButtonLink link="/" text="Back" />
            </Col>
          </Row>
          {
            (launch.launch_success === true || launch.launch_success === null) ? 
            (null) : 
            (<p><b>Mission's failure datails: </b> {launch.launch_failure_details.reason}</p>)
          }
          {
            launch.details && 
            (<p><b>Mission's datail: </b> {launch.details}</p>)
          }
          <p><b>Launch Date UTC: </b> {moment(launch.launch_date_utc).locale('pt').format('DD/MM/YYYY HH:mm')}</p>
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
        </>)
      }
    </section>
  )
}

export default LaunchPage;