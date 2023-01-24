var hideEduBtn = document.getElementById('hideEduBtn');
var hideExpBtn = document.getElementById('hideExpBtn');
var hideConBtn = document.getElementById('hideConBtn');
let pEdu = document.getElementById('pEdu');
let pExp = document.getElementById('pExp');
let pCon = document.getElementById('pCon');

function mostrarEdu(){
    pEdu.classList.toggle("show");
}
function mostrarExp(){
    pExp.classList.toggle("show");
}
function mostrarCon(){
    pCon.classList.toggle('show');
}
hideEduBtn.addEventListener('click',mostrarEdu);
hideExpBtn.addEventListener('click',mostrarExp);
hideConBtn.addEventListener('click',mostrarCon);
