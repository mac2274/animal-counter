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
    changeImg(arr1,arr2);
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
   if(count==9){
        nextLevel = nextLevel+1;
        image.src = arr1[1];
    }else if(count==19){
        nextLevel = nextLevel+1;
        image.src = arr2[2];
    }else if(count==29){
        nextLevel = nextLevel+1;
        image.src = arr2[3];
    }else if(count==39){
        nextLevel = nextLevel+1;
        image.src = arr2[4];
    }else if(count==49){
        nextLevel = nextLevel+1;
        image.src = arr2[5];
    }else if(count==59){
        nextLevel = nextLevel+1;
        image.src = arr2[6];
    }else if(count==69){
        nextLevel = nextLevel+1;
        image.src = arr2[7];
    }else if(count==79){
        nextLevel = nextLevel+1;
        image.src = arr2[8];
    }else if(count==89){
        nextLevel = nextLevel+1;
        image.src = arr2[9];
    }else if(count==99){
        nextLevel = nextLevel+1;
        image.src = arr2[0];
    }
}

function changeImg(arr1,arr2){

    image.src = arr2[0];
    setTimeout(() => {
        image.src =arr1[0];
    }, 200);

    if(count<=10){
        image.src = arr1[1];
        setTimeout(() => {
            image.src = arr2[1];
        },200);
    }
}



