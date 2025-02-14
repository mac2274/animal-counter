const image = document.querySelector('#img1');
let counterDiv = document.querySelector('.counter-container');

image.addEventListener('click', countNumber);
let count = 0;
let nextLevel = 0;


function countNumber(){ 
    let newCount = count++;

    counterDiv.innerHTML = `
        <label for="counter">Numbers hit</label>
        <h2>${newCount}</h2>
    `;

    if(newCount>10){
        let newLevel = nextLevel +1;

        if(newCount>20){
            newLevel = newLevel+1;
        
            if(newCount>30){
                newLevel = newLevel+1;
            
                if(newCount>40){
                    newLevel = newLevel+1;
                }
            }
        }

        

        counterDiv.innerHTML += `
            <label for="counterLevel">Level</label>
            <h2>${newLevel}</h2>
        `; 

       
    }

 
}

