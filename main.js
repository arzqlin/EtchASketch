function drawGrid(gridNumber, gridSize){
    for (i = 0; i < gridNumber; i++) {
        var row = document.createElement("div");
        row.className = "row";

        for (j = 0; j < gridNumber; j++) {
            var cellSize = gridSize / gridNumber;
            var cell = document.createElement("div");
            
            cell.setAttribute("class", "cell inner-border");
            cell.setAttribute('style', `height: ${cellSize}px; width: ${cellSize}px; opacity : 0`);

            cell.addEventListener("mouseover", (e) => {
                var randomColor = Math.floor(Math.random() * 16777215).toString(16);

                e.target.style.backgroundColor = "#" + randomColor;
                e.target.style.opacity = e.target.computedStyleMap().get("opacity").value + 0.1;
            });
            row.appendChild(cell);
        }

        document.getElementById("container").appendChild(row);
    }
}


var gridNumber = 16;
const gridSize = 960;
drawGrid(gridNumber, gridSize);
document.getElementById("ChangeResolutionBtn").addEventListener("click",()=> {
    gridNumber = prompt("please input desired resolution");
    document.getElementById("container").innerHTML = "";
    drawGrid(gridNumber, gridSize);
})

document.getElementById("ResetBtn").addEventListener("click", () => {
    document.getElementById("container").innerHTML = "";
    drawGrid(gridNumber, gridSize);
})