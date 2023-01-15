import React from 'react';
import './CardUsuario.jsx';
import {Card} from 'react-bootstrap'

const CardUsuario = (props) => {
  return (
    <>
    <Card className='mb-3'>
        <Card.Body>
          <Card.Title>{props.usuario.login}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Id: {props.usuario.id}
          </Card.Subtitle>
          <img 
            className="img" 
            src={props.usuario.avatar_url}>
          </img>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardUsuario;