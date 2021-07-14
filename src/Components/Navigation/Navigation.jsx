// * MODULES
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import videoicon from '../../Assets/images/video.svg'

function Navigation() {

    useEffect(() => {
        const navLink = document.querySelectorAll('.nav__link');
        function linkAction() {
            navLink.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));
    }, [])

    // * CONTENT
    return (
        <div className='content__Navigation'>
            <header className="header">

                <Link to='/'>
                    <div className="content_appname">
                        <img className="image" src={videoicon} alt="" srcset="" />
                        <div className="title">MOWIES</div>
                    </div>
                </Link>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <Link to='/'> <li className="nav__item"><a href="#" className="nav__link active">Home</a></li></Link>
                        <Link to='/addnewmovie'>  <li className="nav__item"><a href="#" className="nav__link">Add Movie</a></li></Link>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Navigation
