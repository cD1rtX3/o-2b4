export default class TitleScreen {
	ctx;
	constructor(ctx) {
		this.ctx = ctx;
	}
	draw() {
		this.drawBackground();
		this.drawButtons();
	}
	drawBackground() {
		// placeholder background
		this.ctx.fillStyle = "#0c0c38";
		this.ctx.fillRect(0, 0, 1280, 720);
	}
	drawButtons() {
		// placeholder buttons
		this.ctx.fillStyle = "#ffd700";
		this.ctx.fillRect(590, 350, 100, 20);
		this.ctx.fillRect(590, 380, 100, 20);
	}
}
