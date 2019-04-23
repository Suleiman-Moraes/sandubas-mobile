export class ClassificacaoMercadoria{
    constructor(
        public id?: number,
        public nome?: number,
        public descricao?: string
    ){}

    static fromJson(jsonData: any): ClassificacaoMercadoria{
        return Object.assign(new ClassificacaoMercadoria(), jsonData);
    }
}