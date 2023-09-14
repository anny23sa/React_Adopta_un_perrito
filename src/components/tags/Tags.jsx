import React from 'react'
import Badge from 'react-bootstrap/Badge';

export const Tags = (props) => {
    return (
        <h3><Badge bg={props.colorBadge}>{props.tipoPerrito}</Badge></h3>

    )
}
