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
	
	canvas.on('mouse:down', function(options) {
		console.log(options.e.clientX, options.e.clientY);
	});
	
	
	
	canvas.on('mouse:down', function(options) {
		if (options.target) {
			console.log('an object was clicked! ', options.target.type);
		}
	});

}