// * MODULES
import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { DataContext } from '../../Tools/Context/DataContext'

function ModalEdit({ show, id_movie, closeModalHandler }) {

    const { movies, setMovies } = useContext(DataContext)
    const [updateMovie, setUpdateMovie] = useState({
        title: "",
        description: "",
        release: "",
        image: '',
        id: "",
    })

    // SUBMIT THE NEW DATA OF MODIFY NEW MOVIE
    const handleSubmit = (e) => {
        e.preventDefault();
        movies.map((el, index) => {
            if (el.id == id_movie[0].id) {
                movies[index] = {
                    "title": updateMovie.title,
                    "release": updateMovie.description,
                    "description": updateMovie.release,
                    "image": updateMovie.image,
                    "id": updateMovie.id,
                }
            }
        })
        closeModalHandler()
        Swal.fire({
            title: 'Update Movie Succesfully!',
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
            }
        })
        localStorage.setItem('state', JSON.stringify(movies));
        window.scrollTo(0, 0);
    }

    // ONCHANGE INPUTS FOR MODIFY INFORMATION OF MOVIE
    const handleChange = e => {
        setUpdateMovie({
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            release: document.getElementById('release').value,
            image: id_movie[0].image,
            id: id_movie[0].id
        })
    }

    // *CONTENT
    return (
        <div className="content__ModalEdit" style={{
            opacity: show ? '1' : '0',
            "text-align": "-webkit-center",
            "border-radius": "1rem",
            "padding": "1rem",
            "box-shadow": "grey 0.4px 0.5px 3px 0.2px",
            "visibility": "hidden",
            display: show ? '' : 'none',
            visibility: show ? '' : 'hidden',
        }}>

            <div className="head_title"><h3>MODIFY MOVIE</h3></div>
            {
                id_movie ? <form class="rating-wrapper" onSubmit={handleSubmit} name='id_movie' id="formpost">
                    <a onClick={closeModalHandler} href="#" className="close-button"></a>

                    <label htmlFor="title">Title:</label>
                    <div className="title">
                        <input type="text" placeholder={id_movie[0].title} name="title" id="title" required onChange={handleChange} />
                    </div>
                    <div className="image">
                        <img src={id_movie[0].image} alt="" srcset="" />
                    </div>
                    <label htmlFor="description">Description:</label>
                    <div className="description">
                        <textarea type="text" placeholder={id_movie[0].description} maxLength='300' name="description" id="description" required onChange={handleChange} />
                    </div>
                    <div className="release">
                        <label htmlFor="release">Release:</label>
                        <input type="text" placeholder={id_movie[0].release} name="release" id="release" required onChange={handleChange} />
                    </div>
                    <div className="btnsubmit">
                        <button className="submit">UPDATE</button>
                    </div>
                </form> : ''
            }
        </div>
    )
}

export default ModalEdit