var n = Math.random();
n= n*6;
n= Math.floor(n)+1;
document.querySelector(".img1").setAttribute("src","images/dice" + n + ".png");
var m = Math.random();
m = m*6;
m= Math.floor(m)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + m+ ".png");

if (n<m){
    document.querySelector("h1").textContent ="Player 2 wins";
}
else if (m<n){
    document.querySelector("h1").textContent="Player 1 wins";
}else {
    document.querySelector("h1").textContent="Its a Draw";
}
