import React from 'react'
import { Card } from 'react-bootstrap'

const NoFoundData = () => {
  return (
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
  )
}

export default NoFoundData;