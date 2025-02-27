let image = document.querySelector('#img1');
let counterDiv = document.querySelector('.counter-container');
let imgContainer = document.querySelector('.img-container');
let body = document.querySelector('body');

let count = 0;  
let nextLevel = 0;

let winnerContainer = document.querySelector("#winnerText");
let mainContainer = document.querySelector("#main-container");
let resetButton = document.querySelector("#push");

let arr1 = ['resources/img/Stag/Stag_1.png',
    'resources/img/Unicorn/Unicorn_1.png',
    'resources/img/Cat/Cat_1.png',
    'resources/img/Dragon/Dragon_1.png',
    'resources/img/Lizard/Lizard_1.png',
    'resources/img/Octopus/Octopus_1.png',
    'resources/img/Owl/Owl_1.png',
    'resources/img/Pig/Pig_1.png',
    'resources/img/Rainbowdog/Rainbowdog_1.png',
    'resources/img/Sheep/Sheep_1.png'
];

let arr2 = ['resources/img/Stag/Stag_2.png',
    'resources/img/Unicorn/Unicorn_2.png',
    'resources/img/Cat/Cat_2.png',
    'resources/img/Dragon/Dragon_2.png',
    'resources/img/Lizard/Lizard_2.png',
    'resources/img/Octopus/Octopus_2.png',
    'resources/img/Owl/Owl_2.png',
    'resources/img/Pig/Pig_2.png',
    'resources/img/Rainbowdog/Rainbowdog_2.png',
    'resources/img/Sheep/Sheep_2.png'
];

image.addEventListener('click', countNumber);


function countNumber(){ 
    count = count+1;
    levelCount();
    changeImg(arr1,arr2);
    backgroundChange();
    insetHTML(); 
}

function levelCount(){
   if(count==10){
        nextLevel = nextLevel+1;
        image.src = " ";
    }else if(count==20){
        nextLevel = nextLevel+1;
        image.src = arr2[nextLevel];
    }else if(count==30){
        nextLevel = nextLevel+1;
        image.src = arr2[nextLevel];
    }else if(count==40){
        nextLevel = nextLevel+1;
        image.src = arr2[nextLevel];
    }else if(count==50){
        nextLevel = nextLevel+1;
        image.src = arr2[nextLevel];
    }else if(count==60){
        nextLevel = nextLevel+1;
        image.src = arr2[nextLevel];
    }else if(count==70){
        nextLevel = nextLevel+1;
        image.src = arr2[nextLevel];
    }else if(count==80){
        nextLevel = nextLevel+1;
        image.src = arr2[nextLevel];
    }else if(count==90){
        nextLevel = nextLevel+1;
        image.src = arr2[nextLevel];
    }else if(count==100){
        nextLevel = nextLevel+1;
        image.src == arr1[0];
        goalreached();
    }
}

function changeImg(arr1, arr2){
    image.src = arr2[nextLevel];
    image.classList.toggle('shaking');
    setTimeout(() => {
        image.src = arr1[nextLevel];
        image.classList.toggle('shaking');
    },200);
}

function backgroundChange(){
    body.classList.toggle('unicorn', count>=10);
    body.classList.toggle('cat', count>=20);
    body.classList.toggle('dragon', count>=30);
    body.classList.toggle('lizard', count>=40);
    body.classList.toggle('octopus', count>=50);
    body.classList.toggle('owl', count>=60);
    body.classList.toggle('pig', count>=70);
    body.classList.toggle('rainbow', count>=80);
    body.classList.toggle('sheep', count>=90);}

function insetHTML(){
    counterDiv.innerHTML = `
        <div class="input-container">
            <label for="counter">Hit</label>
            <h2>${count}</h2>
        </div>
        <div class="input-container">
            <label for="counter">Level</label>
            <h2>${nextLevel}</h2>
        </div>
    `;
} 

resetButton.addEventListener("click", reset);
    function goalreached() {
    image.src = 0;

    mainContainer.classList.add("hidden");
    winnerContainer.classList.remove("hidden");
    body.classList.add('center');
}

function reset() {
    mainContainer.classList.remove("hidden");
    winnerContainer.classList.add("hidden");

    count = 0;
    nextLevel = 0;
}