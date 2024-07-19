import { Drill } from "./Drill";
import { GameController } from "./GameController";
import { GameElement } from "./GameElement";
import { Image } from "./Image";

export class Item extends Image {
  public Drill: Drill;
  public Score;
  public GameController;
  start(): void {
    GameElement.SetStyle(this.resource, this.X + 50, this.Y, 150, 0);
  }

  update(): void {
    if (
      this.areCirclesColliding(
        this.Drill.X + 50,
        this.Drill.Y + 20,
        5,
        this.X + 50,
        this.Y,
        5
      )
    ) {
      this.resource.remove();
      this.GameController.ScoreUpdate(100);
      this.destroy();
    }

    if (this.Y - this.Drill.Y < -100) {
      //console.log("removeitem");
      this.resource.remove();
      this.destroy();
    }
  }

  areCirclesColliding(
    x1: number,
    y1: number,
    r1: number,
    x2: number,
    y2: number,
    r2: number
  ): boolean {
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return distance < r1 + r2;
  }
}
