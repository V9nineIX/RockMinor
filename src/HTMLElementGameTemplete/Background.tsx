import { GameElement } from "./GameElement";

export class Background extends GameElement {
  protected parent: GameElement;

  constructor(id: string, src: string = null, parent: GameElement = null) {
    super(id, src);
    this.parent = parent;
    this.resource = this.LoadTileImage(src);
  }

  update(): void {
    this.resource.style.backgroundPosition = -this.X + "% " + -this.Y + "%";
    GameElement.SetStyle(this.resource, this.X, this.Y, 100, 0);
  }

  LoadTileImage(path: string) {
    var img = document.createElement("div");
    img.style.backgroundImage = "url('" + path + "')";
    img.style.backgroundColor = "#FF0000";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.position = "absolute";
    img.style.backgroundRepeat = "repeat";
    // img.style.opacity = "0";
    this.parent.resource.appendChild(img);
    return img;
  }
}
