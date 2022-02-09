img = "";
Status = "";
objects = [];

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    //objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";

}

function modelLoaded() {
    console.log("model is loaded");
    Status = true;
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function preload() {
    img = loadImage("just_image.jpeg");
    img.hide();
}

function draw() {
  image(img, 0, 0, 640, 420);

    if (Status != "") {
        fill("#FF0000");
        text("");
    }
}
