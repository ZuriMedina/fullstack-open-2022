import './App.css';
import Mensaje from './Mensaje'
import { List } from './List.js'
import { useState } from 'react'

//component
const Counter = ({ contador }) => {
  return <h1>{contador}</h1>
}

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30',
    important: true,
    categories: ['sports', 'hobby']
  },
  {
    id: 2,
    content: 'amore',
    date: '2020-05-30',
    important: true
  },
  {
    id: 3,
    content: 'queso',
    date: '2021-05-30',
    important: true
  }
]

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
      {/* Send message as prop */}
      <Mensaje color='red' message='Estamos trabajando, tal' />
      {firstName}
      <br />
      {/* renderizado de listas */}
      <ul>
        {notes.map((note) => (
          <List key={note.id} id={note.id} content={note.content} date={note.date} categories={note.categories} />
        ))}
      </ul>
    </div>
  );
}

export default App;
