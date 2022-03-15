export interface Data {
    num: string,
    name: string,
    count: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean,
}

export interface Filters {
    year1: number,
    year2: number,
    count1: number,
    count2: number,
    shapes: Array<string>,
    colors: Array<string>,
    sizes: Array<string>,
    name: string,
}