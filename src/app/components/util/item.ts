

export class Item {
    private name: string;
    private pathImg: string;
    private alt: string;
    private subTitle: string;

    constructor(name: string, pathImg: string, alt: string, subTitle: string) {
        this.name = name;
        this.pathImg = pathImg;
        this.alt = alt;
        this.subTitle = subTitle;
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

    public getSubTitle(): string {
        return this.subTitle;
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

    public setSubTitle(subTitle: string) {
        this.subTitle = subTitle;
    }
}