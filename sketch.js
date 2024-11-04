let mirror, phone;
let tanktop;
let shirt;
let sweatshirt;
let mirrorcenter;

let iswearingtank = false;
let iswearingshirt = false;
let iswearingsweat = false;

let gui;
let stage = 0;

let player, floor;


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

	gui = createGui();

	player = new Sprite();
	player.collider = 'kinematic';

	floor = new Sprite();
	floor.width = 4000;
	floor.height = 200;
	floor.collider = 'static';
	floor.x = 500;
	floor.y = 630;
}

function draw() {
	
	switch (stage){
		case 0: //intro

		background('#a3f7b4');
		
		mirror.visible = false;
		phone.visible = false;
		tanktop.visible = false;
		shirt.visible = false;
		sweatshirt.visible = false;
		player.visible = false;
		floor.visible = false;

		text("Walk Yo Dawg", 100, 100);
		textSize(75);

		if (mouse.presses()){
			stage = 1;
		}

			break;





		case 1: //clothes

		background('#ecf7ba');

		mirror.visible = true;
		phone.visible = true;
		tanktop.visible = true;
		shirt.visible = true;
		sweatshirt.visible = true;
		floor.visible = false;
		player.visible = false;

	if (tanktop.mouse.dragging()){
		tanktop.moveTowards(
			mouseX + tanktop.mouse.x,
			mouseY + tanktop.mouse.y,
		1);
	} else {
		tanktop.moveTowards(600, 350, .04);
	}

	if (shirt.mouse.dragging()){
		shirt.moveTowards(
			mouseX + shirt.mouse.x,
			mouseY + shirt.mouse.y,
		1);
	} else {
		shirt.moveTowards(780, 350, .04);
	}

	if (sweatshirt.mouse.dragging()){
		sweatshirt.moveTowards(
			mouseX + sweatshirt.mouse.x,
			mouseY + sweatshirt.mouse.y,
		1);
	} else {
		sweatshirt.moveTowards(960, 350, .04);
	}

	if (dist(tanktop.x, tanktop.y, mirrorcenter.x, mirrorcenter.y) < 50){
		tanktop.position = mirrorcenter;
		iswearingtank = true;
	} else {
		iswearingtank = false;
	}
	
	if (dist(shirt.x, shirt.y, mirrorcenter.x, mirrorcenter.y) < 50){
		shirt.position = mirrorcenter;
		iswearingshirt = true;
	} else {
		iswearingshirt = false;
	}
	
	if (dist(sweatshirt.x, sweatshirt.y, mirrorcenter.x, mirrorcenter.y) < 50){
		sweatshirt.position = mirrorcenter;
		iswearingsweat = true;
	} else{
		iswearingsweat = false;
	}


		if (kb.presses(' ')){
			stage = 2;
		}

			break;







		case 2: // walk

			background('#cfa6f5');

	

			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			floor.visible = true;
			player.visible = true;

			camera.x = player.x;
			break;
	}
	
//if (stage === 2) camera.zoomTo(1);

}
