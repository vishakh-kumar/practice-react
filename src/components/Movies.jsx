import React from "react";
import { useState, useEffect } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";

const Counter = () => {
    const movies = [
        {
            name: "ab",
            genre: "action",
            stock: 5,
            rating: 2.5,
        },
        {
            name: "ab2",
            genre: "romantic",
            stock: 5,
            rating: 2.5,
        },
        {
            name: "ab3",
            genre: "boring",
            stock: 5,
            rating: 2.5,
        },
        {
            name: "ab4",
            genre: "bleh",
            stock: 5,
            rating: 2.5,
        },
        {
            name: "ab5",
            genre: "motion",
            stock: 5,
            rating: 2.5,
        },
        {
            name: "ab6",
            genre: "sshhh",
            stock: 5,
            rating: 2.5,
        },
    ];
    const [getMovies, setGetMovies] = useState(movies);

    const handleDelete = (e) => {
        setGetMovies(getMovies.filter((m) => m.name !== e.name));
    };
    const count = getMovies.length;

    return (
        <Container>
            {count === 0 ? (
                "No movies"
            ) : (
                <>
                    <h1>Total number of movies {count}</h1>

                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getMovies.map((data) => {
                                return (
                                    <tr key={data._id}>
                                        <td>{data.name}</td>
                                        <td>{data.genre}</td>
                                        <td>{data.stock}</td>
                                        <td>{data.rating}</td>
                                        <td>
                                            <Button
                                                size="sm"
                                                variant="danger"
                                                onClick={() =>
                                                    handleDelete(data)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default Counter;
