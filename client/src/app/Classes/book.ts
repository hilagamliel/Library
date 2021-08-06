export class Book {
    id:string;
    title:string;
    author:string;
    summary:string;
    ageCategory:number;
    pageCount:number;
    constructor(id?:string,title?:string,author?:string,
        summary?:string,ageCategory?:number,pageCount?:number){
            this.id=id;
            this.title=title;
            this.author=author;
            this.summary=summary;
            this.ageCategory=ageCategory;
            this.pageCount=pageCount;
    }
}
