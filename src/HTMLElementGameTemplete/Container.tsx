import { GameElement } from "./GameElement";

export class Container extends GameElement {
  protected parent: GameElement;

  constructor(id: string, src: string = null, parent: GameElement = null) {
    super(id, src);
    this.parent = parent;

    this.resource = this.CreateContainer();
  }

  update(): void {
    GameElement.SetStyle(this.resource, this.X, this.Y, 100, 0);
  }

  CreateContainer() {
    var con = document.createElement("div");
    con.style.width = "100%";
    con.style.height = "100%";
    con.style.position = "absolute";
    if (this.parent == null) {
      document.body.appendChild(con);
    } else {
      this.parent.resource.appendChild(con);
    }

    return con;
  }
}
