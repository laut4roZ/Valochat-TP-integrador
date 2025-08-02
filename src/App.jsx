import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Chat from "./Pages/Chat.jsx"
import Welcome from "./Components/Welcome/welcome.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Welcome />} />
        <Route path="chat/:id" element={<Chat />} />
      </Route>
    </Routes>
  )
}