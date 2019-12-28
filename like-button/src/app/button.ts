export class Button {
    constructor(private _likes?: number, private _selected?: boolean) { }
    get likes(): number { return this._likes; }
    set likes(likes: number) { this._likes = likes; }
    get selected(): boolean { return this._selected; }
    set selected(selected: boolean) { this._selected = selected; }
    like() {
        this.likes = this._selected ? --this._likes : ++this._likes;
        this.selected = !this._selected;
    }
}

let b = new Button(1, true);
console.log(b);
b.like();
console.log(b);
