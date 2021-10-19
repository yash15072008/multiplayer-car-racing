var ball,database,position;

function setup() {
    database = firebase.database();
    createCanvas(600,600);

    ball = createSprite(300,300,50,50);
    ball.shapeColor= "red";

    var ballPosition = database.ref('ball/position');
    ballPosition.on("value", readPosition, showError);

}

function draw() {

    background("lightblue");

    if(keyDown("left_arrow")){

       writePosition(-3,0);
    }
    if(keyDown("right_arrow")){

        writePosition(3,0);
    }
    if(keyDown("down_arrow")){

        writePosition(0,3); 
    }
    if(keyDown("up_arrow")){

        writePosition(0,-3);
    }

    drawSprites();
}

function writePosition(x,y) {

    database.ref('ball/position').set({

        'x': position.x + x,
        'y': position.y + y
    })
}

function readPosition(data) {

    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}

function showError() {

    console.log("error");
}