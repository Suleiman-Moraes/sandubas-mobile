import { TipoProduto } from "./tipo-produto.model";
import { ClassificacaoMercadoria } from "./classificacao-mercadoria.model";

export class Mercadoria{
    constructor(
        public id?: number,
        public precoPago?: number,
        public porcentagemVenda?: number,
        public marca?: string,
        public quantidade?: number,
        public valorMedida?: string,
        public valorAgrupamento?: number,
        public descricao?: string,
        public tipoProduto?: TipoProduto,
        public classificacaoMercadoria?: ClassificacaoMercadoria
    ){}

    static fromJson(jsonData: any): Mercadoria{
        return Object.assign(new Mercadoria(), jsonData);
    }
}