import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./chat.css";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicNoneIcon from "@material-ui/icons/MicNone";
import axios  from "../axios";
function Chat({messages}) {

   const [input , setInput] = useState('');

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen ....</p>
        </div>
        <div className="headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachmentIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">

        {messages.map((message)=>(



        <p className={`chat__message ${message.recives && "chat__reciver"}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{message.timestamp}</span>
        </p>


        ))}

       
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form action="">
          <input value= { input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder="Type a message" />
          <button onClick= { (e)=>{

             e.preventDefault()
              axios.post('/messages/new' , {
              message: input,
              name: "Red",
              timestamp: "just Now",
              recived: true
             })

             setInput('')

              

          }} type="submit"></button>
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
}

export default Chat;
