import React from "react";
import { Button, Badge } from "react-bootstrap";

const Counter = (props) => {
    const num = props.counter.value;

    return (
        <div>
            <Button onClick={() => props.onDecreament(props.counter)} size="sm">
                {" "}
                -{" "}
            </Button>
            <Badge bg={num === 0 ? "warning" : "primary"}>
                {num === 0 ? "zero" : num}
            </Badge>
            <Button onClick={() => props.onIncreament(props.counter)} size="sm">
                {" "}
                +{" "}
            </Button>
            <Button
                onClick={() => props.onDelete(props.counter.id)}
                variant="danger"
                size="sm"
            >
                Delete
            </Button>
        </div>
    );
};

export default Counter;
