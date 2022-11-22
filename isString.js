
// IE doesn't support Object.prototype.isString() so you need to declare this
if(!Object.prototype.isString) {
	Object.prototype.isString = function() {
		return typeof this === 'string' || this instanceof String;
	}
}

