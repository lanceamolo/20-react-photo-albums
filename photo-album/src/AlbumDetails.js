import React, { useState, useEffect } from "react"
import Card from "./Card.js"
import axios from "axios"

function AlbumDetails(props) {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/album").then((r) => {
      const allAlbums = r.data
      setAlbums(allAlbums)
    })
  }, [])

  const chosenAlbum = albums.find((item) => item.id == 1)
  console.log(chosenAlbum)

  let images = []
  albums.map((item) => {
    images.push(item.thumbnail1)
    // console.log(images)
  })

  let titles = []
  albums.map((item) => {
    titles.push(item.albumTitle)
    // console.log(titles)
  })

  return (
    <div>
      <div id="albumDetails">
        <div id="detailsRow1">
          <h1>Album Name</h1>
        </div>
        <div id="detailsRow2">
          <div id="r2col1">
            <h3>Album 1</h3>
            <h3>Album 2</h3>
            <h3>Album 3</h3>
            <h3>Album 4</h3>
            <h3>Album 5</h3>
            <h3>Album 6</h3>
          </div>
          <div id="r2col2">
            <div id="r2c1row1">
              <Card src={images[0]} children={titles[0]} />
              <Card src={images[1]} children={titles[1]} />
              <Card src={images[2]} children={titles[2]} />
            </div>
            <div id="r2c1row2">
              <Card src={images[3]} children={titles[3]} />
              <Card src={images[4]} children={titles[4]} />
              <Card src={images[5]} children={titles[5]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumDetails
