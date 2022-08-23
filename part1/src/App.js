import './App.css';
import Mensaje from './Mensaje'
import { List } from './List.js'
import { ListApi } from './ListApi.js'
import { useState, useEffect } from 'react'

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


  ///////////////////////////List desde API/////////////////////////////////////////////////////////////////////////////////////

  const [notes_api, setNotes_api] = useState([]);
  const [newNotes_api, setNewnotes_api] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => {
        setNotes_api(json)
      })
  }, [])

  const handleChangeNoteApi = (event) => {
    setNewnotes_api(event.target.value);
  }

  const handleSubmitNoteApi = (event) => {



    event.preventDefault();

    const noteApiToaddToState = {
      id: notes_api.length + 1,
      title: newNotes_api,
      body: newNotes_api,
    }

    setNotes_api(notes_api.concat(noteApiToaddToState));
    setNewnotes_api('');
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
        <button>Crear Nota API</button>
      </form>

      {/* Imprimen las notas desde API */}
      <h2>Notes List por API</h2>

      <ul>
        {notes_api.map((noteApi) => (
          <ListApi key={noteApi.id} id={noteApi.id} title={noteApi.title} body={noteApi.body} />
        ))}
      </ul>

      <form onSubmit={handleSubmitNoteApi}>
        <input type='text' onChange={handleChangeNoteApi} value={newNotes_api}></input>
        <button>Crear Nota</button>
      </form>

    </div>
  );
}

export default App;
