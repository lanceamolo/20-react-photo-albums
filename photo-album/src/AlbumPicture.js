import React, { useState, useEffect } from "react"
import Card from "./Card.js"
import axios from "axios"

function AlbumPicture(props) {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/album").then((r) => {
      const allAlbums = r.data
      setAlbums(allAlbums)
    })
  }, [])

  let images = []
  albums.map((item) => {
    images.push(item.thumbnail1)
    // console.log(images)
  })

  return (
    <div>
      <div id="albumPicture">
        <div id="picRow1">
          <h1>Pic Name</h1>
        </div>
        <div id="picRow2">
          <div id="picR2col1">
            <h1>{"<"}</h1>
          </div>
          <div id="picR2col2">
            <img src={images[4]}></img>
          </div>
          <div id="picR2col3">
            <h1>{">"}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumPicture
