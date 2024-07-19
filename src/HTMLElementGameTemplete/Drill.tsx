import { Image } from "./Image";
import { GameElement } from "./GameElement";
export class Drill extends Image {
  public Speed: integer = 0;
  start(): void {
    GameElement.SetStyle(this.resource, this.X + 50, this.Y, 100, 0);
    this.resource.style.zIndex = "9";
  }

  update(): void {
    GameElement.SetStyle(
      this.resource,
      this.X + 50,
      this.Y + 20,
      100,
      this.Angle
    );
  }
}
