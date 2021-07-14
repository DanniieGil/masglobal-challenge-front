import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { DataContext } from '../../Tools/Context/DataContext'
import { GetMoviesFn, ImageChangeFn } from '../../Tools/Functions/RequestMovie'

function FormMovie() {

    const { movies, setMovies } = useContext(DataContext)

    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        release: "",
        image: "",
        id: "",
    })

    useEffect(() => {
        if (movies.length === 0) GetMoviesFn({ movies, setMovies })
        localStorage.setItem('state', JSON.stringify(movies));
    }, [])

    const handleChange = e => {
        var maxid = 0;
        movies.map(obj => { if (obj.id > maxid) return maxid = obj.id });
        newMovie.id = maxid + 1
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
    }

    let history = useHistory();
    const handleSubmit = async e => {
        e.preventDefault()
        setMovies(movies.concat(newMovie))
        Swal.fire({
            title: 'Reseña Añadida Exitosamente!',
            icon: 'success',
            confirmButtonText: 'OK',
            iconColor: "#49AF41",
            buttonsStyling: true,
            customClass: {
                popup: 'popup-order-info2',
                title: 'title-order-info2',
                input: 'input-order-info2',
                validationMessage: 'validationMessage-order-info2',
                confirmButton: 'confirmButton-order-info2',
            },
        })
        localStorage.setItem('state', JSON .stringify(movies.concat(newMovie)));
        history.push("/");
    }

    return (
        <div className="content__FormMovie">
            <form onSubmit={handleSubmit}>
                <h2 className="title_form">Add New Movie</h2>
                <input id='text-input' class="input" placeholder="title..." type='text' name="title" required onChange={handleChange} />
                <textarea id='textarea' class="input" maxLength='300' placeholder="description..." type='text' name="description" required onChange={handleChange} />
                <input class="input" id='date-input' placeholder="release..." type='date' name="release" required onChange={handleChange} />
                <input type="file" className="position" accept="image/*" required onChange={() => ImageChangeFn({ newMovie, setNewMovie })} />
                <img className={newMovie.image && newMovie.image.length !== 0 ? 'visible' : 'hidden'} src={newMovie.image} alt="" />

                <div className='movie-buttons'>

                    {
                        (newMovie.title !== '' && newMovie.description !== '' && newMovie.image !== '' && newMovie.release !== '') ?
                            <input className="button" type="submit" value="SAVE" name="submit" /> :
                            <input className="button disabled" disabled value="SAVE" />

                    }
                    <Link to='/'>
                        <button className="button">CANCEL</button>
                    </Link>
                </div>
            </form>

        </div>
    )
}

export default FormMovie
