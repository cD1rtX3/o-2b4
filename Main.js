import TitleScreen from "./TitleScreen.js";
import ButtonRegistry from "./ButtonRegistry.js";

export default class Main {
	static init(ctx) {
		ctx.textBaseline = "middle";
	}
	static onKeyDown(e) {}
	static onKeyUp(e) {}
	static onClick(e) {
		for ([button, result] of ButtonRegistry) {
			if (e.offsetX >= button.x
				&& e.offsetX <= button.x + button.w
				&& e.offsetY >= button.y
				&& e.offsetY <= button.y + button.h) {

				result.call(); break;
			}
		}
	}
	static refresh() {}
}
