import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GameElement } from "./HTMLElementGameTemplete/GameElement";
import { Drill } from "./HTMLElementGameTemplete/Drill";
import { Image } from "./HTMLElementGameTemplete/Image";
import { Background } from "./HTMLElementGameTemplete/Background";
import { Container } from "./HTMLElementGameTemplete/Container";
import { GameController } from "./HTMLElementGameTemplete/GameController";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

let frame = 0;

function start() {
  let gameController = new GameController("gameController");
  for (let id in GameElement.GameElementColletion) {
    GameElement.GameElementColletion[id].start();
  }
  setInterval(update, 1000 / 60);
  console.log(window.innerWidth + " : " + window.innerHeight);
}

function update() {
  frame++;
  //SetStyle(assets["world"],(frame/128),(50+Math.sin(frame/128)*25),100 ,(frame*2),getRandomColor());
  for (let id in GameElement.GameElementColletion) {
    GameElement.GameElementColletion[id].update(
      GameElement.GameElementColletion[id]
    );
  }
}

start();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
