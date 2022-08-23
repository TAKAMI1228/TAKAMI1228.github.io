phina.globalize(); // phina.jsがこれで使えるようになります。

const ASSETS={
    image:{
        piyoko:"piyoko.gif"
    }
}

phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    let piyoko = Sprite("piyoko", 96, 96).addChildTo(this);
    piyoko.x = this.gridX.center();
    piyoko.y = this.gridY.center();
    this.piyoko=piyoko;
  },
  update:function(app) {
    let piyoko=this.piyoko;
        const key = app.keyboard; // キーボードの状況が入った箱を持ってきます
        var touch_p = app.pointer;//マウスクリック
        piyoko.speed =50;
        if (key.getKey("right")) { // rightボタンが押されたらTrueになります
        piyoko.x += 1;
    }
    if (key.getKey("left")) { // leftボタンが押されたらTrueになります
        piyoko.x += -1;
        }
    }
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
    assets:ASSETS,
  });
  app.run();
});