import { GameElement } from "./GameElement";

export class ControlContainer extends GameElement {
  protected parent: GameElement;

  constructor(id: string, src: string = null, parent: GameElement = null) {
    super(id, src);
    this.parent = parent;

    this.resource = this.CreateContainer();
  }

  CreateContainer() {
    var con = document.createElement("div");
    con.style.width = "100%";
    con.style.height = "100%";
    con.style.position = "relative";
    if (this.parent == null) {
      document.body.appendChild(con);
    } else {
      this.parent.resource.appendChild(con);
    }

    return con;
  }
}
