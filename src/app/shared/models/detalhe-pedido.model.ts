import { Mercadoria } from "./mercadoria.model";

export class DetalhePedido{
    constructor(
        public id?: number,
        public precoUnitario?: number,
        public total?: number,
        public quantidade?: number,
        public mercadoria?: Mercadoria
    ){}

    static fromJson(jsonData: any): DetalhePedido{
        return Object.assign(new DetalhePedido(), jsonData);
    }
}
