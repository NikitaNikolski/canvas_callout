window.onload = function() {
    initializeCanvasRectangle();
}

function initializeCanvasRectangle() {
    var canvas = new fabric.Canvas("canvas_area");
    var green = new fabric.Rect({
        top: 100, left: 100, width: 60, height: 60, fill: 'green'
    });

    fabric.Object.prototype.transparentCorners = false;

    canvas.add(green);
}