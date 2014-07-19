'use strict';
var mapcodeRegex = require('mapcode-regex');

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.match(mapcodeRegex()) || [];
};
