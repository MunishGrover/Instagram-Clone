import React from "react";
import "./App.css";
import Post from "./Post";
function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
      <h1>Hello after so many ages Im coding.</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
