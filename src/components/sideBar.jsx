import React from "react";
import "./sideBar.css";
import { Button, IconButton, Avatar  } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SideBarChat from "./sideBarChat";
function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar__header">
          <Avatar src = 'https://wallpapercave.com/wp/wp5165982.jpg' />
        <div className="sideBar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
              
              <div className="sideBar__search">
                  <div className="sideBar__searchContainer">
                      <SearchOutlinedIcon />
                      <input type="text" placeholder='Search or start new chat' />
                  </div>
              </div>

              <div className="sideBar__chats">
                  <SideBarChat />
                  <SideBarChat />
                  <SideBarChat />
              </div>
        
    </div>
  );
}

export default SideBar;
