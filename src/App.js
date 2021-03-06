import React, { useImperativeHandle, useState } from "react";
import "./styles.css";
// import images  from './emoji.png'

export default function App() {
  const emoji = {
    "π": "grinning face",
    "π": "smiling face",
    "π΄": "sleeping face",
    "π₯°": "face with hearts",
    "π": "face with heart eyes",
    "π": "winking face",
    "π€£": "rolling on floor laughing",
    "π€©": "star-stuck",
    "π": "face with tears of joy",
    "π": " face blowing kisses",
    "π": "sad",
    "π₯‘": "takeout box",
    "β€οΈ": "love",
    "π": "annoyance",
    "π": "face savoring food",
    "π": "party popper",
    "π": "french fries"
  };
  var [meaning, setOnChange] = useState("");
  function onChangeHandler(event) {
    meaning = emoji[event.target.value];

    if (meaning === undefined) {
      meaning = "Sorryπ don't have meaning in our database";
    }
    setOnChange(meaning);
  }

  return (
    <div className="App">
      <img className="image" src={require("/static/images/emoji.png")} alt="" />
      <div>
        <h2>
          <span className="title">
            Emoji Search
            <img
              id="glass"
              src={require("/static/images/magnifying.png")}
              alt=""
            />
          </span>
        </h2>
      </div>
      <p>
        Recognising all the different emoji's becomes a difficult task.
        EmojiSearch provides an easy interface to find the find the meaning of
        emoji's instantly.
      </p>
      <input
        onChange={onChangeHandler}
        placeholder="Please enter any object emoji"
      ></input>
      <div className="meanings">"{meaning}"</div>
      <div className="description">
        Search for emoji below or enter one above
      </div>
      <div className="text">
        Here are the most used object emoji's used by users around the world
      </div>
      <ul className="list-unordered">
        <li className="list-items">π</li>
        <li className="list-items">π</li>
        <li className="list-items">π</li>
        <li className="list-items">π</li>
        <li className="list-items">π€©</li>
        <li className="list-items">π</li>
        <li className="list-items">π</li>
        <li className="list-items">π₯°</li>
        <li className="list-items">β€οΈ</li>
        <li className="list-items">π€£</li>
        <li className="list-items">π΄</li>
        <li className="list-items">π</li>
        <li className="list-items">π</li>
        <li className="list-items">π</li>
        <li className="list-items">π</li>
        <li className="list-items">π</li>
        <li className="list-items">π₯‘</li>
      </ul>
    </div>
  );
}
