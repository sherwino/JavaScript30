// Returns NodeList, not exactly an array 
// It doens't have all of the methods an array has
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log('handleupdate')
    const suffix = this.dataset.sizing || '';
    console.log('suffix', suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
