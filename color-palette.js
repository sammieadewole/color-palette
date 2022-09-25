let palette = document.querySelector('.palette-wrap')

let primaryColor = document.querySelector('.primary-color')
let primaryLightColor = document.querySelector('.primary-light')
let secondaryColor = document.querySelector('.secondary-color')
let secondaryLightColor = document.querySelector('.secondary-light')

let textSideOne = document.querySelector('.ul-one')
let textSideOneChildren = Array.from(textSideOne.children);
let textSideTwo = document.querySelector('.ul-two')
let textSideTwoChildren = Array.from(textSideTwo.children);

let changeColorButton = document.querySelector('.changebutton');

let prevColorPalette = []; 


let pryR;
let pryG;
let pryB;

let secR;
let secG;
let secB;


let prevPryR;
let prevPryG;
let prevPryB;

let prevSecR;
let prevSecG;
let prevSecB;


let previousColors = document.querySelector('.previous');
let previousColorsArray = JSON.parse(localStorage.getItem('prevColor'))

let pr;
let pl;
let sc;
let sl;

function changeColor() {

    prevPryR = pryR
    prevPryG = pryG
    prevPryB = pryB

    prevSecR = secR
    prevSecG = secG
    prevSecB = secB

    prevColorPalette = [
        `rgba(${prevPryR}, ${prevPryG}, ${prevPryB}, 0.9)`,
        `rgba(${prevPryR}, ${prevPryG}, ${prevPryB}, 0.5)`,
        `rgba(${prevSecR}, ${prevSecG}, ${prevSecB}, 0.9)`,
        `rgba(${prevSecR}, ${prevSecG}, ${prevSecB}, 0.5)`
    ]
    
    


    pryR = Math.floor(Math.random() * 256);
    pryG = Math.floor(Math.random() * 256);
    pryB = Math.floor(Math.random() * 256);

    secR = pryR * -1 + 255;
    secG = pryG * -1 + 255;
    secB = pryB * -1 + 255;

    primaryColor.style.background = `rgba(${pryR}, ${pryG}, ${pryB}, 0.9)`;
    primaryLightColor.style.background = `rgba(${pryR}, ${pryG}, ${pryB}, 0.5)`;
    secondaryColor.style.background = `rgba(${secR}, ${secG}, ${secB}, 0.9)`;
    secondaryLightColor.style.background = `rgba(${secR}, ${secG}, ${secB}, 0.5)`;


    textSideOneChildren[0].innerText = `Color 1: rgba(${pryR}, ${pryG}, ${pryB}, 0.9)`
    textSideOneChildren[1].innerText = `Color 2: rgba(${pryR}, ${pryG}, ${pryB}, 0.5)`
    textSideTwoChildren[0].innerText = `Color 3: rgba(${secR}, ${secG}, ${secB}, 0.9)`
    textSideTwoChildren[1].innerText = `Color 4: rgba(${secR}, ${secG}, ${secB}, 0.5)`



    if(prevPryB) {
        localStorage.setItem('prevColor', JSON.stringify(prevColorPalette))
    } else {
        localStorage.setItem('prevColor', JSON.stringify(prevColorPalette))
    }

}


function prevColorsFunc() {
    previousColorsArray = JSON.parse(localStorage.getItem('prevColor'))

    pr = previousColorsArray[0];
    pl = previousColorsArray[1];
    sc = previousColorsArray[2];
    sl = previousColorsArray[3];

    previousColors.innerHTML = `<summary>Previous Colors</summary>
        <ul>
            <li>Color 1: ${pr}</li>
            <li>Color 2: ${pl}</li>
            <li>Color 3: ${sc}</li>
            <li>Color 4: ${sl}</li>
        </ul>
    `
}
prevColorsFunc();

document.onload = changeColor();

changeColorButton.addEventListener('click', () => {
    changeColor();
    prevColorsFunc();
})





