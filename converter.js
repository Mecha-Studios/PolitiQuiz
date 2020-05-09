var version = "1.0";
var versiontext = document.getElementById("versionnumber");
var views = document.getElementById("views");
console.log("PolitiQuiz Version:" + version);
versiontext.innerHTML+= version;

var pointsRight = 0;
var pointsLeft = 0;

function addPointsRight(){
    pointsRight++;
    console.log("Points to the Right: " + pointsRight);
}

function addPointsLeft(){
    pointsLeft++;
    console.log("Points to the Left: " + pointsLeft);
}

function finalResults(){
    if(pointsRight > pointsLeft){
        console.log("You are right wing!");
    } else if(pointsLeft > pointsRight){
        console.log("You are left wing!");
    }
    var finalScore = pointsRight - pointsLeft;
    console.log("Final Score = " + finalScore);
    alert("Final Score: " + finalScore + 
    " A negative score is left wing, a positive score is right wing.");
}