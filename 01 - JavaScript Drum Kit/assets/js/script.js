

function playThatBeat(e) {
    let keyCode = e.keyCode;
    
    // Select the audio file that matches the key that I pressed. 
    // Note how it selects all <audio> elements, and how it uses the data-key.
    const audio = document.querySelector(`audio[data-key='${keyCode}'`);
    // Here Wes is selecting the class key and the data-key field, so I guess you could select multiple
    // fields in the query selector...I don't know why I didn't know that
    const aKey = document.querySelector(`.key[data-key='${keyCode}'`);

    // if the document.querySelector doesn't find anything then get out of the addEventListener function using return.
    // not sure why I have never used the addEvenetListener word. 
    if(!audio) return;

    // rewind the audio file to the beginning everytime this 'keydown' event happens.
    audio.currentTime = 0; 
 
    // I guess play is just another thing I have never used in JS but it is simpleeeee
    // and I think it is obvious what it does.
    audio.play() 

    // Here is another thing that I am so used to doing in jQuery, never have used this prop.
    // Damn you + 3pts for being awesome, I still watch your videos at 1.5-1.75x though :)
    aKey.classList.add('playing');

    // Let's display the word of each sound being played, first lets select the span inside the key.
    let wordElem = aKey.childNodes[3];

    // Send that span over to this function is just waiting to receive an element/tag with word inside.
    showThoseWords(wordElem)


    // Transition end??? OOOOOH. 
    // Grab all of the keys on the document and add them to an array.
    const keys = document.querySelectorAll('.key');

    // For each key, return a key with an event listener, that is waiting for the animation/transition to finish
    // As soon as the animation / transition is finished, remove the class that has the transition or reset.
    // He did this with a fat arrow I want to try with the for...of
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  

    // This event will execute the playthatBeat function everytime a key is down... or pressed.
}
    // Anyways so I already know that events have a crap load of information. 
    // Never used it to find the "propertyName" though + 2 pts
    // Transition end was giving me to many results, so we are now filtering only for the transform events.
    // Then...need to remove the class that makes the button light up and animate.
    // not sure why I would return here, but I copied it.
    function removeTransition(e) { 
        if(e.propertyName !== 'transform') return; { 
            this.classList.remove('playing');
        }
    }

    // Display the word of the key that is being pressed, make it big.
    function showThoseWords(elem) { 
        // Search for the element with the .bigwords class in the document
        const bigDiv = document.querySelector('.bigwords');
        // Replace the innerText in this element with the ones that are being sent from the function above
        // But...since the function above is sending a full element, we need to drill down and only select innertext.
        // And replace it with the innerText found in the button that is being pressed.
        // For a cool effect.
        bigDiv.innerText = elem.innerText;
        // Then when you are done with that add the bigwords-pressed class to the bigDiv.
        bigDiv.classList.add('bigwords-pressed');

        // Then after you display the word set a 200 ms timer, and then run the removeWord function
        // And pass the elem argument to it.
        setTimeout(removeWord, 200, bigDiv);

    }

    // Put the word back to normal... and so forth, after 200ms.
    function removeWord(bigDiv) {
        bigDiv.innerText = 'Play That Beat';
        bigDiv.classList.remove('bigwords-pressed');
    }
            
    

    window.addEventListener('keydown', playThatBeat);
