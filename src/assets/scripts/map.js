
function Map1(){
// Массив карты поля бо
this.map1 = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 'S' , 'S' , 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 'S' , 'S' , 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['K', 'K', 0, 0, 'K', 'K', 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 'K', 'K', 0, 0, 'K', 'K'],
['S' , 'S', 0, 0, 'K', 'K', 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 'K', 'K', 0, 0, 'S', 'S' ],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 'K', 'K', 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 'K', 'K', 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0, 0, 'K', 'K', 'K', 'K', 0, 0, 0, 'K', 'K', 0, 0, 'K', 'K', 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 0, 0, 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'K', 0, 0, 'K', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
this.images = {
brick : new Image(),
steel : new Image(),
background: new Image()
}
this.images.brick.src="assets/img/brick-wall.png";
this.images.steel.src="assets/img/steel-wall.png";
this.images.background.src="assets/img/2.png"



this.draw= function(){
    game.context.drawImage(this.images.background,0,0, game.canvas.width, game.canvas.height);
    for (var j=0; j<26; j++)
      for (var i=0; i<26; i++) {
        switch (this.map1[j][i]) {
          case 'K':
          game.context.drawImage(this.images.brick,i*game.cellSize, j*game.cellSize);
          game.context.drawImage(this.images.brick,i*game.cellSize +this.images.brick.width, j*game.cellSize );
          game.context.drawImage(this.images.brick,i*game.cellSize, j*game.cellSize +this.images.brick.height);
          game.context.drawImage(this.images.brick,i*game.cellSize +this.images.brick.width, j*game.cellSize +this.images.brick.height);
            break;
          case 'S' :
          game.context.drawImage(this.images.steel,i*game.cellSize, j*game.cellSize);
            break;
                }
          }
    }
  }