const btn = document.querySelector('#btn')
const state = {
  count: 0,
};

/* btn.addEventListener('click', () => {
    state.count++;
    btn.innerHTML = `counter is ${state.count}`
}) */

// but react underhood do is like

function countHandler(){ 
    state.count++
    reRendering()
}

function reRendering() {
    btn.innerHTML = `counter is ${state.count}`
}

btn.addEventListener('click', countHandler)