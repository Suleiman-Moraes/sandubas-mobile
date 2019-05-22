import { User } from "../user.model";
import { DetalhePedido } from "./detalhe-pedido.model";

export class Pedido{
    constructor(
        public id?: number,
        public valorTotal?: number,
        public tipoPagamento?: string,
        public endereco?: string,
        public latitude?: number,
        public longitude?: number,
        public detalhesPedidos?: DetalhePedido[],
        public data?: Date,
        public status?: string,
        public user?: User
    ){}

    static fromJson(jsonData: any): Pedido{
        return Object.assign(new Pedido(), jsonData);
    }
}
