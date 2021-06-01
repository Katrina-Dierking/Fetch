import React from 'react'
import Layout from '../sharedFiles/Layout'
import {AboutPg} from '../../components/designFiles/AboutDesign'

function About() {
    return (
        <AboutPg>
            <Layout>
                <div className = "about-sec">
                    <div className = "top-sec">
                        <h2> About Me</h2>
                        <p>I'm a full-stack web developer. At the moment, I'm more comfortable in front-end though I'm actively working to become equally comfortable in backend.
                        </p><br></br>
                        <p>
                            I've spent most of my adult-life in the medical field and chose to come home full-time about size years ago. At that time, I taught myself WordPress, PhotoShop, Trello, etc and began freelancing. When I was introduced to coding, I fell in love with the challenge of it. My only regret is that I didn't get into web development much sooner.
                        </p><br></br>
                        <p>You'll come across so many other web developers who have more experience and are much further along than I am at this time. What you won't find is someone else more dedicated than I am to improving their skills, learning new languages and frameworks, and dedicated to making your company more successful. </p>
                    </div>
                
                    <hr className = "break"></hr>
                    <div className = "facts-about-sec">
                        <h2>Fun facts about me: </h2>
                        <ul className = "facts-list">
                            <li>I drink a LOT of coffee -- and black. I'm dangerous without it.</li>
                            <li>Gardening is my stress-reliever. My garden is completely edible.</li>
                            <li>I bake fresh bread several times a week.</li>
                            <li>I love reptiles though I have I also love my fur babies.</li>
                            <li>I'm sure I could win the Voice if it was recorded in my shower.</li>
                            <li>I am an accomplished maker of pancakes.</li>
                            <li>I've seen the Lost series 12 times and I still get choked up every time at the last episode.</li>
                        </ul>
                    </div>
                    <hr className = "break"></hr>

                    <div>
                        <h2>Where you can find me:</h2>
                        <div className="icon-links">
                            <i class="fab fa-github connect"><a href="https://github.com/Katrina-Dierking"> GitHub Profile</a></i>
                            <i class="fab fa-linkedin connect"><a href="https://www.linkedin.com/in/kalynn-dier/"> LinkedIn Profile</a></i>
                        </div>
                    </div>

                </div>
            </Layout>
       </AboutPg>
    )
}

export default About

