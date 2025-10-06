import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    // Pick the first phonetic with audio if possible, otherwise the first one
    const phonetic =
      props.results.phonetics.find((p) => p.audio) ||
      props.results.phonetics[0];

    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {/* Render phonetic only once */}
          {phonetic && <Phonetic phonetic={phonetic} />}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
