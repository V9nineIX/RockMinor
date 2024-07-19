import { GameElement } from "./GameElement";

export class UI extends GameElement {
  protected parent: GameElement;
  constructor(id: string, src: string = null, parent: GameElement = null) {
    super(id, src);
    this.parent = parent;
    this.resource = this.SetText(src);
  }

  SetText(textInput: string) {
    let text = document.createElement("p");
    text.textContent = textInput;
    GameElement.SetStyle(text, 5, 5, 100, 0);
    this.parent.resource.appendChild(text);
    return text;
  }
}
