export default class TitleScreen {
	ctx; buttons;
	constructor(ctx) {
		this.ctx = ctx;
		this.buttons = new Array();
	}
	draw() {
		this.drawBackground();
		this.buttons.forEach((button) => button.fill());
	}
	drawBackground() {
		// placeholder background
		this.ctx.fillStyle = "#0c0c38";
		this.ctx.fillRect(0, 0, 1280, 720);
	}
}
