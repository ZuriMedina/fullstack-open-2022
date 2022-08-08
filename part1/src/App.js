import './App.css';
import Mensaje from './Mensaje'
import { useState } from 'react'

//component
const Counter = ({ contador }) => {
  return <h1>{contador}</h1>
}

const App = (props) => {

  /* const contador = useState(0);
const contadorValue = contador[0];
const updateContador = contador[1]; */

  //Hook useState
  const [contadorValue, updateContador] = useState(0)

  const handleClick = () => {
    updateContador(contadorValue + 1)
  }

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)


  const firstName = 'Zuri'

  return (
    <div className="App">

      <button onClick={handleClick}>
        incrementar
      </button>

      <Counter contador={contadorValue} />

      <p>{left}</p>
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>

      <p>{right}</p>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>

      <Mensaje color='red' message='Estamos trabajando, tal' />
      {firstName}
    </div>
  );
}

export default App;
