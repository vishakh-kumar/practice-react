import React from "react";
import Counter from "./Counter";
import { Button, Container } from "react-bootstrap";

const Counters = (props) => {
    return (
        <Container>
            <Button onClick={props.onReset}>Reset</Button>
            {props.values.map((counter) => (
                <Counter
                    key={counter.id}
                    onDelete={props.onDelete}
                    counter={counter}
                    onIncreament={props.onIncreament}
                    onDecreament={props.onDecreament}
                />
            ))}
        </Container>
    );
};

export default Counters;
