import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ButtonLink = ({link, text, style, className}) => {
  return (
    <Link to={link}>
      <Button variant="outline-dark" size="sm" className={className} style={style}>
        {text}
      </Button>
    </Link>
  )
}

export default ButtonLink;