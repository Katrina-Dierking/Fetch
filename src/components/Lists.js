import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ListCard from './ListCard';
import { Header, Container } from './CardDesign'

export default function Lists () {
    const [ items, setItems ] = useState([]);

    //set to an empty array because the data I'm getting back is an array
    useEffect (() => {
        axios
            .get("https://fetch-hiring.s3.amazonaws.com/hiring.json")
            .then(response => {
                console.log(response)
                setItems(response.data)
            })
            .catch(error => {
                console.log("that list item cannot be found", error);
            })
    }, []); 

    let sortedItems = items.sort((a,b ) => {
        return a.listId - b.listId
    })
    
    let filteredItems = sortedItems.filter(list => list.name !== "" && list.name !== null)
    console.log(filteredItems)

    return  (
        <>
        <Header>FETCH: LIST ITEMS</Header>
            <Container>
                {filteredItems.map((item, index) => {
            
                        return (
                           
                                <ListCard 
                                    key = {index}
                                    listId = {item.listId}
                                    name = {item.name}
                                />
                           

                        )
                    })}
            </Container>
    </>
    )
}