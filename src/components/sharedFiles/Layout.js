import React from 'react'
import Search from './Search'
import ToggleBar from '../ToggleBar'
import Footer from './Footer'


function Layout({children}) {
    return (
        <div>
            <ToggleBar />
            <Search />
            <main>
                {
                    children
                }
            </main>
            <Footer /> 
        </div>
    )
}

export default Layout
