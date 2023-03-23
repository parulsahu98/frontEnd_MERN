import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import '../styles/login.css'
const ChatroomPage = ({ match, socket }) => {
  const chatroomId = match.params.id;
  const [messages, setMessages] = React.useState([]);
  const messageRef = React.useRef();
  const [userId, setUserId] = React.useState("");

  const sendMessage = () => {
    if (socket) {
      socket.emit("chatroomMessage", {
        chatroomId,
        message: messageRef.current.value,
      });

      messageRef.current.value = "";
    }
  };
  

  React.useEffect((

  ) => {
   
    const token = localStorage.getItem("CC_Token");
    if (token) {
      console.log("token " ,token)
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }
    if (socket) {
      socket.on("newMessage", (message) => {
        console.log(messages,"",message);
        const newMessages = [...messages, message];
        console.log("messages")
        setMessages(newMessages);
      });
    }
  }, [messages]);

  React.useEffect(() => {
    
    if (socket) {
   
      socket.emit("joinRoom", {
        chatroomId,
      });
    }

    return () => {
     
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
  }, []);
  
  return (
    <div>
      <div class="col-md-8 mt-0">
        <div className="chatroomPage">
          <div className="chatroomSection">
            <h1 className="text-center gradient-custom-2 text-white">
             Welcome To Chatroom
            </h1>

            <div  class="mcontent">
              {messages.map((message, i) => (
                <div key={i} className="message">
                  <div>
                    <span 
                      className={
                        userId === message.userId
                          ? "ownMessage ml-2"
                          : "otherMessage ml-2"
                      }
                    >
                      {message.name}:
                    </span>{" "}
                    <h6 className="ml-2">{message.message}</h6>
                  </div>
                </div>
              ))}
            </div>
            <div className="chatroomActions">
              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Say something!"
                  ref={messageRef}
                  className="form-control"
                />
              </div>
              <div>
                <button
                  class="btn btn-primary btn-block  gradient-custom-2 mb-3 h-100 rounded"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // ***************************************************************************************************************
  );
};

export default withRouter(ChatroomPage);
