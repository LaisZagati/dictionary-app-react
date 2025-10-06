import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <img key={index} src={photo.src.landscape} alt={photo.alt || ""} />
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
