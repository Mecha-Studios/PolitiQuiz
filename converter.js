var version = "1.7";
var versiontext = document.getElementById("versionnumber");
var views = document.getElementById("views");
var spectrumaxis = document.getElementById("politicalaxis");
console.log("PolitiQuiz Version:" + version);
versiontext.innerHTML+= version;

var pointsRight = 0;
var pointsLeft = 0;

function addPointsRight(){
    pointsRight++;
    console.log("Points to the Right: " + pointsRight);
    spectrumaxis.value++;
}

function addPointsLeft(){
    pointsLeft++;
    console.log("Points to the Left: " + pointsLeft);
    spectrumaxis.value--;
}

function finalResults(){
    var finalScore = pointsRight - pointsLeft;
    var scoretxt = document.getElementById("scoretxt");
    var spectrumside = document.getElementById("spectrumside");
    scoretxt.innerHTML = "Final Score : " + finalScore;
    spectrumaxis.style.display = 'inline';
    if(pointsRight > pointsLeft){
        console.log("You are right wing!");
        console.log("Final Score = " + finalScore);
        spectrumside.innerHTML = "Spectrum Side: Right";
    } else if(pointsLeft > pointsRight){
        console.log("You are left wing!");
        console.log("Final Score = " + finalScore);
        spectrumside.innerHTML = "Spectrum Side: Left";
    } else if(pointsRight == pointsLeft){
        console.log("you are a centrist!");
        console.log("Final Score = " + finalScore);
        spectrumside.innerHTML = "Spectrum Side: Center";
    }
    
}