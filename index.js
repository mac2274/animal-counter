let image = document.querySelector('#img1');
let counterDiv = document.querySelector('.counter-container');
let imgContainer = document.querySelector('.img-container');
let body = document.querySelector('body');

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

    levelCount();
    changeImg(arr1,arr2);
    backgroundChange();
    insetHTML(); 
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
        image.src = arr1[1];
    }else if(count==20){
        nextLevel = nextLevel+1;
        image.src = arr2[2];
    }else if(count==30){
        nextLevel = nextLevel+1;
        image.src = arr2[3];
    }else if(count==40){
        nextLevel = nextLevel+1;
        image.src = arr2[4];
    }else if(count==50){
        nextLevel = nextLevel+1;
        image.src = arr2[5];
    }else if(count==60){
        nextLevel = nextLevel+1;
        image.src = arr2[6];
    }else if(count==70){
        nextLevel = nextLevel+1;
        image.src = arr2[7];
    }else if(count==80){
        nextLevel = nextLevel+1;
        image.src = arr2[8];
    }else if(count==90){
        nextLevel = nextLevel+1;
        image.src = arr2[9];
    }else if(count==100){
        nextLevel = nextLevel+1;
        image.src = arr2[0];
    }
}

// function changeImg(arr1,arr2){

//     image.src = arr2[0];
//     image.classList.toggle('shaking');

//     setTimeout(() => {
//         image.src = arr1[0];
//         image.classList.toggle('shaking');
//     }, 200);

//     if(count>=10){
//         image.src = arr2[1];
//         image.classList.toggle('shaking');
//         setTimeout(() => {
//             image.src = arr1[1];
//             image.classList.toggle('shaking');
//         },200);
//     }if(count>=20){
//         image.src = arr2[2];
//         setTimeout(() => {
//             image.src = arr1[2];
//         },200);
//     }if(count>=30){
//         image.src = arr2[3];
//         setTimeout(() => {
//             image.src = arr1[3];
//         },200);
//     }if(count>=40){
//         image.src = arr2[4];
//         setTimeout(() => {
//             image.src = arr1[4];
//         },200);
//     }if(count>=50){
//         image.src = arr2[5];
//         setTimeout(() => {
//             image.src = arr1[5];
//         },200);
//     }if(count>=60){
//         image.src = arr2[6];
//         setTimeout(() => {
//             image.src = arr1[6];
//         },200);
//     }if(count>=70){
//         image.src = arr2[7];
//         setTimeout(() => {
//             image.src = arr1[7];
//         },200);
//     }if(count>=80){
//         image.src = arr2[8];
//         setTimeout(() => {
//             image.src = arr1[8];
//         },200);
//     }if(count>=90){
//         image.src = arr2[9];
//         setTimeout(() => {
//             image.src = arr1[9];
//         },200);
//     }
// }

function changeImg(arr1, arr2){
    image.src = arr2[nextLevel];
    image.classList.toggle('shaking');
    setTimeout(() => {
        image.src = arr1[nextLevel];
        image.classList.toggle('shaking');
    },200);
} //Davids schöne Lösung

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
