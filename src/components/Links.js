import React from 'react'
import styled from 'styled-components'

function Links({listId, name}) {
    return (
        <LinksContainer>
            <h3>List Id: {listId} </h3>
            <h4>Name: {name} </h4>
        </LinksContainer>
    )
}

export default Links

const LinksContainer = styled.div`
    width: 30%;
    background:white;
    padding-bottom: 5%;
    border-bottom: 1px solid grey;

`