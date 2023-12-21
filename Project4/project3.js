function toggleColor(event) {
    const box = event.target;
    box.style.backgroundColor = '#EAD196';
}

function generateGrid(size) {
    var root = document.querySelector(':root');
    root.style.setProperty('--columns', size); 
    for (let j = 0; j < size; j++) {
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);

        const row = document.createElement('div');
        row.classList.add('container');
        container.appendChild(row);

        for (let i = 0; i < size; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = '<p> </p>';
            row.appendChild(box);
            box.addEventListener('mouseover', toggleColor);
        }
    }
}

document.getElementById('submit').addEventListener('click', function () {
    const sizeInput = document.getElementById('size');
    const gridSize = parseInt(sizeInput.value, 10);

    // Check if the input is a valid number and within the specified range
    if (!isNaN(gridSize) && gridSize >= 10 && gridSize <= 100) {
        generateGrid(gridSize);
    } else {
        alert('Please enter a valid number between 10 and 100.');
    }
});
