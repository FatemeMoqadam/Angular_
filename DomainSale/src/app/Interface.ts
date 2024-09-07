export interface News{
    source: {
        id: string | null,
        name: string
    },
    author: string | null,
    title: string,
    description: string,
    url:string,
    urlToImage: string,
    publishedAt: string,
    content:string
}

export interface Config{
    status : string,
    totalResults: number,
    articles: any,
}

export interface User{
    id:number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
export interface Domain{
    domain : string,
    punycode:string,
    name:string,
    extention:string,
    name_servers : string[],
}