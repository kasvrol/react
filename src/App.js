import { useState } from "react";

import Cow from "./components/Cow";
import Rabbit from "./components/Rabbit";
import Horse from "./components/Horse";

import animal01 from "./images/cow.png";
import animal02 from "./images/horse.png";
import animal03 from "./images/rabbit.png";

import "./App.css";

function App() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!modalIsOpen);
    }

    function chooseAnimal(value) {
        if (value === 'cow') {
            return (
                <Cow />
            )
        }
        if (value === 'rabbit') {
            return (
                <Rabbit />
            )
        }
        if (value === 'horse') {
            return (
                <Horse />
            )
        }
    }

    return (
        <div className="App">
            <button onClick={toggleModal} className="modalButton">
                Clique aqui e escolha um animal para pastar
            </button>

            {modalIsOpen ? (
                <div className="iconImageContainer">
                    <img
                        src={animal01}
                        alt="Vaca"
                        className="iconImage"
                        onClick={() => chooseAnimal("cow")}
                    />
                    <img
                        src={animal03}
                        alt="Ovelha"
                        className="iconImage"
                        onClick={() => chooseAnimal("rabbit ")}
                    />
                    <img
                        src={animal02}
                        alt="Cavalo"
                        className="iconImage"
                        onClick={() => chooseAnimal("horse")}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default App;
