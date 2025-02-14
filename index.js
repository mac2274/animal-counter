const image = document.querySelector('#img1');
let counterDiv = document.querySelector('.counter-container');

image.addEventListener('click', countNumber);
let count = 0;
let nextLevel = 0;


function countNumber(){ 
    count = count+1;

    counterDiv.innerHTML = `
        <label for="counter">Numbers hit</label>
        <h2>${count}</h2>
    `;

    if(count==10){
        nextLevel = nextLevel+1;
    }else if(count==20){
        nextLevel = nextLevel+1;
    }else if(count==30){
        nextLevel = nextLevel+1;
    }else if(count==40){
        nextLevel = nextLevel+1;
    }else if(count==50){
        nextLevel = nextLevel+1;
    }else if(count==60){
        nextLevel = nextLevel+1;
    }else if(count==70){
        nextLevel = nextLevel+1;
    }else if(count==80){
        nextLevel = nextLevel+1;
    }else if(count==90){
        nextLevel = nextLevel+1;
    }else if(count==100){
        nextLevel = nextLevel+1;
        }

        counterDiv.innerHTML += `
            <label for="counterLevel">Level</label>
            <h2>${nextLevel}</h2>
        `; 
}

