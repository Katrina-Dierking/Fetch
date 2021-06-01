import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../sharedFiles/Layout'
import Lists from '../Lists'
import {HomeContainer} from '../designFiles/HomeDesign'

export default function Home() {
    return (
        <Layout>
            <HomeContainer>
                <h2>Welcome to the FETCH Api database.</h2>
                <p>Below you'll find a card for every item in the API that has a name. The cards span the full list of IDs for lists 1-4.</p>
                <p>If you'd like to see the list in text form, be sure to go to <Link to= './listlinks'>List Text</Link>.</p>
                <br></br>
                <p>The search bar is under construction. Check back soon for updates.</p>
            </HomeContainer>
            <Lists />
        </Layout>
    )
}

