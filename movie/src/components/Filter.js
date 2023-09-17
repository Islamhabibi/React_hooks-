import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

var Filter = ({ onFilter }) => {
    const [filterTitle, setFilterTitle] = useState("");
    const [filterRating, setFilterRating] = useState("");
    const handleFilter = () => {
        onFilter = ({ title: filterTitle, rating: filterRating })
    };


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Filter by Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value="filterTitle" onChange={(e) => setFilterTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Filter by Rating</Form.Label>
                <Form.Control type="text" placeholder="Enter Rating" value="filterRating" onChange={(e) => setFilterRating(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={handleFilter}>
                Filter
            </Button>


        </Form>
    )
}
export default Filter;