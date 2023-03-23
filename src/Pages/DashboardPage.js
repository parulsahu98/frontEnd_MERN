import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import makeToast from "../Toaster";
import "../styles/login.css";
const DashboardPage = (props) => {
  const [chatrooms, setChatrooms] = React.useState([]);
  const getChatrooms = () => {
    axios
      .get("http://localhost:8000/chatroom", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CC_Token"),
        },
      })
      .then((response) => {
        setChatrooms(response.data);
      })
      .catch((err) => {
        setTimeout(getChatrooms, 3000);
      });
  };

  React.useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);

  const createChatroom = () => {
    const chatroomName = chatroomNameRef.current.value;

    axios
      .post(
        "http://localhost:8000/chatroom",
        {
          name: chatroomName,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("CC_Token"),
          },
        }
      )
      .then((response) => {
        makeToast("success", response.data.message);
        getChatrooms();
        chatroomNameRef.current.value = "";
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      });
  };

  const chatroomNameRef = React.createRef();

  return (
    <div>
      <div>
        <section
          class="h-100 gradient-form"
          style={{ "background-color": "#eee" }}
        >
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                  <div class="row g-0">
                    <div class="col-lg-6">
                      <div class="card-body p-md-5 mx-md-4">
                        <div class="text-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{ width: "185px" }}
                            alt="logo"
                          />
                          <h4 class="mt-1 mb-3 pb-1">We are The Lotus Team</h4>
                        </div>

                        <div className="card">
                          <h4 class="mt-1 mb-3 pb-1 text-center">ChatRoom</h4>
                          <div className="cardBody">
                            <div className="inputGroup">
                              <label
                                htmlFor="chatroomName"
                                class="form-label ml-2"
                              >
                                Chatroom Name
                              </label>
                              <input
                                type="text"
                                name="chatroomName"
                                id="chatroomName"
                                ref={chatroomNameRef}
                                placeholder="Enter the Chat room Name"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <button
                            class="btn btn-primary btn-block  gradient-custom-2 mb-3 mt-2"
                            onClick={createChatroom}
                          >
                            Create Chatroom
                          </button>

                          <div className="chatrooms overflow-auto border">
                            {chatrooms.map((chatroom) => (
                              <div key={chatroom._id} className="chatroom ml-3">
                                <div class="text-black">{chatroom.name}</div>
                                <hr />
                                <Link to={"/chatroom/" + chatroom._id}>
                                  <button className="btn btn-primary btn-block  gradient-custom-2  mr-3">Join</button>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 class="mb-4">We are more than just a company</h4>
                        <p class="small mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
