 export class Recipe {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public ingredients?: string[],
    public instructions?: string[],
    public imageUrl?: string
  ) {}
}
