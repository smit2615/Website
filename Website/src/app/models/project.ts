export class Project {
    title: string;
    content: string;
    imageSrc: string;

    constructor(title: string, content: string, imageSrc: string) {
        this.title = title;
        this.content = content;
        this.imageSrc = imageSrc;
    }
}