import './App.css'
import { useEffect, useState } from 'react';
import { Button,FormControl,Input,InputLabel} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move'; 
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => { 
  db.collection('messages')
  .orderBy('timestamp', 'desc')
  .onSnapshot(snapshot => {
   setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
  })
  }, []);
//{data: doc.data()} is to render only those that's added as an input and
//recognise them with key.
  useEffect(() => {
  setUsername(prompt('please enter your name')) 
  }, []);

  const sendMessage =(event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h2>MESSENGER</h2>
      <h2>{username}</h2>
      <form className='app__form'>
     <FormControl className='app__formcontrol'>
      <Input className='app__input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
      <IconButton className='app__iconbutton' disabled={!input} 
      variant="contained" 
      color="primary" 
      type="submit" onClick={sendMessage}>
        <SendIcon/>
      </IconButton>
      </FormControl>  
      </form>
      <FlipMove>
      {
       messages.map(({id, message}) => (
         <Message key={id} username={username} message={message} />
       ))
      }
      </FlipMove>  
    </div>
  );
}

export default App;
