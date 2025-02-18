let image = document.querySelector('#img1');
let counterDiv = document.querySelector('.counter-container');

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

setTimeout(changeImg, 1000);

function changeImg(){
    for(let i=0; i<10; i++){
        image.src =`resources/img/Stag/Stag_1.png`;

    }
}
