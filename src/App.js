import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StickyHeader from "./components/header/sticky-header";
import HomePage from "./pages/home-page";

function App() {
  return (
    <div
      className="bg-background-light-gray"
      style={{
        backgroundColor: "rgba(250,246,243,1.000)" /* 灰色 */,
      }}
    >
      <HomePage />
      <StickyHeader />
    </div>
  );
}

export default App;
