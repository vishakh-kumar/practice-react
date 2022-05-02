import Counters from "./components/Counters";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";
function App() {
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
        <div className="App">
            <Navigation
                totalCounters={values.filter((c) => c.value > 0).length}
            />
            <Container>
                <Counters
                    values={values}
                    onReset={handleReset}
                    onDelete={handleDelete}
                    onIncreament={handleIncreament}
                    onDecreament={handleDecreament}
                />
            </Container>
        </div>
    );
}
export default App;
