// var winner;
var p1 = Math.floor(Math.random()*7);
var p2 = Math.floor(Math.random()*7);

// var a1=["first","two","three","four","five","six"]
// var a2=["ek","dow","teen","chaar","panch","chy"]



function winner() {
    var winner;
    if (p1>p2) {
        winner = "P1"
    } else if(p2>p1) {
        winner = "P2" 
    } else {
        winner = "Draw"
    }
    outerwinner= winner

    document.querySelector("h1").innerText = outerwinner;
    document.querySelector("#p1").innerText = "P1 = "+p1;
    document.querySelector("#p2").innerText = "P2 = "+p2;

    if (winner == "Draw") {
        document.querySelector("#p1").classList.toggle("draw");
        document.querySelector("#p2").classList.toggle("draw");
    } else if (winner == "P1") {
        document.querySelector("#p1").classList.toggle("winner");
        document.querySelector("#p2").classList.toggle("loser");
    } else {
        document.querySelector("#p1").classList.toggle("loser");
        document.querySelector("#p2").classList.toggle("winner");
    }
}

winner();
// if (p1>p2) {

// }