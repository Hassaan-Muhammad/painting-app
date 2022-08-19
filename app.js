let ctx = document.getElementById("mycanvas").getContext("2d");
let colors = document.getElementById("color")
// ctx.fillstyle = "rgba(0,0,0,1)"

let isMouseDown = false;

document.querySelector("#mycanvas").addEventListener("mousedown", (event) => {
    isMouseDown = true
});

document.querySelector("#mycanvas").addEventListener("mouseup", (event) => {
    isMouseDown = false;
});

document.querySelector("#mycanvas").addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        console.log("move:", event)
        console.log("h:", event.offsetX)
        console.log("w:", event.offsetY)

        ctx.fillStyle = colors.value ;
        ctx.fillRect(event.offsetX, event.offsetY, 5, 5)
    }
});
