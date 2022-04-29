import Counters from "./components/Counters";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";
function App() {
    return (
        <div className="App">
            <Navigation />
            <Container>
                <Counters />
            </Container>
        </div>
    );
}
export default App;
