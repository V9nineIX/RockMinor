import React, { useEffect } from 'react';
import Phaser from 'phaser';

const App = () => {

  useEffect(() => {
   console.log(Date.now + ": Effect");
/*
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      scene: {
        preload,
        create,
        update,
      },
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      }
    };
    const game = new Phaser.Game(config);
    let text: Phaser.GameObjects.Text;
    let rocket: Phaser.GameObjects.Image;
    let talent: Phaser.GameObjects.Image;
    let framecount:integer;
    function preload(this: Phaser.Scene) {
      // Preload assets if any
      this.load.svg("rocket", "/logo.svg");
      this.load.image("talented","/talent.jpg");
    }

    function create(this: Phaser.Scene) {
      
      //make sure root is clean before draw everything
      */
    



      
/*
      text = this.add.text(window.innerWidth / 2, window.innerHeight / 2, 'Hello World', {
        fontSize: '32px',
        color: '#ffffff'
      });
      rocket = this.add.image(0,0,"rocket");
      talent = this.add.image(1000,1000,"talented");
      talent.setScale(0.5,0.5);
      text.setOrigin(0.5, 0.5);
      text.update =  ()=>{
        text.rotation += 0.01;
      }
      framecount = 0;
    }

    function update(this: Phaser.Scene) {

      if (game && game.scale) {
        game.scale.resize(window.innerWidth, window.innerHeight);
        game.canvas.style.width = `${window.innerWidth}px`;
        game.canvas.style.height = `${window.innerHeight}px`;
      }
      text.update();
      framecount++;
      rocket.x = 500+Math.sin(framecount/4) * 100;
      rocket.y = 500+Math.cos(framecount/4) * 100;



    }

    return () => {

      game.destroy(true);
    }
      */;
  }, []);

  return (
    <div id = "displayzone" ></div>
  );
};

export default App;
