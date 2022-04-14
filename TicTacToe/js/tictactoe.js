//This variable keeps track of whos turn it is
let activePlayer ="X";
//This array stores an array of moves. We use this to determine win conditions
let selectedSquares =[];

function placeXOrO(squareNumber) {
    //this condition ensures a square hasnt't been selected already
    //The .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element=>element.includes(squareNumber))){
        //This var retrieves the html elememnt id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is
        if (activePlayer ==="X") {
            //if activeplayyer is equal to X the x.png is placed in HTML.
            select.style.backgroundImage = 'url("./images/x_image.png")';
            //active player may only be x or o so if not x it myust be o
        }
        else {
            select.style.backgroundImage = 'url("./images/o_image.png")';
        }
        //squarenumber and active player are concatenated together and added to teh aarray
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any qin conditions
        checkWinConditions();
        //this condition is for changin gthe active player
        if (activePlayer==="X") {
            activePlayer="O";
        }
        else {
            //change active player to x
            activePlayer ="X";
        }

        //placement sound
        audio("./media/put.mp3");
        //check if comp turn
        if(activePlayer==="O"){
            //diable clicking for computer choice
            disableClick();
            //this function waits 1 second before computer places image and enables click
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        //return true is needed for our computersTurn funciton tyo work
        return true;
    }
    //this function results in a random square being selected
    function computersTurn(){
        let success = false;
        let pickASquare;
        while(!success){
            pickASquare =String(Math.floor(Math.random()*9));
            if (placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success = true;

            };
        }
    }
}

function checkWinConditions(){
    if (arrayIncludes("0X","1X","2X")) {drawWinLine(50,100,558,100)}
    else if (arrayIncludes("3X","4X","5X")) {drawWinLine(50,304,558,304)}
    else if (arrayIncludes("6X","7X","8X")) {drawWinLine(50,508,558,508)}
    else if (arrayIncludes("0X","3X","6X")) {drawWinLine(100,50,100,558)}
    else if (arrayIncludes("1X","4X","7X")) {drawWinLine(304,50,304,558)}
    else if (arrayIncludes("2X","5X","8X")) {drawWinLine(508,50,508,558)}
    else if (arrayIncludes("6X","4X","2X")) {drawWinLine(100,508,510,90)}
    else if (arrayIncludes("0X","4X","8X")) {drawWinLine(100,100,520,520)}

    else if (arrayIncludes("0O","1O","2O")) {drawWinLine(50,100,558,100)}
    else if (arrayIncludes("3O","4O","5O")) {drawWinLine(50,304,558,304)}
    else if (arrayIncludes("6O","7O","8O")) {drawWinLine(50,508,558,508)}
    else if (arrayIncludes("0O","3O","6O")) {drawWinLine(100,50,100,558)}
    else if (arrayIncludes("1O","4O","7O")) {drawWinLine(304,50,304,558)}
    else if (arrayIncludes("2O","5O","8O")) {drawWinLine(508,50,508,558)}
    else if (arrayIncludes("6O","4O","2O")) {drawWinLine(100,508,510,90)}
    else if (arrayIncludes("0O","4O","8O")) {drawWinLine(100,100,520,520)}
    else if (selectedSquares.length >=9){
        audio('./media/tie1.mp3');
        setTimeout(function () {resetGame(); }, 1000);
    }
    
    function arrayIncludes(squareA, SquareB, SquareC){
    const a= selectedSquares.includes(squareA)
    const b= selectedSquares.includes(SquareB)
    const c= selectedSquares.includes(SquareC)

    if (a === true && b === true && c === true) {return true}
    }
}

function disableClick(){
    body.style.pointerEvents = "none";
    setTimeout(function() {body.style.pointerEvents = "auto";}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    function animateLineDrawing (){
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608)
        c.beginPath();
        c.moveTo(x1,y2)
        c.lineTo(x,y)
        c.lineWidth=10;
        c.strokeStyle ="rgba(70,255,33,.8)";
        c.stroke();
        if(x1 <=x2 && y1<=y2){
            if(x<x2){x+=10;}
            if (y<y2){y+=10;}
            if (x>x2 && y>=y2){cancelAnimationFrame(animationLoop);}
        }
        if (x1<=x2 && y1 >=y2) {
            if(x<x2){x+=10;}
            if (y>y2){y-=10;}
            if (x>=x2 && y<=y2){cancelAnimationFrame(animationLoop);}
        }

    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();
    audio("./media/win.mp3");
    animateLineDrawing();
    setTimeout(function () {clear(); resetGame();}, 1000)
}

function resetGame() {
    for (let i=0; i<9; i++){
        let square = document.getElementById(String(i))
        square.style.backgroundImage =""
    }
    selectedSquares = [];
}
