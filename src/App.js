import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var heading = "Emoji Transaltor";
  var bgcolor = "grey";
  // var userName = prompt("Give me your name !");
  const [meaning, setMeaning] = useState("");

  const emojiDictionary = {
    "😀": "Grinning Face",
    "😂": "Laughing",
    "💯": "Hundred Points",
    "💢": "Anger Symbol",
    "❤️": "Heart",
    "🥭": "Mango",
    "🤮": "Face Vomiting",
    "🥺": "Pleading Face"
  };

  //converting dict to array, as map only workds w array/list
  var emojisWeKnow = Object.keys(emojiDictionary);

  function emojiInputHandler(event) {
    var meaning = emojiDictionary[event.target.value];

    console.log(meaning);
    if (meaning === undefined) {
      meaning = "Emoji is not in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    //console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgcolor }}>{heading}</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      {/* Actual output set by react using useState */}

      <h2> Emojis we know </h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              padding: "0.5rem 0.5rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      {/* <span>
         emojisWeKnow.map(emojis=>{
           return {emojis}
         });
      </span> */}
    </div>
  );
}
