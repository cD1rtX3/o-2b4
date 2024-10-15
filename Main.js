import TitleScreen from "./TitleScreen.js";
import ButtonRegistry from "./ButtonRegistry.js";
import ScreenEffects from "./ScreenEffects.js";

export default class Main {
	screen;
	static init(ctx) {
		ctx.textBaseline = "middle";
		this.screen = new TitleScreen(ctx);
	}
	static onKeyDown(e) {}
	static onKeyUp(e) {}
	static onClick(e) {
		for ([button, result] of ButtonRegistry) {
			if (e.offsetY >= button.y
				&& e.offsetY <= button.y + button.h
				&& e.offsetX >= button.x
				&& e.offsetX <= button.x + button.w) {

				result.call(); break;
			}
		}
	}
	static refresh() {
		screen.draw();
		for (f of ScreenEffects) {
			f.call(ctx);
		}
	}
}
