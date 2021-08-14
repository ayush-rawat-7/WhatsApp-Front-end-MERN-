import React from 'react'
import "./chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert } from "@material-ui/icons";
import axios from './axios'
import SearchIcon from '@material-ui/icons/Search';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
export const Chat = ({ messages }) => {
    const [input, setInput] = React.useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: "Demo",
            timeStamp: "Just Now",
            recieved: false,
        })
        setInput('')
    }

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
                {messages.map((message) => {
                    return <p className={`chat_message ${message.recieved || "chat_reciever"} `}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timeStamp">
                            {message.timeStamp}
                        </span>
                    </p>
                })}
            </div>
            <div className="chat_footer">
                <EmojiEmotionsOutlinedIcon />
                <form>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicOutlinedIcon />
            </div>
        </div>
    )
}
