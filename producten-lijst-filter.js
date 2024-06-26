let allColors = document.getElementsByClassName("color");
let filters = document.getElementsByClassName("filter");
let noFilter = true;

let redFilter = document.getElementById("checkbox-red");
let redChecked = false;
redFilter.onchange = function () {
    redChecked = redFilter.checked;
    updateColors();
}

let greenFilter = document.getElementById("checkbox-green");
let greenChecked = false;
greenFilter.onchange = function () {
    greenChecked = greenFilter.checked;
    updateColors();
}

let blueFilter = document.getElementById("checkbox-blue");
let blueChecked = false;
blueFilter.onchange = function () {
    blueChecked = blueFilter.checked;
    updateColors();
}

function noFilterCheck() {
    noFilter = !(redChecked || greenChecked || blueChecked);
}

function updateColors() {
    noFilterCheck();

    for (let i = 0; i < allColors.length; i++) {
        let color = allColors[i].dataset.category;
        allColors[i].style.display = "none";

        if (noFilter) {
            allColors[i].style.display = "block";
        } else {
            if (redChecked && color === "red") {
                allColors[i].style.display = "block";
            }
            if (greenChecked && color === "green") {
                allColors[i].style.display = "block";
            }
            if (blueChecked && color === "blue") {
                allColors[i].style.display = "block";
            }
        }
    }
}

