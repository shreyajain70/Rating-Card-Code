
let submit = document.querySelector('.submit-btn');
let div2 = document.querySelector('.main-div2');
let div1 = document.querySelector('.main-div');
let ratingdiv = document.querySelector('.rating-btn');
let rabtnn = document.getElementsByClassName('ra-btn');
console.log(rabtnn)
let spann = document.querySelector('.rating');
for(let i of rabtnn){

function check(){

    let span = document.createElement('span');
    span.innerText = i.innerText;
console.log(span);
spann.appendChild(span);

    if(ratingdiv.classList.contains('rating-btn')){
        ratingdiv.classList.remove('rating-div');
        ratingdiv.classList.add('rating-btn1');
    }



}
i.addEventListener('click',check);



}


function task_show() {


    if (div1.classList.contains('main-div')) {
        div1.classList.remove('main-div');
        div1.classList.add('maindivv')
    }
    if (div2.classList.contains('main-div2')) {
        div2.classList.remove('main-div2');
        div2.classList.add('div2add');
    }
}


submit.addEventListener('click', task_show);



