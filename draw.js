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
 	 * Canvas context object. Private, readonly field.
 	 */
	#ctx;
	/**
	 * Canvas constructor. Takes an element ID name as a string. Assumes the correct typing and number of arguments.
 	 */
	constructor(name) {
		this.#ctx = document.getElementById(name).getContext("2d");
	}
	/**
 	 * Rectangle function. Takes a list of arrays in the form [style, x, y, width, height] and returns void. Assumes the correct typing of arguments.
	 */
	r(...argv) {
		for (avi of argv) {
			this.#ctx.fillStyle = avi[0];
			this.#ctx.fillRect(avi[1], avi[2], avi[3], avi[4]);
		}
	}
}
