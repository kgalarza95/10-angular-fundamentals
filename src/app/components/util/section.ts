

export class Section {
    private title: string;
    private subtitle: string;
    private text: string;
    private text2: string;
    private textStrong;
    private textButton: string;
    private urlVideo: string;
    private isSolid: boolean;

    public constructor(title: string, subtitle: string, text: string, textStrong: string, text2: string, textButton: string, urlVideo: string, isSolid: boolean) {
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.text2 = text2;
        this.textStrong = textStrong;
        this.textButton = textButton;
        this.urlVideo = urlVideo;
        this.isSolid = isSolid;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getSubtitle(): string {
        return this.subtitle;
    }

    public setSubtitle(subtitle: string) {
        this.subtitle = subtitle;
    }

    public getText(): string {
        return this.text;
    }

    public setText(text: string) {
        this.text = text;
    }

    public getTextStrong(): string {
        return this.textStrong;
    }

    public setTextStrong(textStrong: string) {
        this.textStrong = textStrong;
    }

    public getTextButton(): string {
        return this.textButton;
    }

    public setTextButton(textButton: string) {
        this.textButton = textButton;
    }

    public getUrlVideo(): string {
        return this.urlVideo;
    }

    public setUrlVideo(urlVideo: string) {
        this.urlVideo = urlVideo;
    }

    public getText2(): string {
        return this.text2;
    }

    public setText2(text2: string) {
        this.text2 = text2;
    }

    public getIsSolid(): boolean {
        return this.isSolid;
    }
    public setIsSolid(isSolid: boolean) {
        this.isSolid = isSolid;
    }
}