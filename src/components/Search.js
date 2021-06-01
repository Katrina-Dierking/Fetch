import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {SearchContainer} from './SearchDesign'

function Search() {

    const [ items, setItems ] = useState([]);
    const [searchList, setSearchList] = useState();

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

    return (
        <SearchContainer>
        <div className="wrapper">
            <nav>
                <input type="checkbox" id="show-search" onChange={event =>{setSearchList(event.target.value)}} />
                <div className="content">
                    <div className = "logo"><a href="#"><h1>fetch</h1></a></div>
                    <ul className="links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Lists Text</a></li>
                    </ul>
                </div>
                <label for="show-search" className="search-icon"><i className="fas fa-search"></i></label>

                <form action="#" className="search-box">
                    <input type="text" placeholder="Search list..." required></input>
                    <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>

                    {filteredItems.filter((value) => {
                        if (searchList == '') {
                            return value
                        }else if(value.listId == searchList) {
                            return value
                        }
                    }).map((value, index) => {
                        return (
                            <div className="listId" key = {index}>
                                <p>{value.listId}</p>
                            </div>
                            
                        )
                    })}
                </form>
            </nav>
        </div>
        </SearchContainer>
    )


}

export default Search



