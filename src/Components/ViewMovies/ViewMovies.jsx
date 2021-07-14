// * MODULES
import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../Tools/Context/DataContext'
import { GetMoviesFn } from '../../Tools/Functions/RequestMovie'
import ModalEdit from '../ModalEdit/ModalEdit'

function ViewMovies() {

    const { movies, setMovies } = useContext(DataContext)
    const [currentMovie, setCurrentMovie] = useState([])
    const cookies = JSON.parse(localStorage.getItem('state'));

    useEffect(() => {
        return localStorage.setItem('state', JSON.stringify(movies))
    }, [movies])

    useEffect(() => {
        if (!cookies && movies.length !== 0) return localStorage.setItem('state', JSON.stringify(movies));
        if (movies && movies.length == 0 && cookies && cookies.length == 0) return GetMoviesFn({ movies, setMovies })
        if (cookies) return setMovies(cookies)
    }, [])


    // FUNCTION DELETE MOVIE
    const deleteMovie = (id_movie) => {
        let renderMovie = movies.filter(e => e.id !== id_movie)
        setMovies(renderMovie)
        localStorage.setItem('state', JSON.stringify(movies));
    }

    // FUNCTION CLICK FOR MORE DETAIL MOVIE
    const showMovieDetail = (id_movie) => {
        let showMovie = movies.filter(e => e.id === id_movie)
        setCurrentMovie(showMovie)
        document.body.style.backgroundImage = `linear-gradient(rgba(30,27,38, 0.95),  rgba(30,27,38, 0.95)), url('${currentMovie.length !== 0 ? currentMovie[0].image : ''}')`
    }

    // * MODAL EDIT MOVIE
    const [show, setshow] = useState(false)
    const [IdMovieEdit, setIdMovieEdit] = useState(false)

    // FUNCTION FOR EDIT CURRENT MOVIE SELECTED
    const editMovie = (id_movie) => {
        setshow(true)
        setIdMovieEdit(movies.filter(e => e.id === id_movie))
    }

    // FUNCTION FOR CLOSE MODAL OF EDIT MOVIE
    const closeModalHandler = () => {
        setshow(false)
        document.getElementById("formpost").reset();
    }

    // * CONTENT
    return (
        <div className="content__ViewMovies">
            <div className={show ? 'back_drop' : ''}>
                <header className="title_column">
                    Movies 🎥
                </header>
                <div className="row_view">
                    <div className="column_one">
                        {
                            movies?.map((movie, i) => {
                                return <div className="card_movie" key={i} onClick={() => showMovieDetail(movie.id)}>
                                    <div className="title">{movie.title}</div>
                                    <div className="release"> Release {movie.release}</div>

                                    <button className="deleteMovie" onClick={() => deleteMovie(movie.id)}>❌</button>
                                    <button className="deleteMovie" onClick={() => editMovie(movie.id)}>✏️</button>
                                </div>
                            })
                        }
                    </div>
                    <div className="column_two">

                        {
                            currentMovie?.map((detail_movie, i) => {
                                return <div className="view_Movie" key={i}>
                                    <div className="title_detail">{detail_movie.title}</div>
                                    <img src={detail_movie.image} alt="not_found" />
                                    <div className="title_description">{detail_movie.description}</div>
                                    <div className="title_released">Released: {detail_movie.release}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={show ? 'contain_modal' : ""}>
                <ModalEdit show={show} closeModalHandler={closeModalHandler} id_movie={IdMovieEdit} />
            </div>
        </div>
    )
}

export default ViewMovies