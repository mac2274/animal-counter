let image = document.querySelector('#img1');
let counterDiv = document.querySelector('.counter-container');
let imgContainer = document.querySelector('.img-container');

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
let count = 0;
let nextLevel = 0;

function countNumber(){ 
    count = count+1;

    changeImg();
    insetHTML(); 
    levelCount();
}

function insetHTML(){
    counterDiv.innerHTML = `
        <label for="counter">Hit</label>
        <h2>${count}</h2>
        <label for="counter">Level</label>
        <h2>${nextLevel}</h2>
    `;
} 

function levelCount(){
    if(count==10){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Unicorn/Unicorn_1.png";
    }else if(count==20){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Cat/Cat_1.png";
    }else if(count==30){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Dragon/Dragon_1.png";
    }else if(count==40){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Lizard/Lizard_1.png";
    }else if(count==50){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Octopus/Octopus_1.png";
    }else if(count==60){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Owl/Owl_1.png";
    }else if(count==70){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Pig/Pig_1.png";
    }else if(count==80){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Rainbowdog/Rainbowdog_1.png";
    }else if(count==90){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Sheep/Sheep_1.png";
    }else if(count==100){
        nextLevel = nextLevel+1;
        image.src = "resources/img/Stag/Stag_1.png";
        }
}

function changeImg(){
    setTimeout(() => {
        image.src = `${arr2[0]}`;
    }, 200);
    image.src = `${arr1[0]}`;
}



