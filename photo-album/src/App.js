import React from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import AlbumCover from "./AlbumCover.js"
import AlbumDetails from "./AlbumDetails.js"
import AlbumPicture from "./AlbumPicture.js"
import Card from "./Card.js"

function App() {
  return (
    <div>
      <AlbumCover />
      <br />
      <br />
      <AlbumDetails />
      <br />
      <br />
      <AlbumPicture />
    </div>
  )
}

export default App
