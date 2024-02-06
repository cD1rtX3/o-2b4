/*
	O-2b4: rhythm game
	Copyright (C) 2023  Coarse Rosinflower

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

'use strict';

/**
 * Canvas class.
 */
class Canvas {
	/** 
 	 * Canvas context object. Field should not be written to. Used to help for overriding. Inside field `fillstyle` is overwritten with each function.
	 */
	ctx;
	/**
	 * Canvas constructor. Takes an element ID name as a string. Assumes the correct typing and number of arguments.
 	 */
	constructor(name) {
		// Initialise the `ctx` variable.
		this.ctx = document.getElementById(name).getContext("2d");
		// Default settings.
		this.ctx.textBaseline = "top";
		this.ctx.fontKerning = "normal";
	}
	/**
 	 * Rectangle function. Takes a list of arrays in the form [style, x, y, width, height] and returns void. Assumes the correct typing of arguments.
	 */
	r(...argv) {
		for (let avi of argv) {
			this.ctx.fillStyle = avi[0];
			this.ctx.fillRect(avi[1], avi[2], avi[3], avi[4]);
		}
	}
	/**
	 * Circle function. Takes a list of arrays in the form [style, x, y, radius] and returns void. Assumes the correct typing of arguments.
	 */
	c(...argv) {
		for (let avi of argv) {
			this.ctx.fillStyle = avi[0];
			this.ctx.beginPath();
			this.ctx.arc(avi[1], avi[2], avi[3], 0, 6.283185307179586);
			this.ctx.closePath();
			this.ctx.fill();
		}
	}
	/**
	 * Polygon function. Takes a list of arrays in the form [style, [x1, y1], [x2, y2]...] and returns void. Assumes the correct typing of arguments.
	 */
	p(...argv) {
		for (let avi of argv) {
			this.ctx.fillStyle = avi[0];
			this.ctx.beginPath();
			this.ctx.moveTo(avi[1][0], avi[1][1]);
			for (let j = 2; j < avi.length; j++) {
				this.ctx.lineTo(avi[j][0], avi[j][1]);
			}
			this.ctx.closePath();
			this.ctx.fill();
		}
	}
	/**
	 * Text function. Takes the font then a list of arrays in the form [style, text, x, y] and returns void. Assumes the correct typing of arguments.
	 */
	t(font, ...argv) {
		this.ctx.font = font;
		for (let avi of argv) {
			this.ctx.fillStyle = avi[0];
			this.ctx.fontSize = avi[4];
			this.ctx.fillText(avi[1], avi[2], avi[3]);
		}
	}
}
