"use strict";
exports.__esModule = true;
var Button = /** @class */ (function () {
    function Button(_likes, _selected) {
        this._likes = _likes;
        this._selected = _selected;
    }
    Object.defineProperty(Button.prototype, "likes", {
        get: function () { return this._likes; },
        set: function (likes) { this._likes = likes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "selected", {
        get: function () { return this._selected; },
        set: function (selected) { this._selected = selected; },
        enumerable: true,
        configurable: true
    });
    Button.prototype.like = function () {
        this.likes = this._selected ? --this._likes : ++this._likes;
        this.selected = !this._selected;
    };
    return Button;
}());
exports.Button = Button;
var b = new Button(1, true);
console.log(b);
b.like();
console.log(b);
