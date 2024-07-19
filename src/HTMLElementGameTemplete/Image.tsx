import { GameElement } from "./GameElement";

export class Image extends GameElement {
  protected parent: GameElement;
  constructor(id: string, src: string = null, parent: GameElement = null) {
    super(id, src);
    this.parent = parent;
    this.resource = this.LoadImage(src);
  }

  LoadImage(path: string) {
    var img = document.createElement("img");
    img.src = path;
    this.parent.resource.appendChild(img);
    return img;
  }
}
