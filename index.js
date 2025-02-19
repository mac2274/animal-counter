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
    changeImg(arr2[0],arr1[0]);
    if(count==10){
        changeImg(arr2[1],arr1[1]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[1]}`;
    }else if(count==20){
        changeImg(arr2[2],arr1[2]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[2]}`;
    }else if(count==30){
        changeImg(arr2[3],arr1[3]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[3]}`;
    }else if(count==40){
        changeImg(arr2[4],arr1[4]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[4]}`;
    }else if(count==50){
        changeImg(arr2[5],arr1[5]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[5]}`;
    }else if(count==60){
        changeImg(arr2[6],arr1[6]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[6]}`;
    }else if(count==70){
        changeImg(arr2[7],arr1[7]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[7]}`;
    }else if(count==80){
        changeImg(arr2[8],arr1[8]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[8]}`;
    }else if(count==90){
        changeImg(arr2[9],arr1[9]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[9]}`;
    }else if(count==100){
        changeImg(arr2[0],arr1[0]);
        nextLevel = nextLevel+1;
        image.src = `${arr1[0]}`;
        }
}

function changeImg(){
    setTimeout(() => {
        image.src = `${arr2[0]}`;
    }, 100);
    image.src = `${arr1[0]}`;
}



