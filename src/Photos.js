import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        {props.photos.map(function (photo, indexx) {
          return (
            <img key={indexx} src={photo.src.landscape} alt={photo.alt || ""} />
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
