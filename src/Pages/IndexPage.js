import React from "react";

const IndexPage = (props) => {
  React.useEffect(() => {
    const token = localStorage.getItem("CC_Token");
    console.log(token);
    if (!token) {
      props.history.push("/login");
    } else {
      props.history.push("/dashboard");
    }
    // eslint-disable-next-line
  }, [0]);
  return <div><img src="https://thumbs.dreamstime.com/b/live-chat-banner-template-ribbon-label-sign-sticker-195329772.jpg" alt="" style={{width:'100%' ,height:'882px'}} /></div>;
};

export default IndexPage;
