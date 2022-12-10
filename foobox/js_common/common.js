﻿//common script
function RGBA(r, g, b, a) {
	return ((a << 24) | (r << 16) | (g << 8) | (b));
}
function RGB(r, g, b) {
	return (0xff000000 | (r << 16) | (g << 8) | (b))
}
// Textformat
var DT_LEFT = 0x00000000;
var DT_CENTER = 0x00000001;
var DT_RIGHT = 0x00000002;
var DT_TOP = 0x00000000;
var DT_VCENTER = 0x00000004;
var DT_BOTTOM = 0x00000008;
var DT_SINGLELINE = 0x00000020;
var DT_NOCLIP = 0x00000100;
var DT_CALCRECT = 0x00000400;
var DT_END_ELLIPSIS = 0x00008000;
var DT_NOPREFIX = 0x00000800;

// Flags, used by Menu ----------------------
var MF_SEPARATOR = 0x00000800;
var MF_ENABLED = 0x00000000;
var MF_GRAYED = 0x00000001;
var MF_DISABLED = 0x00000002;
var MF_UNCHECKED = 0x00000000;
var MF_CHECKED = 0x00000008;
var MF_STRING = 0x00000000;
var MF_POPUP = 0x00000010;
var MF_RIGHTJUSTIFY = 0x00004000;
// Used in utils.GetSysColour()
COLOR_WINDOW = 5;
COLOR_HIGHLIGHT = 13;
COLOR_3DFACE = 15;//3dface
COLOR_BTNTEXT = 18;
// Used in window.GetColorDUI()
ColorTypeDUI = {
	text: 0,
	background: 1,
	highlight: 2,
	selection: 3
};
// Used in window.GetFontDUI()
FontTypeDUI = {
	defaults: 0,
	tabs: 1,
	lists: 2,
	playlists: 3,
	statusbar: 4,
	console: 5
};
// Used in utils.GetAlbumArt()
var AlbumArtId = {
	front: 0,
	back: 1,
	disc: 2,
	icon: 3,
	artist: 4,

	GetName: function(value) {
		for (var i in this) {
			if (this[i] == value) return i;
		}
		return null;
	}
};
//colour blending
function getAlpha(color) {
	return ((color >> 24) & 0xff);
};

function getRed(color) {
	return ((color >> 16) & 0xff);
};

function getGreen(color) {
	return ((color >> 8) & 0xff);
};

function getBlue(color) {
	return (color & 0xff);
};

function negative(colour) {
	var R = getRed(colour);
	var G = getGreen(colour);	
	var B = getBlue(colour);
	return RGB(Math.abs(R-255), Math.abs(G-255), Math.abs(B-255));
};

function toRGB(d){ // convert back to RGB values
	var d = d - 0xff000000;
	var r = d >> 16;
	var g = d >> 8 & 0xFF;
	var b = d & 0xFF;
	return [r,g,b];
};

function blendColors(c1, c2, factor) {
	// When factor is 0, result is 100% color1, when factor is 1, result is 100% color2.
	var c1 = toRGB(c1);
	var c2 = toRGB(c2);
	var r = Math.round(c1[0] + factor * (c2[0] - c1[0]));
	var g = Math.round(c1[1] + factor * (c2[1] - c1[1]));
	var b = Math.round(c1[2] + factor * (c2[2] - c1[2]));
	return (0xff000000 | (r << 16) | (g << 8) | (b));
};

function isDarkMode(background) {
	r = getRed(background);
	g = getGreen(background);
	b = getBlue(background);
	if ((r + g + b) < 383) return true;
}

function z(value) {
	return Math.round(value * zdpi);
};