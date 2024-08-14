export default class Button {
	ctx; x; y; w; h; background; foreground; label; radius;
	constructor(ctx, left_x, top_y, width, height, background, foreground, label = "", radius = 0) {
		this.ctx = ctx;
		this.x = left_x; this.y = top_y; this.w = width; this.h = height;
		this.background = background;
		this.foreground = foreground;
		this.label = label;
		this.r = radius;
	}
	fill() {
		this.ctx.fillStyle = background;
		this.ctx.beginPath();
		this.ctx.moveTo(this.x + this.r, this.y);
		this.ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + this.r);
		this.ctx.lineTo(this.x, this.y + this.h - this.r)
		this.ctx.quadraticCurveTo(this.x, this.y + this.h, this.x + this.r, this.y + this.h);
		this.ctx.lineTo(this.x + this.w - this.r, this.y + this.h);
		this.ctx.quadratricCurveTo(this.x + this.w, this.y + this.h, this.x + this.w, this.y + this.h - this.r);
		this.ctx.lineTo(this.x + this.w, this.y + this.r);
		this.ctx.quadraticCurveTo(this.x + this.w, this.y, this.x + this.w - this.r, this.y);
		this.ctx.fill("evenodd");

		this.ctx.fillStyle = foreground;
		this.ctx.fillText(this.label, this.x + 0.5 * (this.w - this.ctx.measureText(this.label).width), this.y + 0.5 * this.h);
	}
	outline(style, thickness = 1) {
		this.ctx.strokeStyle = style;
		this.ctx.lineWidth = thickness;
		this.ctx.beginPath();
		this.ctx.moveTo(this.x + this.r, this.y);
		this.ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + this.r);
		this.ctx.lineTo(this.x, this.y + this.h - this.r)
		this.ctx.quadraticCurveTo(this.x, this.y + this.h, this.x + this.r, this.y + this.h);
		this.ctx.lineTo(this.x + this.w - this.r, this.y + this.h);
		this.ctx.quadratricCurveTo(this.x + this.w, this.y + this.h, this.x + this.w, this.y + this.h - this.r);
		this.ctx.lineTo(this.x + this.w, this.y + this.r);
		this.ctx.quadraticCurveTo(this.x + this.w, this.y, this.x + this.w - this.r, this.y);
		this.ctx.closePath();
		this.ctx.stroke();
	}
}
