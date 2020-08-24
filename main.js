function drawGrid(gridNumber, gridSize){
    for (i = 0; i < gridNumber; i++) {
        var row = document.createElement("div");
        row.className = "row";

        for (j = 0; j < gridNumber; j++) {
            var cellSize = gridSize / gridNumber;
            var cell = document.createElement("div");
            
            cell.setAttribute("class", "cell inner-border");
            cell.textContent = i;
            cell.setAttribute('style', `height: ${cellSize}px; width: ${cellSize}px`);

            cell.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "yellow";
            });
            row.appendChild(cell);
        }

        document.getElementById("container").appendChild(row);
    }
}


var gridNumber = 16;
const gridSize = 960;
drawGrid(gridNumber, gridSize);
