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

export interface Resource{
    id:number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
}
