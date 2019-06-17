import { User } from "../user.model";
import { DetalhePedido } from "./detalhe-pedido.model";

export class Pedido{
    constructor(
        public id?: number,
        public valorTotal?: number,
        public tipoPagamento?: string,
        public endereco?: string,
        public lat?: number,
        public log?: number,
        public detalhePedidos?: DetalhePedido[],
        public data?: Date,
        public dataPedido?: Date,
        public status?: string,
        public user?: User
    ){}

    static fromJson(jsonData: any): Pedido{
        return Object.assign(new Pedido(), jsonData);
    }
}
