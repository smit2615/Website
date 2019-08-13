export class Project {
    title: string;
    description: string;
    iconSrc: string;
    details: string;
    imageSrc: string;

    constructor(title: string, content: string, iconSrc: string,
        details: string, imageSrc: string) {
        this.title = title;
        this.description = content;
        this.iconSrc = iconSrc;
        this.details = details;
        this.imageSrc = imageSrc;
    }
}