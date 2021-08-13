import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./sidebar.css"
import pic from './Ayush.jpg'
import {SidebarChat} from './SidebarChat'
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={pic} />
                <div className="sidebar_headerRight">
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

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>
    )
}
