// Returns everything with the class panels
// This is a HTMLCollection, you can't iterate over a HTMLCollection is not a real array
// TODO: Reasearch HTMLCollection
const panelsClass = document.getElementsByClassName('panel');

// Returns all of the descendants, but it came out to be the same crap as panelClass
// This is a NodeList, you CAN iterate over a NodeList like an array, but it is not an array
// TODO: Research NodeList
const panels = document.querySelectorAll('.panel');

console.log('panels', panels)
console.log('panelsClass', panelsClass)

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    // console.log('transition-ended for', e.propertyName);

    // Interesting tid bit from Wes, browsers read the transitioned property as
    // flex-grow, so idealy you could say if ( e.propertyName == flex-grow), but safari logs it as 'flex' que sucios.
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');

    }

}

// You don't want to run the function so you don't say toggleOpen(), just ref to it
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));