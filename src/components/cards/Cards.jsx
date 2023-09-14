import React from 'react'
import Card from 'react-bootstrap/Card';
import { Tags } from '../tags/Tags';

export const Cards = ({ direccionImagen, nombrePerrito, descripcionPerrito, colorBadge, tipoPerrito }) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={direccionImagen} />
        <Card.Body>
          <Card.Title>{nombrePerrito}</Card.Title>
          <Card.Text>
            {descripcionPerrito}
          </Card.Text>
          <Tags colorBadge={colorBadge} tipoPerrito={tipoPerrito} />
        </Card.Body>
      </Card>
    </>
  )
}
