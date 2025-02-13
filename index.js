const image = document.querySelector('#img1');
let counterDiv = document.querySelector('.counter-container');

image.addEventListener('click', countNumber);
let count = 0;

function countNumber(){ 
    let newCount = count++;

    counterDiv.innerHTML = `
    <label for="counter">Numbers hit</label>
    <h1>${newCount}</h1>`;
}

