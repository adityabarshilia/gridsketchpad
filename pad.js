function changeSize() {
    let size;
    while (true) {
        size = parseInt(prompt("enter a new size in the range 1-70"), 10);
        if (size >= 1 && size <= 70) {
            break;
        } if (size < 1 || size > 70) {
            alert("enter in the range 1-70");
            continue;
        } if (isNaN(size)) {
            alert("Sorry, the value is NOT valid.")
            return;
        } newGrid(size);
    }
    clearGrid();
    newGrid(size);
}
function clearGrid() {
    while (divcontainer.firstChild) {
        divcontainer.removeChild(divcontainer.firstChild);
    }
}
function newGrid(s) {
    for (let x = 1; x <= s ** 2; x++) {
        let divs = document.createElement("DIV");
        divcontainer.appendChild(divs);
        divs.classList.add("item" + x);
        divs.classList.add("items");
    }
    const newsize = `repeat(${s}, 1fr)`;
    divcontainer.style.setProperty('--columns', newsize);
    divcontainer.style.setProperty('--rows', newsize);
    document.querySelectorAll('.items').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            item.style.backgroundColor = "#" + randomColor;
        });
    })
}
const divcontainer = document.getElementById("container");

for (let i = 1; i <= 256; i++) {
    let indivs = document.createElement("DIV");
    divcontainer.appendChild(indivs);
    indivs.classList.add("item" + i);
    indivs.classList.add("items");
}

document.querySelectorAll('.items').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        item.style.backgroundColor = "#" + randomColor;
    });
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", changeSize);
