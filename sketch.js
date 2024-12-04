let mirror, phone;
let tanktop;
let shirt;
let sweatshirt;
let mirrorcenter;
let notification;
let blockend;

let iswearingtank = false;
let iswearingshirt = false;
let iswearingsweat = false;

let fwip, fwoop, rustle, streetbg, honk, honk2, beep, beep2;
let stage = 0;

let player, floor, bg, mustang;

let carR, carL;





function preload() {
	rustle = loadSound("assets/fabric1.mp3");
	fwoop = loadSound("assets/fabric2.mp3");
	fwip = loadSound("assets/fabric3.mp3");
	streetbg = loadSound("assets/busystreet.mp3");
	honk = loadSound("assets/honk.mp3");
	honk2 = loadSound("assets/carhonk.mp3");
	beep = loadSound("assets/carbeep.mp3");
	beep2 = loadSound("assets/beepbeep.mp3");
}

function setup() {
	new Canvas(windowWidth, windowHeight);
	displayMode('centered');

	world.gravity.y = 7;

	bg = new Sprite();
	bg.width = 4000;
	bg.height = 1000;
	bg.image = "assets/newbg.png"
	bg.image.scale = 1.2;
	bg.collider = "none";
	bg.x = 1200;
	bg.y = 300;

	carR = new Sprite();
	carR.width = 200;
	carR.height = 85;
	carR.collider = "none";
	carR.x = 2000
	carR.y = 550;

	carL = new Sprite();
	carL.width = 200
	carL.height = 85;
	carL.collider = 'none';
	carL.x = -300;
	carL.y = 550;

	mustang = new Sprite();
	mustang.width = 200;
	mustang.height = 95;
	mustang.collider = 'none';
	mustang.x = -200;
	mustang.y = 550;

	


	mirror = new Sprite(300, 350, 300, 500, 's');
	mirrorcenter = createVector(300, 350);
	mirror.image = "assets/smallmirror.png";
	//mirror.image.scale = .5;

	phone = new Sprite(1270, 350, 300, 500, 'n');
	phone.image = "assets/smallphone.png";

	tanktop = new Sprite();
	tanktop.width = 150;
	tanktop.height = 250;
	tanktop.collider = 'kinematic';
	tanktop.drag = 8;
	tanktop.position = createVector(560, 350);
	tanktop.image = "assets/smalltank.png";
	//tanktop.image.scale = .5;

	shirt = new Sprite();
	shirt.width = 150;
	shirt.height = 250;
	shirt.collider = 'kinematic';
	shirt.drag = 8;
	shirt.position = createVector(740, 350);
	shirt.image = "assets/smallshirt.png";
	//shirt.image.scale = .5;

	sweatshirt = new Sprite();
	sweatshirt.width = 150;
	sweatshirt.height = 250;
	sweatshirt.collider = 'kinematic';
	sweatshirt.drag = 8;
	sweatshirt.position = createVector(960, 350);
	sweatshirt.image = "assets/smallsweat.png";
	//sweatshirt.image.scale = .5;


	player = new Sprite();
	player.collider = 'dynamic';
	player.y = 575;
	//player.addAni('walk', 'assets/tankwalknew.png', 7);

	floor = new Sprite();
	floor.width = 6000;
	floor.height = 200;
	floor.collider = 'static';
	floor.x = 500;
	floor.y = 700;

	blockend = new Sprite();
	blockend.width = 300;
	blockend.height = 500;
	blockend.collider = "kinematic";
	blockend.x = 2630;
	blockend.y = 350;


}

