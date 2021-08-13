import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebarChat.css'
export const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>last message in the room</p>
            </div>
        </div>
    )
}
