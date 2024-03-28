export interface IFlower {
    id: number;
    name: string;
    price: number,
    color: string,
    bloom_season: Array<string>;
    size: string;
    planting_season: Array<string>;
    description: string;
    image: string;
}