import Button from "./Button.js"
import ButtonRegistry from "./ButtonRegistry.js";

export default class TitleScreen {
	ctx; buttons; state;
	constructor(ctx) {
		this.ctx = ctx;
		this.buttons = [
			ButtonRegistry.register(
				new Button(ctx, 490, 360, 300, 150, "#e0dde0", "#010101", "button0", 25),
				() => {
					console.log("penis");
				}
			),
			ButtonRegistry.register(
				new Button(ctx, 490, 535, 300, 150, "#e0dde0", "#010101", "button1", 25),
				() => {
					console.log("penis");
				}
			)
		];
		this.state = "mainmenu";
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
