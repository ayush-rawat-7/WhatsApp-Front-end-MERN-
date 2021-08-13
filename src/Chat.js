import React from 'react'
import "./chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
export const Chat = () => {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Ayush</span>
                    This is a message
                    <span className="chat_timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_reciever chat_message">
                    <span className="chat_name">Ayush</span>
                    This is a message
                    <span className="chat_timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Ayush</span>
                    This is a message
                    <span className="chat_timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <EmojiEmotionsOutlinedIcon />
                <form>
                    <input type="text" placeholder="Type a message" />
                    <button type="submit">Send a message</button>
                </form>
                <MicOutlinedIcon/>
            </div>
        </div>
    )
}
