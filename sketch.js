let mirror, phone;
let tanktop;
let shirt;
let sweatshirt;

function setup() {
	new Canvas(windowWidth, windowHeight);
	displayMode('centered');

	mirror = new Sprite(300, 350, 300, 500, 's');
	mirror.text = "mirror";

	phone = new Sprite (1260, 350, 300, 500, 's');
	phone.text = "phone";

	tanktop = new Sprite(650, 350, 150, 250, 'k');
	tanktop.text = "tanktop";
	tanktop.drag = 8;

	shirt = new Sprite(780, 350, 150, 250, 'k');
	shirt.text = "shirt";
	shirt.drag = 8;

	sweatshirt = new Sprite(920, 350, 150, 250, 'k');
	sweatshirt.text = "sweatshirt";
	sweatshirt.drag = 8;

}

function draw() {
	background('#ecf7ba');

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

}
