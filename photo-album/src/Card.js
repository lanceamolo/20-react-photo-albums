import React from "react"
import "./App.css"
import axios from "axios"

function Card(props) {
  return (
    <div className={"card " + props.className} id={props.id}>
      <div className={"topSide " + props.className} id={props.id}>
        <img className={props.className} id={props.id} src={props.src} />
      </div>
      <div className={"bottomSide " + props.className} id={props.id}>
        <h2 className={"thumbnailTitles " + props.className} id={props.id}>
          {props.children}
        </h2>
      </div>
    </div>
  )
}

export default Card