function draw() {

	switch (stage) {
		case 0: //intro

			background('#a3f7b4');

			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			player.visible = false;
			floor.visible = false;
			blockend.visible = false;
			bg.visible = false;
			

			text("Walk Yo Dawg", 100, 100);
			textSize(75);

			if (mouse.presses()) {
				stage = 1;
			}

			break;





		case 1: //clothes

			background('#ecf7ba');
			text("1", 100, 100);

			mirror.visible = true;
			phone.visible = true;
			tanktop.visible = true;
			shirt.visible = true;
			sweatshirt.visible = true;
			floor.visible = false;
			player.visible = false;
			blockend.visible = false;
			bg.visible = false;
			


			//below is th code for dragging clothes
			if (tanktop.mouse.dragging()) {
				tanktop.moveTowards(
					mouseX + tanktop.mouse.x,
					mouseY + tanktop.mouse.y,
					1);
			} else {
				tanktop.moveTowards(560, 350, .04);
				iswearingtank = false;
			}

			if (shirt.mouse.dragging()) {
				shirt.moveTowards(
					mouseX + shirt.mouse.x,
					mouseY + shirt.mouse.y,
					1);
			} else {
				shirt.moveTowards(740, 350, .04);
				iswearingshirt = false;
			}

			if (sweatshirt.mouse.dragging()) {
				sweatshirt.moveTowards(
					mouseX + sweatshirt.mouse.x,
					mouseY + sweatshirt.mouse.y,
					1);
			} else {
				sweatshirt.moveTowards(960, 350, .04);
				iswearingsweat = false;
			}


			//below is the code for snapping to mirror
			if (iswearingtank == false && dist(tanktop.x, tanktop.y, mirrorcenter.x, mirrorcenter.y) < 50) {
				tanktop.position = mirrorcenter;
				iswearingtank = true;
				//fwip.play();
			}
				if (mouse.released() && iswearingtank == true){
					fwip.play();
				}

			if (iswearingshirt == false && dist(shirt.x, shirt.y, mirrorcenter.x, mirrorcenter.y) < 50) {
				shirt.position = mirrorcenter;
				iswearingshirt = true;
				//rustle.play();
			} 
				if (mouse.released() && iswearingshirt == true){
					rustle.play();
				}

			if (iswearingsweat == false && dist(sweatshirt.x, sweatshirt.y, mirrorcenter.x, mirrorcenter.y) < 50) {
				sweatshirt.position = mirrorcenter;
				iswearingsweat = true;
				//fwoop.play();
			} 
				if (mouse.released() && iswearingsweat == true){
					fwoop.play();
				}


			//below is the code where we switch to next scene
			if (kb.presses(' ') && iswearingtank === true) {
				stage = 2;
			}

			if (kb.presses(' ') && iswearingshirt === true) {
				stage = 3;
			}

			if (kb.presses(' ') && iswearingsweat === true) {
				stage = 4;
			}
			break;







		case 2: // walk + tank

			background('#cfa6f5');

			text("2", 100, 100);

			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			floor.visible = true;
			player.visible = true;
			blockend.visible = false;
			carR.visible = true;
			carL.visible = true;
			bg.visible = true;
			

			if (floor.visible == true){
				streetbg.play();
			}

			carR.direction = 'left';
			carR.speed = 6;
			if (carR.x < -100) {
				carR.x = 1800;
			}

			if (carR.overlaps(player)) beep.play();

			carL.direction = 'right';
			carL.speed = 6.3;
			if (carL.x > 2300) {
				carL.x = -400;
			}

			if (kb.pressing('left')) {
				blockend.vel.x = 3;
				bg.vel.x = 2;
				//player.changeAni('walk');
			} else if (kb.pressing('right')) {
				blockend.vel.x = -3;
				bg.vel.x = -2;
				//player.changeAni('walk');
			} else {
				blockend.vel.x = 0;
				bg.vel.x = 0;
				//player.changeAni('walk');
			}

			if (player.collides(blockend)) {
				stage = 5;
			}

			if (bg.x > 1480){
				bg.vel.x = 0;
				blockend.vel.x = 0;
			}


			break;






		case 3: //walk + shirt

			background('#98e2eb');

			text("3", 100, 100);

			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			floor.visible = true;
			player.visible = true;
			blockend.visible = false;
			carR.visible = true;
			carL.visible = true;
			bg.visible = true;
			

			if (floor.visible == true){
				streetbg.play();
			}

			carR.direction = 'left';
			carR.speed = 6;
			if (carR.x < -100) {
				carR.x = 2000;
			}

			carL.direction = 'right';
			carL.speed = 6.3;
			if (carL.x > 2300) {
				carL.x = -400;
			}
			if (carL.overlaps(player)) honk.play();

			if (kb.pressing('left')) {
				blockend.vel.x = 3;
				bg.vel.x = 2;
			} else if (kb.pressing('right')) {
				blockend.vel.x = -3;
				bg.vel.x = -2;
			} else {
				blockend.vel.x = 0;
				bg.vel.x = 0;
			}

			if (player.collides(blockend)) {
				stage = 9;
			}


			break;







		case 4://walk + sweat
			sweatshirt.x = 960;
			background('#f5abce');

			text("4", 100, 100);

			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			floor.visible = true;
			player.visible = true;
			blockend.visible = false;
			carR.visible = true;
			carL.visible = true;
			bg.visible = true;
			

			if (floor.visible == true){
				streetbg.play();
			}

			carR.direction = 'left';
			carR.speed = 6;
			if (carR.x < -100) {
				carR.x = 2000;
			}

			if (carR.overlaps(player)) beep.play();

			carL.direction = 'right';
			carL.speed = 6.3;
			if (carL.x > 2300) {
				carL.x = -400;
			}

			if (kb.pressing('left')) {
				blockend.vel.x = 3;
				bg.vel.x = 2;
			} else if (kb.pressing('right')) {
				blockend.vel.x = -3;
				bg.vel.x = -2;
			} else {
				blockend.vel.x = 0;
				bg.vel.x = 0;
			}


			if (player.collides(blockend)) {
				stage = 7;
			}



			break;

		case 5://clothes no tank

			background('#ecf7ba');
			text("5", 100, 100);

			mirror.visible = true;
			phone.visible = true;
			tanktop.visible = false;
			shirt.visible = true;
			sweatshirt.visible = true;
			floor.visible = false;
			player.visible = false;
			blockend.visible = false;
			iswearingtank = false;
			carR.visible = false;
			carL.visible = false;
			bg.visible = false;
			
		

			blockend.x = 2630;
			bg.x = 1200;

			//clothes move
			if (shirt.mouse.dragging()) {
				shirt.moveTowards(
					mouseX + shirt.mouse.x,
					mouseY + shirt.mouse.y,
					1);
			} else {
				shirt.moveTowards(740, 350, .04);
				iswearingshirt = false;
			}

			if (sweatshirt.mouse.dragging()) {
				sweatshirt.moveTowards(
					mouseX + sweatshirt.mouse.x,
					mouseY + sweatshirt.mouse.y,
					1);
			} else {
				sweatshirt.moveTowards(960, 350, .04);
				iswearingsweat = false;
			}

			//clothes 
			if (iswearingshirt == false && dist(shirt.x, shirt.y, mirrorcenter.x, mirrorcenter.y) < 50) {
				shirt.position = mirrorcenter;
				iswearingshirt = true;
			} 
			if (mouse.released() && iswearingshirt == true){
				rustle.play();
			}
			if (iswearingsweat == false && dist(sweatshirt.x, sweatshirt.y, mirrorcenter.x, mirrorcenter.y) < 50) {
				sweatshirt.position = mirrorcenter;
				iswearingsweat = true;
			} 
				if (mouse.released() && iswearingsweat == true){
					fwoop.play();
				}
			//stage change
			if (kb.presses(' ') && iswearingshirt === true) {
				stage = 6;
			}

			if (kb.presses(' ') && iswearingsweat === true) {
				stage = 4;
			}

			break;


		case 6://shirt after tank walk
			background('#98e2eb');

			text("6", 100, 100);

			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			floor.visible = true;
			player.visible = true;
			blockend.visible = false;
			carR.visible = true;
			carL.visible = true;
			bg.visible = true;
			

			if (floor.visible == true){
				streetbg.play();
			}

			carR.direction = 'left';
			carR.speed = 6;
			if (carR.x < -100) {
				carR.x = 2000;
			}

			carL.direction = 'right';
			carL.speed = 6.3;
			if (carL.x > 2300) {
				carL.x = -400;
			}

			if (carL.overlaps(player)) honk.play();


			if (kb.pressing('left')) {
				blockend.vel.x = 3;
				bg.vel.x = 2;
			} else if (kb.pressing('right')) {
				blockend.vel.x = -3;
				bg.vel.x = -2;
			} else {
				blockend.vel.x = 0;
				bg.vel.x = 0;
			}

			if (player.collides(blockend)) {
				stage = 7;
			}


			break;



		case 7://no tank no shirt
			background('#ecf7ba');
			text("7", 100, 100);

			mirror.visible = true;
			phone.visible = true;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = true;
			floor.visible = false;
			player.visible = false;
			blockend.visible = false;
			carR.visible = false;
			carL.visible = false;
			bg.visible = false;
			

			blockend.x = 2630;
			bg.x = 1200;

			if (sweatshirt.mouse.dragging()) {
				sweatshirt.moveTowards(
					mouseX + sweatshirt.mouse.x,
					mouseY + sweatshirt.mouse.y,
					1);
			} else {
				sweatshirt.moveTowards(960, 350, .04);
				iswearingsweat = false;
			}
			if (iswearingsweat == false && dist(sweatshirt.x, sweatshirt.y, mirrorcenter.x, mirrorcenter.y) < 50) {
				sweatshirt.position = mirrorcenter;
				iswearingsweat = true;
			}
				if (mouse.released() && iswearingsweat == true){
					fwoop.play();
				}

			if (kb.presses(' ') && iswearingsweat === true) {
				stage = 8;
			}
			break;




		//mustang man walk
		case 8:
			background('#f5abce');
			text("mustang", 100, 100);

			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			floor.visible = true;
			player.visible = true;
			blockend.visible = false;
			carR.visible = true;
			carL.visible = true;
			bg.visible = true;
			mustang.visible = true;
			

			if (floor.visible == true){
				streetbg.play();
			}

			carR.direction = 'left';
			carR.speed = 6;
			if (carR.x < -100) {
				carR.x = 2000;
			}

			carL.direction = 'right';
			carL.speed = 6.3;
			if (carL.x > 2300) {
				carL.x = -400;
			}




			if (kb.pressing('left')) {
				blockend.vel.x = 3;
				bg.vel.x = 2;
			} else if (kb.pressing('right')) {
				blockend.vel.x = -3;
				bg.vel.x = -2;
				mustang.vel.x = 2;
			} else {
				blockend.vel.x = 0;
				bg.vel.x = 0;
				mustang.vel.x = 0;
			}

			if (player.overlaps(mustang)) {
				stage = 11;
			}

			break;


		//no shirt, tank sweat
		case 9:
			background('#ecf7ba');
			text("9", 100, 100);

			mirror.visible = true;
			phone.visible = true;
			tanktop.visible = true;
			shirt.visible = false;
			sweatshirt.visible = true;
			floor.visible = false;
			player.visible = false;
			blockend.visible = false;
			carR.visible = false;
			carL.visible = false;
			bg.visible = false;
			

			blockend.x = 2630;
			bg.x = 1200;
			//dragging
			if (tanktop.mouse.dragging()) {
				tanktop.moveTowards(
					mouseX + tanktop.mouse.x,
					mouseY + tanktop.mouse.y,
					1);
			} else {
				tanktop.moveTowards(560, 350, .04);
				iswearingtank = false;
			}
			if (sweatshirt.mouse.dragging()) {
				sweatshirt.moveTowards(
					mouseX + sweatshirt.mouse.x,
					mouseY + sweatshirt.mouse.y,
					1);
			} else {
				sweatshirt.moveTowards(960, 350, .04);
				iswearingsweat = false;
			}
					///dragging & snapping
			if (iswearingtank == false && dist(tanktop.x, tanktop.y, mirrorcenter.x, mirrorcenter.y) < 50) {
				tanktop.position = mirrorcenter;
				iswearingtank = true;
			}
				if (mouse.released() && iswearingtank == true){
					fwip.play();
				}
			if (iswearingsweat == false && dist(sweatshirt.x, sweatshirt.y, mirrorcenter.x, mirrorcenter.y) < 50) {
				sweatshirt.position = mirrorcenter;
				iswearingsweat = true;
			} 
				if (mouse.released() && iswearingsweat == true){
					fwoop.play();
				}
			//wearing to next stage
			if (kb.presses(' ') && iswearingtank === true) {
				stage = 10;
			}
			if (kb.presses(' ') && iswearingsweat === true) {
				stage = 4;
			}


			break;

		///walk with tank (tank after shirt)
		case 10:
			background('#cfa6f5');

			text("10", 100, 100);

			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			floor.visible = true;
			player.visible = true;
			blockend.visible = false;
			carR.visible = true;
			carL.visible = true;
			bg.visible = true;
			

			if (floor.visible == true){
				streetbg.play();
			}

			carR.direction = 'left';
			carR.speed = 6;
			if (carR.x < -100) {
				carR.x = 2000;
			}

			carL.direction = 'right';
			carL.speed = 6.3;
			if (carL.x > 2300) {
				carL.x = -400;
			}

			if (kb.pressing('left')) {
				blockend.vel.x = 3;
				bg.vel.x = 2;
			} else if (kb.pressing('right')) {
				blockend.vel.x = -3;
				bg.vel.x = -2;
			} else {
				blockend.vel.x = 0;
				bg.vel.x = 0;
			}

			if (player.collides(blockend)) {
				stage = 7;
			}



			break;


		//ending LOLLLLLLLLLLLLl
		case 11:
			background('#cfa6f5');

			text("11/end", 100, 100);
			mirror.visible = false;
			phone.visible = false;
			tanktop.visible = false;
			shirt.visible = false;
			sweatshirt.visible = false;
			floor.visible = false;
			player.visible = false;
			blockend.visible = false;
			carR.visible = false;
			carL.visible = false;
			bg.visible = false;
			mustang.visible = false;
			

			break;
	}



}
