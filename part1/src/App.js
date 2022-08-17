import './App.css';
import Mensaje from './Mensaje'
import { List } from './List.js'
import { useState } from 'react'

//component
const Counter = ({ contador }) => {
  return <h1>{contador}</h1>
}

const App = (props) => {

  //Hook useState
  const [contadorValue, updateContador] = useState(0)

  const handleClick = () => {
    updateContador(contadorValue + 1)
  }

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const firstName = 'Zuri'

  ////////////////////////////////////////////////////////Renderizado de listas
  //Crear nuevas listas teniendo en cuenta el estado
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleChangeNote = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmitNote = (event) => {

    event.preventDefault();

    const noteToaddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: false

    }

    setNotes(notes.concat(noteToaddToState));
    setNewNote('');
  }

  const handleShowAll = () => {
    //Los 2 ejemplos hacen lo mismo pero con detalles
    //de esta forma se cambia el valor(estado) actual de showall true/false
    setShowAll(!showAll);
    //De esta forma se tiene en cuenta el valor previo directamente del estado (prevValue) por defecto
    //setShowAll((prevValue) => !prevValue);
  }


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

      {/*--------------------------------------------------------------------- renderizado de listas */}

      <h2>Notes List</h2>
      {/* Usando hook usesState para cambiar estado del showall true/false */}
      <button onClick={handleShowAll}>{showAll ? 'Show only important' : 'Show All'}</button>

      <ul>
        {/* Se filtran las notas si es true muestra todo y si es false solo las importantes */}
        {notes.filter(note => {
          if (showAll === true) {
            return true;
          }
          return note.important === true;
        }).map((note) => (
          <List key={note.id} id={note.id} content={note.content} date={note.date} categories={note.categories} />
        ))}
      </ul>

      <form onSubmit={handleSubmitNote}>
        <input type='text' onChange={handleChangeNote} value={newNote}></input>
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
