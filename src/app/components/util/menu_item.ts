
export class MenuItem {
    private name: string;
    private pathImg: string;
    private alt: string;

    constructor(name: string, pathImg: string, alt: string) {
        this.name = name;
        this.pathImg = pathImg;
        this.alt = alt;
    }


    public getName(): string {
        return this.name;
    }

    public getPathImg(): string {
        return this.pathImg;
    }

    public getAlt(): string {
        return this.alt;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setPathImg(pathImg: string) {
        this.pathImg = pathImg;
    }

    public setAlt(alt: string) {
        this.alt = alt;
    }


}