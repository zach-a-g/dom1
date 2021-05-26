`use strict`; // use this always

const bodyElement = document.querySelector(`body`);
const title = document.querySelector(`#title`);
const subtitle = document.querySelector(`.subtitle`);
const firstParagraph = document.querySelector(`p`);
const allParagraphs = document.querySelectorAll(`p`);
const clickMeButton = document.querySelector(`#clickMe`);

const h3element = document.createElement(`h3`);
h3element.innerText = (`Hello, I am an H3 Tag`);

// console.log(title.innerText);

// console.log(subtitle);
// console.log(firstParagraph);
// console.log(allParagraphs.length);

// rootElement.append(h3element);

// bodyElement.append(h3element);

let clickCount = 0;

function clickCounter() {
    clickCount = clickCount + 1;
    console.log(`click count is `, clickCount)
    title.innerText = `Hello JavaScript!`;
    return clickCount;
}

clickMeButton.addEventListener(`click`, clickCounter);