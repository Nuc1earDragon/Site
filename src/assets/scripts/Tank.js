function Tank(X,Y,type) {
  this.up =  {
    main : this.getImage(type, "up","s1"),
    alt : this.getImage(type, "up","s2") ,
  };
  this.left= {
  main : this.getImage(type, "left", "s1"),
  alt : this.getImage(type, "left", "s2"),
  };
  this.right= {
    main : this.getImage(type, "right", "s1"),
    alt : this.getImage(type, "right", "s2"),
    };
  this.down= {
    main : this.getImage(type, "down", "s1"),
    alt:  this.getImage(type, "down", "s2"),
    };
  this.x= X;
  this.y= Y;
  this.position=new Image();
  this.caseOn = 40;
  this.enemy = false;
  this.speed = 2;
  this.healthPoints = 1;
  this.crashed = false;
  this.crashIcon = new Image();
  this.crashIcon.src="assets/img/hit2.png";
  this.publicIntercept = new TankInterceptor().publicIntercept; 
  this.pass=true;
  this.score = +100;
  }
  
  Tank.prototype.getImage=function(tankType, direction,alternative) {
       var src="";
      switch (tankType){
        case "main": 
        src="assets/img/tank1-" + direction + "-" + alternative + "_1.png";
        break;
        case "bot":
        src="assets/img/normal-bot-"+direction+"-"+alternative+"_1.png";
        break;
      }
      var image= new Image();
      image.src=src;
      return image;
    }
  Tank.prototype.getHit = function() {
    if (this.crashed == true){
      return;
    };
    this.healthPoints-=1;
    if (this.healthPoints<=0){
        this.position = this.crashIcon;
        this.speed = 0;
        var a = this;
        if (this == game.mainTank){
          window.removeEventListener("keydown", mainTankMove);      
          window.removeEventListener("keydown", mainTankBullet);
          localStorage.setItem('Record'+[10],game.score);
        }
        setTimeout(function(){destroy(a)}, 500);
    }
    else return;
  }

//**************************************************************************************************************************************************
//**************************************************************************************************************************************************

    






//**************************************************************************************************************************************************
//**************************************************************************************************************************************************
function mainTankMove(e){
  tankMove(e.keyCode, game.mainTank);
}
function passfinding(obj){
  size = elSize (obj);
  if (obj.y<0 || size.y2>25 || obj.x < 0 || size.x2 > 25){
    return false;
  }
  else {
  for (var j = size.y1; j <= size.y2; j++) {
      for (var i = size.x1; i <= size.x2; i++) {
          if (map1.map1[j][i] != '0') {
              return false;
          }
      }

  }
  return true;
}
} 

//**************************************************************************************************************************************************
//**************************************************************************************************************************************************
  function tankMove(e, tank) {
    switch (e) {
            
          
              case 37:
              tank.x -= tank.speed;
              tank.pass= ( (passfinding(tank)) && (!tank.publicIntercept()) );
              if (tank.caseOn!=37 || tank.pass!=true) {tank.x +=tank.speed;}
              tank.caseOn=37;
              if (tank.position == tank.left.alt) {
                tank.position = tank.left.main;
              }
              else {
                tank.position = tank.left.alt;
              }
              
              break;
          
              case 38:
              tank.y -= tank.speed;
              tank.pass=( (passfinding(tank)) && (!tank.publicIntercept()) );
              if (tank.caseOn!=38 || tank.pass!=true) {tank.y +=tank.speed;}
              tank.caseOn=38;
              if (tank.position == tank.up.alt) {
                tank.position = tank.up.main;
              }
              else {
                tank.position = tank.up.alt;
              }
              break;

              case 39:
              tank.x += tank.speed;
              tank.pass=( (passfinding(tank)) && (!tank.publicIntercept()) );
              if (tank.caseOn!=39 || tank.pass!=true) {tank.x -=tank.speed;}
             tank.caseOn=39;
              if (tank.position == tank.right.alt) {
                tank.position =tank.right.main;
              }
              else {
                tank.position = tank.right.alt;
              }
              break;

              case 40:
              tank.y += tank.speed;
              tank.pass=( (passfinding(tank)) && (!tank.publicIntercept()) );
              if (tank.caseOn!=40 || tank.pass!=true) {tank.y -=tank.speed;}
              tank.caseOn=40;
              if (tank.position == tank.down.alt) {
                tank.position = tank.down.main;
              }
              else {
                tank.position = tank.down.alt;
              }
              break;
          }
      }

   
 