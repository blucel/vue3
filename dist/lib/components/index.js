'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base');
var template = require('./template');



Object.keys(base).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return base[k]; }
	});
});
Object.keys(template).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return template[k]; }
	});
});
