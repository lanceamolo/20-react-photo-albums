import React, { useState, useEffect } from "react"
import Card from "./Card.js"
import axios from "axios"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom"

function AlbumDetails(props) {
  const { id } = useParams()
  const [currentAlbum, setCurrentAlbum] = useState([])
  const [allAlbums, setAllAlbums] = useState([])
  const [activePhoto, setActivePhoto] = useState(null)
  console.log(activePhoto)

  useEffect(() => {
    axios.get(`http://localhost:3000/album/${id}`).then((r) => {
      const thisAlbum = r.data.photos
      setCurrentAlbum(thisAlbum)
      console.log(thisAlbum)
    })

    axios.get(`http://localhost:3000/album/`).then((r) => {
      const allAlbums = r.data
      setAllAlbums(allAlbums)
      console.log(allAlbums)
    })
  }, [id])

  return (
    <div>
      {activePhoto ? (
        <div className="modal" onClick={() => setActivePhoto(null)}>
          <div className="modalHeader">
            <h2 className="activePhotoName">{activePhoto.name}</h2>
          </div>
          <div className="modalBody">
            <h1 className="page3Left">{"<"}</h1>
            <img className="activePhotoImg" src={activePhoto.thumbnail}></img>
            <h1 className="page3Right">{">"}</h1>
          </div>
        </div>
      ) : null}
      <div id="albumDetails">
        <div id="detailsRow1">
          <h1 id="thisAlbum">This Album</h1>
        </div>
        <div id="detailsRow2">
          <div id="r2col1">
            {allAlbums.map((item) => {
              return (
                <Link to={`/album/${item.id}`}>
                  <li>{item.albumTitle}</li>
                </Link>
              )
            })}
          </div>
          <div id="r2col2">
            {currentAlbum.map((item) => (
              <div
                className="page2CardDiv"
                onClick={() => setActivePhoto(item)}
              >
                <Card
                  className="page2Cards"
                  src={item.thumbnail}
                  children={item.name}
                  className="page2title"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumDetails
