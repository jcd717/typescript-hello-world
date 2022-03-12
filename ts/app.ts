import * as Phrase from './phrase.js'

let message: string = Phrase.phrase();

// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
heading.className='centre';

const mapImg=document.querySelector("#map-img");

// add the heading the document
//document.body.appendChild(heading);
mapImg?.before(heading);

// Ajout d'un bouton "refresh heading"
let divButton=document.createElement('div');
divButton.className="centre";
divButton.style.marginBottom='1rem';
let button=document.createElement('button');
button.textContent='Hello World ?';
divButton.appendChild(button);

button.addEventListener("click",
    function(){
        heading.textContent=Phrase.phrase();
    }
);

heading.after(divButton);
