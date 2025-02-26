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
        goalreached();
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

// function goalreached(){
//     image.src = 0;
//     let mainContainer = document.querySelector('#main-container');
//     body.classList.add('winner');

//         // setTimeout(() => {
//         //     mainContainer.innerHTML = `
//         //         <div id="winnerText">
//         //             <p>Herzlichen Glückwunch! <br> DU hast gewonnen!</p>
//         //             <button id="push" onclick="reset()">Nochmal spielen</button>
//         //         </div>
//         //         `;
//         // }, 1000); -  zweite Alternative mit funktion reset ()

//         setTimeout(() => {
//             mainContainer.innerHTML = `<div id="winnerText">
//                 <p>Herzlichen Glückwunch! <br> DU hast gewonnen!</p>
//                 <button id="push">Nochmal spielen</button>
//                 </div>
//                 `;

//             let buttonFunction = document.querySelector('#push');

//             buttonFunction.addEventListener('click', () => {
//                 count = 0;
//                 nextLevel = 0;

//                 body.classList.remove('winner');
//                 mainContainer.innerHTML = `
//                 <div class="container">
//                     <h1>Animal Hit Counter</h1>
//                     </div>
//                     <div class="counter-container">
//                         <label for="counter">Hit</label>
//                             <input type="number" id="counter">
//                             <h2>0</h2>
//                         <label for="counterLevel">Level</label>
//                             <input type="number">
//                             <h2>0</h2>
//                     </div>
//                     <div class="img-container">
//                         <img src="resources/img/Stag/Stag_1.png" id="img1" alt="Gesicht von einem gezeichneten Hirsch">
//                 </div> 
//                 `;
//                 countNumber();
//             });
            
//         }, 200); //der Hirsch wird noch angezeigt, wegen der Verzögerung       
// }

// function reset() {
//     count = 0;
//     levelCount = 0;
// } //mein ansatz...

let winnerContainer = document.querySelector("#winnerText");
let mainContainer = document.querySelector("#main-container");
let resetButton = document.querySelector("#push");

resetButton.addEventListener("click", reset);

function goalreached() {
  image.src = 0;

  mainContainer.classList.add("hidden");
  winnerContainer.classList.remove("hidden");
}

function reset() {
  mainContainer.classList.remove("hidden");
  winnerContainer.classList.add("hidden");
  nextLevel = 0;
  count = 0;
  insetHTML(); // Davids Lösunng
}