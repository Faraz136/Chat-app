import React from 'react'
import './sideBarChat.css';
import {Avatar} from '@material-ui/core'

function SideBarChat() {
    return (
        <div className= 'sideBarChat'>
            <Avatar />
            <div className="sideBarChat__info">
                <h2>Room Name</h2>
                <p>LAst message</p>
            </div>
            
        </div>
    )
}

export default SideBarChat
