let btn_prev = document.querySelector('.prev');
let btn_next = document.querySelector('.next');
let containers = document.querySelectorAll('main .container');

let i = 0;

btn_next.onclick = function(){
    containers[i].style.display = 'none';
    i++;
    if(i >= containers.length){
    i = 0;
}
containers[i].style.display = 'flex';
}

btn_prev.onclick = function(){
    containers[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = containers.length - 1;
    }
    containers[i].style.display = 'flex';
}