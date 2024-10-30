let mirror, phone;
let tanktop;
let shirt;
let sweatshirt;
let mirrorcenter;

let iswearingtank = false;
let iswearingshirt = false;
let iswearingsweat = false;

function setup() {
	new Canvas(windowWidth, windowHeight);
	displayMode('centered');

	mirror = new Sprite(300, 350, 300, 500, 's');
	mirror.text = "mirror";
	mirrorcenter = createVector(300, 350);

	phone = new Sprite (1260, 350, 300, 500, 's');
	phone.text = "phone";

	tanktop = new Sprite();
	tanktop.width = 150;
	tanktop.height = 250;
	tanktop.collider = 'kinematic';
	tanktop.text = "tanktop";
	tanktop.drag = 8;
	tanktop.position = createVector(600, 350);

	shirt = new Sprite();
	shirt.width = 150;
	shirt.height = 250;
	shirt.collider = 'kinematic';
	shirt.text = "shirt";
	shirt.drag = 8;
	shirt.position = createVector(780, 350);

	sweatshirt = new Sprite();
	sweatshirt.width = 150;
	sweatshirt.height = 250;
	sweatshirt.collider = 'kinematic';
	sweatshirt.text = "sweatshirt";
	sweatshirt.drag = 8;
	sweatshirt.position = createVector(960, 350);

}

function draw() {
	background('#ecf7ba');

	if (tanktop.mouse.dragging()){
		tanktop.moveTowards(
			mouseX + tanktop.mouse.x,
			mouseY + tanktop.mouse.y,
		1);
	} 

	if (shirt.mouse.dragging()){
		shirt.moveTowards(
			mouseX + shirt.mouse.x,
			mouseY + shirt.mouse.y,
		1);
	} 

	if (sweatshirt.mouse.dragging()){
		sweatshirt.moveTowards(
			mouseX + sweatshirt.mouse.x,
			mouseY + sweatshirt.mouse.y,
		1);
	} 
//The above code is for dragging clothes and returning them to origin





//if(iswearingtank == false) {
//	tanktop.moveTowards(600, 350, .04);
//}

//if(iswearingshirt == false) {
//	shirt.moveTowards(780, 350, .04);
//}

//if(iswearingsweat == false) {
//	sweatshirt.moveTowards(960, 350, .04);
//}

}
