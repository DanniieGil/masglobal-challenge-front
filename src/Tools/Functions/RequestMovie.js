import axios from 'axios'
import { MOVIE_URL } from '../../Config/index'

// ! *****  Recibe all Movie from API Mocky  *****
export const GetMoviesFn = ({ movies, setMovies }) => {
    return axios.get(MOVIE_URL).then((response) => {
        response.data.movies.forEach((el, i) => {
            el.id = i + 1
        });
        setMovies(response.data.movies)
    }).catch(err => console.log(err));
}

// ! *****  Upload Image for New Movie  *****
export const ImageChangeFn = ({ newMovie, setNewMovie }) => {
    const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
    const file = document.querySelector("[type=file]").files;
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "docs_upload_example_us_preset");

    fetch(url, {
        method: "POST",
        body: formData
    }).then((response) => {
        return response.text();
    }).then((data) => {
        setNewMovie({
            ...newMovie,
            image: JSON.parse(data).url
        })
    });
}