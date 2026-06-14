document.addEventListener("DOMContentLoaded", () => {

const text = [
"Full Stack Developer",
"AI Engineer",
"Problem Solver"
];

let i = 0, j = 0;
const el = document.querySelector(".typing");

function type(){
if(!el) return;

if(j < text[i].length){
el.textContent += text[i][j];
j++;
setTimeout(type, 100);
}else{
setTimeout(erase, 1200);
}
}

function erase(){
if(j > 0){
el.textContent = text[i].substring(0, j-1);
j--;
setTimeout(erase, 50);
}else{
i = (i+1) % text.length;
setTimeout(type, 300);
}
}

type();

});