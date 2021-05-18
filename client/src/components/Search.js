import axios from "axios";
import React, {useRef, useState} from "react";
import { Card, Form, Button } from "react-bootstrap";

function Search ({setMovies}) {
    const [apiKey, setApiKey] = useState("a3d98e34")

    const movieInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        axios.get("http://www.omdbapi.com/?s="+movieInput.current.value+"&apikey="+apiKey)
        .then(({data}) => {
            console.log(data.Search);

            setMovies(data.Search);
        });
    }

return (
    <Card>
    <Card.Body>
        <h2 className="fs-2" >Movie Search</h2>
        <Form onSubmit={handleSubmit} >
            <Form.Group >
                <Form.Label>Movie Name</Form.Label>
                    <Form.Control ref={movieInput} type="text" placeholder="Search Movie" />
            </Form.Group>
            <div className="d-flex flex-row justify-content-end">
                <Button variant="primary" size="md" type="submit">
                    Search
                </Button>
            </div> 
        </Form>
    </Card.Body>
</Card>
)
}

export default Search;