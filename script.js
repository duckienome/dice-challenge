const myBtn = document.querySelector("#myBtn");


let random_1 = Math.floor(Math.random()*7);
let random_2 = Math.floor(Math.random()*7);


myBtn.addEventListener("click",()=>{
    window.location.reload()
})


document.querySelector("#random_1").innerText = random_1;
document.querySelector("#random_2").innerText = random_2;


function decide_winner(){
    var decide_winner; 

    if (random_1 > random_2) {
        decide_winner = random_1;
    } else if (random_1 < random_2) {
        decide_winner = random_2;
    } else {
        decide_winner = "Draw"
    }
    return decide_winner;
}
function show_winner(winner) {
    if (winner == random_1) {
        document.querySelector("#random_1").classList.toggle("winner");
        document.querySelector("#random_2").classList.toggle("loser");

        document.querySelector("#show_winner").innerText = "Random 1 won";

    } else if (winner == random_2) {
        document.querySelector("#random_1").classList.toggle("loser");
        document.querySelector("#random_2").classList.toggle("winner");

        document.querySelector("#show_winner").innerText = "Random 2 won";

    } else {
        document.querySelector("#random_1").classList.toggle("draw");
        document.querySelector("#random_2").classList.toggle("draw");

        document.querySelector("#show_winner").innerText = "It's a Draw";

    }
}

let winner = decide_winner();
show_winner(winner);