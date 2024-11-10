type GMD =  'Monograph' | 'Serial' | 'Palmphlet' | 'Dictionary';

export class Book {
    constructor(
        public id: string ,
        public title: string,
        public author: string,
        public subject: string[],
        public imprint: string,
        public collation: string,
        public G_M_D: GMD,
        public book_cover: string,
        public material_number: string,
        public availability: boolean,
        public bibilography: string,
        public Keywords: string[],
        public other_Title?: string,
        public co_author?: string,
        public editor?: string,
        public edition?: string,
        public series?: string,
        public web_address?: string
    ) {}
}