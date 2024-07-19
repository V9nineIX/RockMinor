import { GameElement } from "./GameElement";
import { Image } from "./Image";

export class Hole extends Image {
  private count: integer = 0;
  start(): void {
    GameElement.SetStyle(this.resource, this.X, this.Y, 100, 0);
    this.count = 0;
  }

  update(): void {
    this.count += 1;
    GameElement.SetStyle(
      this.resource,
      this.X + 50,
      this.Y + 20,
      50,
      this.Angle
    );
    //console.log(this.count);
    if (this.count > 500) {
      this.destroy();
    }
  }
}
