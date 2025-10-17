var mynode = document.querySelector("#changingcolor");

function turnColor(color) {

    if (color == 1) {
        mynode.children[0].style.color = "red";
    } else if (color == 2) {
        mynode.children[0].style.color = "lightblue";
    } else if (color == 3) {
        mynode.children[0].style.color = "limegreen";
    } else {
        mynode.children[0].style.color = "black";
    }

}