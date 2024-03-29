import { useState } from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NoteList';

const App = () => {
  const[notes,setNotes]=useState([
  {

    id: nanoid(),
    text:"This is my first note!",
    date:"15/04/2022",
  },
  {
    id: nanoid(),
    text:"This is my second note!",
    date:"16/04/2022",
  },
  {
    id: nanoid(),
    text:"This is my third note!",
    date:"17/04/2022",
  
  },
  {
    id: nanoid(),
    text:"This is my new note!",
    date:"18/04/2022",
  
  },
]);
const addNote=(text)=>
{
  console.log(text);
}

  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
};

export default App;
