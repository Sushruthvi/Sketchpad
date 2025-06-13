let gridsize=10;
const containersize=1000;
const container=document.getElementById("container")
for(let i=0;i<gridsize;i++){
    const gridRow=document.createElement("div");
    gridRow.style.borderColor="black";
    gridRow.style.border="solid";
    gridRow.style.display = "flex";
    gridRow.style.width=`${containersize}px`
    gridRow.style.height=`${containersize/gridsize}px`
    container.appendChild(gridRow);
    for(let j=0;j<gridsize;j++){
        const gridBoxes=document.createElement("div")
         gridBoxes.style.borderColor="black";
         gridBoxes.style.border="solid";
         gridBoxes.style.width=`${containersize/gridsize}px`
         gridBoxes.style.height=`${containersize/gridsize}px`
         
        gridRow.appendChild(gridBoxes);
    }
}