# JavaScript30

30 Day Vanilla JS Coding Challenge

Build 30 things in 30 days with 30 tutorials

No Frameworks × No Compilers × No Libraries × No Boilerplate

## A Course by Wes Bos

More details [here](https://javascript30.com/), you should definitely check out his site, along with some of his other tutorials.

The site is live on [GitHub Pages](https://sherwino.github.io/js30-1/index.html) if you want to try it out.

### 01 - JavaScript Drum Kit

In this project we explore the vanilla JavaScript Event Listener, and use it to make a drum kit. 

#### Comments

This course is pretty cool because it gives me some "light reading" while I work on bigger projects.
At the same time it reminds me of some concepts that I may have missed, or barely used.
In this project we used ```addEventListener```, something that I don't remember ever using in Vanilla.
Along with ```document.querySelector```, something that I haven't used in a long time. When it comes to element selection in vanilla js I tend to use ```document.getElementsByClassName```, or the one for id. Oh yeah and I have never used the ```<kbd>``` element/tag and the data-key binding to in HTML. Cool stuff.

#### Customizations & Improvements

[![https://gyazo.com/f17d74321bf9a16eff4a8bfb62fe21bb](https://i.gyazo.com/f17d74321bf9a16eff4a8bfb62fe21bb.gif)](https://gyazo.com/f17d74321bf9a16eff4a8bfb62fe21bb)

```javascript function showThoseWords(elem) { 
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