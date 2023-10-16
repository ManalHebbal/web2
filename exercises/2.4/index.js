const red = document.getElementsByClassName('red');
const orange = document.getElementsByClassName('orange');
const green = document.getElementsByClassName('green');
const sequences =['red','orange','green','orange'];
let index = 0;

const delayInSeconds = 2;
const delayInMiliSeconds = delayInSeconds * 1000;

startLight();

function startLight(){
    const color = sequences[index];
    const light =  document.querySelector(`.${color}`);
    console.log(light);
    console.log(color);
    light.style.backgroundColor = color;

    setTimeout(() => {
        light.style.backgroundColor = '';
        index = (index + 1) % sequences.length;
        startLight();
      }, delayInMiliSeconds);
}



