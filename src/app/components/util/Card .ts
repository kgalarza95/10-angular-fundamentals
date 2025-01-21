export class Card {
    constructor(
        private _icons: string[],
        private _title: string,
        private _text: string,
        private _link: string
    ) { }

    get icons(): string[] {
        return this._icons;
    }

    set icons(value: string[]) {
        this._icons = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get link(): string {
        return this._link;
    }

    set link(value: string) {
        this._link = value;
    }
}
