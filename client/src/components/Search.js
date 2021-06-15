import axios from "axios";
import React, {useRef} from "react";
import { Form } from "react-bootstrap";
import { store } from 'react-notifications-component';
import 'animate.css/animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search ({setMovies, apiKey}) {
    const movieInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        axios.get("http://www.omdbapi.com/?s=" + movieInput.current.value + "&apikey=" + apiKey)
        .then(({data}) => {
            console.log(data.Search);
            const movieData = data.Search
            if (movieData.length == 0) {
                return;
            } else {
                setMovies(movieData); 
            }
        }).catch(err => 
            handleErrorNotification(err)) 
    }

    const handleErrorNotification = (err) => {
        store.addNotification({
            message: "This search does not exist. Please search for something else",
            type: "danger",
            insert: "top",
            container: "top-full",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 2000,
                pauseOnHover: true,
                onScreen: true,
                click: true,
                touch: true
            }
        });
      }
return (
    <>
    <div className="jumbotron d-flex justify-content-start">
    <div  style= {{"height": "450px"}}>
            <h1 className="fs-2 mb-3" style= {{"font-size": "60px"}} >Search for any movie!</h1>
            <Form onSubmit={handleSubmit} >
                <div className="d-flex flex-row justify-content-start">
                    <Form.Group >
                            <Form.Control ref={movieInput} type="text" placeholder="Search Movie" className="w-100"/>
                    </Form.Group>
                    <div>
                        <button className="btn ml-2"  size="md" type="submit">
                            <FontAwesomeIcon style={{"color": "white"}} icon={faSearch}/>
                        </button>
                    </div>
                </div> 
            </Form>
    </div>
    </div>
    </>
)
}

export default Search;