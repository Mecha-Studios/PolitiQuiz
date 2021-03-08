var version = "2.2";
var versiontext = document.getElementById("versionnumber");
var pspectrumaxis = document.getElementById("politicalaxis");
var espectrumaxis = document.getElementById("economicaxis");
console.log("PolitiQuiz Version:" + version);
versiontext.innerHTML+= version;

var pointsRight = 0;
var pointsLeft = 0;
var pointsAuth = 0;
var pointsLib = 0;

function addPointsRight(){
    pointsRight++;
    console.log("Points to the Right: " + pointsRight);
    pspectrumaxis.value++;
}

function addPointsLeft(){
    pointsLeft++;
    console.log("Points to the Left: " + pointsLeft);
    pspectrumaxis.value--;
}

function addPointsAuth(){
    pointsAuth++;
    console.log("Points to Auth: " + pointsAuth);
    espectrumaxis.value++;
}

function addPointsLib(){
    pointsLib++;
    console.log("Points to Lib: " + pointsLib);
    espectrumaxis.value--;
}

function finalResults(){
    var ecoScore = pointsRight - pointsLeft;
    var polScore = pointsAuth - pointsLib;
    var scoretxt1 = document.getElementById("scoretxt1");
    var scoretxt2 = document.getElementById("scoretxt2");
    scoretxt1.innerHTML = "Polical Score : " + polScore;
    scoretxt2.innerHTML = "Economic Score : " + ecoScore;
    espectrumaxis.style.display = 'inline';
    pspectrumaxis.style.display = 'inline';
    if(pointsRight > pointsLeft){
        console.log("You are right wing!");
        console.log("Political Score = " + ecoScore);
        espectrumside.innerHTML = "Economic: Right";
    } else if(pointsLeft > pointsRight){
        console.log("You are left wing!");
        console.log("Political Score = " + ecoScore);
        espectrumside.innerHTML = "Economic: Left";
    } else if(pointsRight == pointsLeft){
        console.log("You are a centrist!");
        console.log("Political Score = " + ecoScore);
        espectrumside.innerHTML = "Economic: Center";
    }
    
    if(pointsAuth > pointsLib){
        console.log("You are authoritarian!");
        console.log("Final Score = " + polScore);
        pspectrumside.innerHTML = "Political: Authoritarian";
    } else if(pointsLib > pointsAuth){
        console.log("You are libertarian!");
        console.log("Final Score = " + polScore);
        pspectrumside.innerHTML = "Political: Libertarian";
    } else if(pointsAuth == pointsLib){
        console.log("You are a centrist!");
        console.log("Final Score = " + polScore);
        pspectrumside.innerHTML = "Political: Center";
    }
    
}