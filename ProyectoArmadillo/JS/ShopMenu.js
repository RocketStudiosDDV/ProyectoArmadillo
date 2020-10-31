class ShopMenu extends Phaser.Scene{
  constructor(){
      super("ShopMenu");
  }

  preload(){

  }

  create(){
    var wid = this.cameras.main.width; //ancho del canvas en el dispositivo
    var heig = this.cameras.main.height;

    var backgroundSM = this.add.image(0, 0, 'backgroundSM');
    backgroundSM.setScale(2/3);
    backgroundSM.setPosition(wid/2, heig/2);

    //BOTON OBJETO 1
    this.object1Button = this.add.image(wid*2.6/16, heig*8.64/16, 'object1Button');
    this.object1Button.setScale(2/3);
    this.object1Button.setInteractive({ useHandCursor: true  } )
    .on('pointerdown', () => this.AddObject1());

    //BOTON OBJETO 2
    this.object2Button = this.add.image(wid*6.18/16, heig*8.64/16, 'object2Button');
    this.object2Button.setScale(2/3);
    this.object2Button.setInteractive({ useHandCursor: true  } )
    .on('pointerdown', () => this.AddObject2());

    //BOTON OBJETO 3
    this.object3Button = this.add.image(wid*9.75/16, heig*8.64/16, 'object3Button');
    this.object3Button.setScale(2/3);
    this.object3Button.setInteractive({ useHandCursor: true  } )
    .on('pointerdown', () => this.AddObject3());

    //BOTON OBJETO 4
    this.object4Button = this.add.image(wid*13.345/16, heig*8.64/16, 'object4Button');
    this.object4Button.setScale(2/3);
    this.object4Button.setInteractive({ useHandCursor: true  } )
    .on('pointerdown', () => this.AddObject4());

    //BOTON ATRAS
    this.backButtonSM = this.add.image(wid*14/16, heig*15/16, 'backButtonSM');
    this.backButtonSM.setScale(1.5/3);
    this.backButtonSM.setInteractive({ useHandCursor: true  } )
    .on('pointerdown', () => this.BackMainMenu());
  }


  BackMainMenu(){
    this.scene.pause('ShopMenu');
    this.scene.start('MainMenu');
  }

}
