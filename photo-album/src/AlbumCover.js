import React, { useState, useEffect } from "react"
import Card from "./Card.js"
import axios from "axios"
import { Link } from "react-router-dom"

function AlbumCover(props) {
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

  let titles = []
  albums.map((item) => {
    titles.push(item.albumTitle)
    // console.log(titles)
  })

  return (
    <div>
      <div id="albumCover">
        <div id="row1">
          <h1 id="title">My Albums</h1>
        </div>
        <div id="row2">
          <Link to={"/album/1"}>
            <Card
              className="col1"
              src={images[0]}
              children={titles[0]}
              className="page1title"
            />
          </Link>
          <Link to={"/album/2"}>
            <Card
              className="col2"
              src={images[1]}
              children={titles[1]}
              className="page1title"
            />
          </Link>
          <Link to={"/album/3"}>
            <Card
              className="col3"
              src={images[2]}
              children={titles[2]}
              className="page1title"
            />
          </Link>
        </div>
        <div id="row3">
          <Link to={"/album/4"}>
            <Card
              className="col1"
              src={images[3]}
              children={titles[3]}
              className="page1title"
            />
          </Link>
          <Link to={"/album/5"}>
            <Card
              className="col2"
              src={images[4]}
              children={titles[4]}
              className="page1title"
            />
          </Link>
          <Link to={"/album/6"}>
            <Card
              className="col3"
              src={images[5]}
              children={titles[5]}
              className="page1title"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AlbumCover
