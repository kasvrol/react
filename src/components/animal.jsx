import "./App.css";
import { useState } from "react";
import animal01 from "./images/cow.png";
import animal02 from "./images/horse.png";
import animal03 from "./images/rabbit.png";

function App() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!modalIsOpen);
    }

    function Cow() {
        return (
            <div>
                <img src={animal01} alt="Vaca" className="iconImage" />
            </div>
        );
    }

    function Horse() {
        return (
            <div>
                <img src={animal02} alt="Cavalo" className="iconImage" />
            </div>
        );
    }

    function rabbit() {
        return (
            <div>
                <img src={animal03} alt="Ovelha" className="iconImage" />
            </div>
        );
    }

    return <div></div>;
}

export default App;
