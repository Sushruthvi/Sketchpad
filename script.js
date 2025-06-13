const gridsizeInput = document.getElementById("gridsize");
const containersize = 610;
const container = document.getElementById("container");



function create(gridsize) {
    container.innerHTML = "";
    for (let i = 0; i < gridsize; i++) {
        const gridRow = document.createElement("div");
        gridRow.style.display = "flex";
        gridRow.style.width = `${containersize}px`;
        gridRow.style.height = `${containersize / gridsize}px`;
        gridRow.style.borderRight = "solid black";
        gridRow.style.borderLeft = "solid black";
        if (i == 0) gridRow.style.borderTop = "solid black";
        if (i == gridsize - 1) gridRow.style.borderBottom = "solid black";

        container.appendChild(gridRow);

        for (let j = 0; j < gridsize; j++) {
            const gridBox = document.createElement("div");
            gridBox.style.width = `${containersize / gridsize}px`;
            gridBox.style.height = `${containersize / gridsize}px`;
            gridBox.style.boxSizing = "border-box";
            gridBox.style.border = "1px solid transparent"; // optional border
            gridBox.addEventListener("mousedown", () => {
                gridBox.style.backgroundColor = "black";
            });
            gridBox.addEventListener("mouseover", () => {
        
                    gridBox.style.backgroundColor = "black";
                
            });

            gridRow.appendChild(gridBox);
        }
    }
}

create(64);

gridsizeInput.addEventListener("input", () => {
    const size = parseInt(gridsizeInput.value);
    if (!isNaN(size) && size > 0) {
        create(size);
    }
});
