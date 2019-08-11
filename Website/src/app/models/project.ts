export class Project {
    title: string;
    content: string;
    imageSrc: string;
    additionalContent: string;

    constructor(title: string, content: string, imageSrc: string, additionalContent: string) {
        this.title = title;
        this.content = content;
        this.imageSrc = imageSrc;
        this.additionalContent = additionalContent;
    }
}