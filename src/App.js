import './App.css';
import React from 'react';
import { Sidebar } from './Sidebar';
import Pusher from 'pusher-js'
import { Chat } from './Chat';
import axios from "./axios"
function App() {
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    axios.get("/messages/sync")
      .then(response => {
        setMessages(response.data);
      })
  }, [])

  React.useEffect(() => {
    const pusher = new Pusher('ac776a713111e6b7b924', {
      cluster: 'mt1'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
