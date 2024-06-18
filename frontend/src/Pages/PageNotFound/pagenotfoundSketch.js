export const sketch = (p) => {
    const widht  = 600
    const hight = 600;
    let bodyImage;
    let headImage;
    let handsImage;
    let player ={
        x:0,
        handsY:hight,
        handMotion:0,
        handFPS:16,
        state:"idel",
        handsOffset:2,
        y:hight,
        size:50,
    };
    const drawPlayer = () => {
        if(player.state === "idel"){
            player.handFPS--;
            if(player.handsY <= player.y && player.handsY >= (player.y - player.handsOffset)){
                if(player.handMotion === 0){
                    if(player.handFPS === 0){
                        player.handsY -=1;
                    }
                }else{
                    if(player.handFPS === 0){
                        player.handsY +=1;
                    }
                }
            }
            if(player.handsY === (player.y - player.handsOffset))
            {
                player.handMotion = 1;
            }
            if(player.handsY === player.y){
                player.handMotion = 0;
            }
            if(player.handFPS === 0){
                player.handFPS = 16;
            }
        }
        p.image(headImage, 0,hight-player.size,player.size,player.size);
        p.image(bodyImage, 0,hight-player.size,player.size,player.size);
        p.image(handsImage, 0,player.handsY-player.size,player.size,player.size);
    }
    let gameMode = 0;
    let line = {
        weight:5,
        length:0,
        startX:widht/2,
        startY:hight/2 + 32,
        endX:widht/2,
        endY:hight/2 + 32,
    }

    const text404 ={
        x:widht/2,
        y:hight/2,
        text:'404',
        size:100,
    }
    const textPageNotFound ={
        x:widht/2,
        y:hight/2 + 100,
        text:'Page Not Found',
        size:40,
    }
    const rect = {
        x:0,
        y:hight/2 + 34,
        width:widht,
        hight:hight,        
    };
    p.preload = function () {
        console.log("preload");
        bodyImage = p.loadImage('/Droid/body.png');
        headImage = p.loadImage('/Droid/head.png');
        handsImage = p.loadImage('/Droid/hands.png');
    };
    p.setup = function () {
        p.createCanvas(widht, hight);
       
    };
  
    p.draw = function () {
        p.background(255);
        if(gameMode < 2){
            p.textAlign(p.CENTER,p.CENTER);
            p.textSize(text404.size);
            p.text(text404.text, text404.x, text404.y);
        }
        if(gameMode < 1){
            p.textAlign(p.CENTER,p.CENTER);
            p.textSize(textPageNotFound.size);
            p.text(textPageNotFound.text, textPageNotFound.x, textPageNotFound.y);
        }
        if (p.mouseIsPressed === true) {
            if(p.mouseX >= 275 && p.mouseX <= 325 && p.mouseY >= 260 && p.mouseY <= 330){
                gameMode = 1;
            }
        }
        if(gameMode === 1){
            p.stroke('black');
            p.strokeWeight(line.weight);
            p.line(line.startX-line.length,line.startY,line.endX+line.length,line.endY);
            p.noStroke();
            p.rect(rect.x,rect.y,rect.width,rect.hight);
            if(line.length <= 100){
                line.length+=5;
            }
            if(line.length >= 100){
                if(text404.y < 400){
                    text404.y+=3;   
                }else{
                    gameMode = 2;
                }
             
            }
        }
        if(gameMode === 2){
            if(line.length >0){
                p.stroke('black');
                p.strokeWeight(line.weight);
                p.line(line.startX-line.length,line.startY,line.endX+line.length,line.endY);
                p.noStroke();
            }
            if(line.length >= 0){
                line.length-=5;
            }
            if(line.length < 0){
                gameMode = 3;
            }
        }
        if(gameMode === 3){
            drawPlayer();
        }

    };
    
    console.log('Hell0 there, y0u seem t0 be l0st, I wander h0w y0u g0t here');
  };