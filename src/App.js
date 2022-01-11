import React, { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/sideBar";
import Chat from "./components/chat";
import Pusher from "pusher-js";
import axios from './axios';

function App() {

  const [messages , setMessages] = useState([]); 
 
  useEffect(()=>{
         axios.get('/messages/sync') 
         .then((res)=>{
           
           setMessages(res.data)
         })    
  } , [])

   
  useEffect(() => {
    const pusher = new Pusher("9b10d5498dc01bbc7e25", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages , newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <SideBar />

        {/* chat */}
        <Chat messages = {messages} />
      </div>
    </div>
  );
}

export default App;
