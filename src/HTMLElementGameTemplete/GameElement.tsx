export class GameElement {
  protected src: string;
  public resource: HTMLElement;
  public X: integer = 0;
  public Y: integer = 0;
  public Angle: integer = 0;
  public static GameElementColletion: object = {};
  private id: string;
  constructor(id: string, src: string = null) {
    this.src = src; // กำหนดค่าเริ่มต้นให้กับ property ใน constructor
    GameElement.GameElementColletion[id] = this;
    this.id = id;
  }

  start() {}

  update(self: GameElement) {}

  destroy() {
    //console.log("destroy");
    if (this.resource != null) {
      this.resource.remove();
    }
    delete GameElement.GameElementColletion[this.id];
  }

  static SetStyle(
    element: HTMLElement,
    x: integer,
    y: integer,
    scale: integer,
    rotate: integer,
    color: string = "#ffffff"
  ) {
    element.style.left = x + "%";
    element.style.top = y + "%";
    element.style.rotate = rotate + "deg";
    element.style.color = color;
    element.style.scale = scale + "%";
    element.style.position = "absolute";
  }
}
