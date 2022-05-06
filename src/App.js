import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';
import animal01 from './images/cow.png'
import animal02 from './images/horse.png'
import animal03 from './images/sheep.png'

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div className="App">
      <button onClick={openModal}>Clique aqui e escolha um animal para pastar</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <img src={animal01} alt='Vaca' className='iconImage'/>
          <img src={animal03} alt='Ovelha' className='iconImage'/>
          <img src={animal02} alt='Cavalo' className='iconImage'/>
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default App;
