import React from 'react'
import image from './img/note.jpeg'
const Home = () => {
    return (
        <div>

            <marquee><h2>User Authentication App</h2></marquee>
            <img src={`${image}`} style={{ width: '100%', height: '60%' }} alt="image" />

        </div>
    )
}
export default Home