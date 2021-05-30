import React from 'react'
import { Card} from './CardDesign'

function ListCard( {listId, name} ) {
    return (
       
            <Card>
                <h3>List Id: {listId} </h3>
                <h4>Name: {name} </h4>
            </Card>
       
    )
}

export default ListCard
