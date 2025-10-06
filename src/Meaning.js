import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition-block">
            <p>
              <strong>Definition {index + 1}:</strong> {definition.definition}
            </p>

            {definition.example && (
              <p>
                <strong>Example:</strong> <em>{definition.example}</em>
              </p>
            )}

            {/* ✅ Show synonyms only if they exist */}
            {definition.synonyms && definition.synonyms.length > 0 && (
              <div>
                <strong>Synonyms:</strong>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            )}
          </div>
        );
      })}

      {/* ✅ Also show meaning-level synonyms once (if any) */}
      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <div className="meaning-synonyms">
          <strong>Synonyms:</strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      )}
    </div>
  );
}
