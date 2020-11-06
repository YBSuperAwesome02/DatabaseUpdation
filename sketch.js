var ball;
var database, position;

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    var refdata=database.ref("Ball/Position")
    refdata.on("value", readval)
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-2,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(2,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+2);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/Position").set({
        x:ball.x + x,
        y:ball.y + y
    })
}

function readval(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}
