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
                    // onClick={() => chooseAnimal("cow")}
                    />
                    <img
                        src={animal03}
                        alt="Ovelha"
                        className="iconImage"
                    // onClick={() => chooseAnimal("rabbit")}
                    />
                    <img
                        src={animal02}
                        alt="Cavalo"
                        className="iconImage"
                    // onClick={() => chooseAnimal("horse")}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default App;
