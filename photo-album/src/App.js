import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import AlbumCover from "./AlbumCover.js"
import AlbumDetails from "./AlbumDetails.js"
import Card from "./Card.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AlbumCover />
        </Route>

        <Route path="/album/:id">
          <AlbumDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
