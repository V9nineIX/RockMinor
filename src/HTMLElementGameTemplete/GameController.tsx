import { GameElement } from "./GameElement";
import { Drill } from "./Drill";
import { Image } from "./Image";
import { Background } from "./Background";
import { Container } from "./Container";
import { Hole } from "./Hole";
import { Item } from "./Item";
import { UI } from "./UI";
import { ControlContainer } from "./ControlContainer";
export class GameController extends GameElement {
  public gameArea: GameElement;
  public uiArea: GameElement;
  public bg;
  public drill;
  public hole;
  public controlArea;
  public Key = {};
  public ScoreText;
  private controlSpeed = 5;
  private normalSpeed = 1;
  private item = ["/Group-2.svg", "/Group-3.svg", "/Group-4.svg"];
  public itemList = {};

  start(): void {
    this.controlArea = new ControlContainer("controlArea", null, null);
    this.gameArea = new Container("gameArea", null, this.controlArea);

    this.bg = new Background("bg", "/newbg.svg", this.gameArea);
    this.drill = new Drill("drill", "/Group.svg", this.gameArea);
    this.drill.X = 50;
    this.drill.resource.style.zIndex = "2";
    for (let index = 0; index < 1000; index++) {
      let itemPath = this.RandomImage();
      let itemIndex = "item" + index;
      let itemCreate = new Item(itemIndex, itemPath, this.gameArea);
      itemCreate.X = this.getRandomXNumber();
      itemCreate.Y = this.getRandomYNumber();
      itemCreate.Drill = this.drill;
      itemCreate.GameController = this;
      itemCreate.start();
    }

    this.uiArea = new Container("uiArea", null, this.controlArea);
    this.ScoreText = new UI("score", "Score", this.uiArea);

    let leftButton = document.createElement("button");
    leftButton.style.left = "10%";
    leftButton.style.top = "85%";
    leftButton.style.width = "100px";
    leftButton.style.height = "100px";
    leftButton.style.position = "absolute";
    leftButton.style.backgroundColor = "transparent";
    leftButton.style.border = "none";
    let leftImage = document.createElement("img");
    leftImage.src = "/bt_arrow_left.svg";
    leftButton.appendChild(leftImage);
    leftButton.addEventListener("touchstart", (event) => {
      event.preventDefault();
      leftImage.style.backgroundColor = "#FF0000";
      setTimeout(() => {
        leftImage.style.backgroundColor = "transparent";
      }, 1000);
      this.Key["left"] = true;
    });
    leftButton.addEventListener("touchend", (event) => {
      event.preventDefault();
      delete this.Key["left"];
    });

    this.uiArea.resource.appendChild(leftButton);

    let rightButton = document.createElement("button");
    rightButton.style.right = "10%";
    rightButton.style.top = "85%";
    rightButton.style.width = "100px";
    rightButton.style.height = "100px";
    rightButton.style.position = "absolute";
    rightButton.style.backgroundColor = "transparent";
    rightButton.style.border = "none";
    let rightImage = document.createElement("img");
    rightImage.src = "/bt_arrow_right.svg";
    rightButton.appendChild(rightImage);
    rightButton.addEventListener("touchstart", (event) => {
      event.preventDefault();
      rightImage.style.backgroundColor = "#FF0000";
      setTimeout(() => {
        rightImage.style.backgroundColor = "transparent";
      }, 1000);
      this.Key["right"] = true;
    });
    rightButton.addEventListener("touchend", (event) => {
      event.preventDefault();
      delete this.Key["right"];
    });
    this.uiArea.resource.appendChild(rightButton);

    document.addEventListener("keydown", (event) => {
      this.Key[event.key] = true;
      console.log(event.key);
    });
    document.addEventListener("keyup", (event) => {
      delete this.Key[event.key];
    });
  }
  private angleLimit = 50;
  private frameCount = 0;
  update(): void {
    if (this.Key["ArrowLeft"] != null) {
      this.drill.Angle += this.controlSpeed;
    }
    if (this.Key["ArrowRight"] != null) {
      this.drill.Angle -= this.controlSpeed;
    }

    if (this.Key["left"] != null) {
      this.drill.Angle += this.controlSpeed;
    }
    if (this.Key["right"] != null) {
      this.drill.Angle -= this.controlSpeed;
    }

    if (this.drill.Angle > this.angleLimit) {
      this.drill.Angle = this.angleLimit;
    }
    if (this.drill.Angle < -this.angleLimit) {
      this.drill.Angle = -this.angleLimit;
    }

    this.drill.X -=
      Math.cos(((this.drill.Angle - 90) * Math.PI) / 180) * this.normalSpeed;
    this.drill.Y -=
      Math.sin(((this.drill.Angle - 90) * Math.PI) / 180) * this.normalSpeed;
    this.gameArea.Y = -this.drill.Y;
    this.gameArea.X = -this.drill.X;
    this.bg.Y = -this.gameArea.Y;
    this.bg.X = -this.gameArea.X;
    this.frameCount++;
    if (this.frameCount % 2) {
      let hole: GameElement = new Hole(
        "hole" + this.frameCount,
        "/GroundTitle.svg",
        this.gameArea
      );
      hole.resource.style.zIndex = "1";
      hole.X = this.drill.X;
      hole.Y = this.drill.Y;
      hole.resource.style.transform = "rotate(" + this.drill.Angle + "deg)";
    }

    if (this.drill.y > 50000) {
      this.destroy();
    }
  }

  private scoreCount = 0;
  ScoreUpdate(Score: number) {
    //console.log(Score);
    this.scoreCount += Score;
    this.ScoreText.resource.textContent = "Score : " + this.scoreCount;
    //console.log(this.scoreCount);
  }

  RandomImage(): string {
    let randomIndex = Math.floor(Math.random() * this.item.length);
    return this.item[randomIndex];
  }

  getRandomXNumber(): number {
    const number = Math.floor(Math.random() * 91) + 5;

    return number;
  }
  getRandomYNumber(): number {
    const number = Math.floor(Math.random() * 9901) + 100; // สุ่มตัวเลขระหว่าง 100 ถึง 10000
    return number;
  }

  checkAndRemoveOffScreenElements(): void {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
  }

  stopFunction = () => {
    //clearInterval(intervalId);
  };
}
