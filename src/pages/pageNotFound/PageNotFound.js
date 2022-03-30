import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ButtonLink from '../../components/ButtonLink';
import Title from '../../components/Title';

const PageNotFound = () => {
  return (
    <section className='display-flex'>
        <Row>
            <Col md={11}>
                <Title title="This page doesn't exist." />
            </Col>
            <Col md={1} style={{textAlign: 'right'}}>
                <ButtonLink link="/" text="Back" />
            </Col>
        </Row>
    </section>
  )
}

export default PageNotFound;