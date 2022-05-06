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
      right: 'auto',
      bottom: 'auto',
      width: '25vw',
      height: '5vw',
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-evenly'
    },
  };

  return (
    <div className="App">
      <button onClick={openModal} className='modalButton'>Clique aqui e escolha um animal para pastar</button>

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
      </Modal>
    </div>
  );
}

export default App;
