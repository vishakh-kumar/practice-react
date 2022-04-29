import React from "react";
import Counter from "./Counter";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Counters = () => {
    const [values, setValues] = useState([
        { id: 1, value: 4 },
        { id: 2, value: 2 },
        { id: 3, value: 4 },
        { id: 4, value: 0 },
    ]);

    const handleIncreament = (counter) => {
        const counters = [...values];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        setValues(counters);
    };

    const handleDecreament = (counter) => {
        const counters = [...values];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        setValues(counters);
    };

    const handleDelete = (counterId) => {
        setValues(values.filter((c) => c.id !== counterId));
    };

    const handleReset = () => {
        setValues(
            values.map((c) => {
                c.value = 0;
                return c;
            })
        );
    };

    return (
        <Container>
            <Button onClick={handleReset}>Reset</Button>
            {values.map((counter) => (
                <Counter
                    key={counter.id}
                    onDelete={handleDelete}
                    counter={counter}
                    onIncreament={handleIncreament}
                    onDecreament={handleDecreament}
                />
            ))}
        </Container>
    );
};

export default Counters;
