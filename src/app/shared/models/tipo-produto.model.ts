export class TipoProduto{
    constructor(
        public id?: number,
        public nome?: number,
        public descricao?: string
    ){}

    static fromJson(jsonData: any): TipoProduto{
        return Object.assign(new TipoProduto(), jsonData);
    }
}