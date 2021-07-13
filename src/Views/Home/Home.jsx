// * MODULES
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/plus.svg'
// * COMPONENTS
import ViewMovies from '../../Components/ViewMovies/ViewMovies'

function Home() {
    return (
        <div className="content__Home">
            <ViewMovies />

            <Link to={'/addnewmovie'}>
                <div class="wrapper">
                    <div class="circle pulse"></div>
                    <div class="circle">
                        {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <polygon points="40,30 65,50 40,70"></polygon>
                        </svg>}
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default Home