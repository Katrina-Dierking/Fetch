import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Links from '../Links'
import Layout from '../sharedFiles/Layout'
import {ListPg, Container} from '../designFiles/ListLinksDesign'



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
    
    let filteredItems = sortedItems.filter(list => list.name !== "" && list.name !== null);


    return  (
        <ListPg>
        <Layout>
            <Container>
                {filteredItems.map((item, index) => {
                        return (
                                <div className = "listtext2">
                                   <Links 
                                    key = {index}
                                    listId = {item.listId}
                                    name = {item.name}
                                />
                                    
                                    </div>

                        )
                })}
            </Container>
            </Layout>
        </ListPg>
    )
}
