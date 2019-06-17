"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pedido = /** @class */ (function () {
    function Pedido(id, valorTotal, tipoPagamento, endereco, lat, log, detalhePedidos, data, dataPedido, status, user) {
        this.id = id;
        this.valorTotal = valorTotal;
        this.tipoPagamento = tipoPagamento;
        this.endereco = endereco;
        this.lat = lat;
        this.log = log;
        this.detalhePedidos = detalhePedidos;
        this.data = data;
        this.dataPedido = dataPedido;
        this.status = status;
        this.user = user;
    }
    Pedido.fromJson = function (jsonData) {
        return Object.assign(new Pedido(), jsonData);
    };
    return Pedido;
}());
exports.Pedido = Pedido;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVkaWRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVkaWRvLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDSSxnQkFDVyxFQUFXLEVBQ1gsVUFBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUIsRUFDakIsR0FBWSxFQUNaLEdBQVksRUFDWixjQUFnQyxFQUNoQyxJQUFXLEVBQ1gsVUFBaUIsRUFDakIsTUFBZSxFQUNmLElBQVc7UUFWWCxPQUFFLEdBQUYsRUFBRSxDQUFTO1FBQ1gsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQVM7UUFDWixRQUFHLEdBQUgsR0FBRyxDQUFTO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQU87UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFPO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFPO0lBQ3BCLENBQUM7SUFFSSxlQUFRLEdBQWYsVUFBZ0IsUUFBYTtRQUN6QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRGV0YWxoZVBlZGlkbyB9IGZyb20gXCIuL2RldGFsaGUtcGVkaWRvLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVkaWRve1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB2YWxvclRvdGFsPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB0aXBvUGFnYW1lbnRvPzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBlbmRlcmVjbz86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbGF0PzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBsb2c/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRldGFsaGVQZWRpZG9zPzogRGV0YWxoZVBlZGlkb1tdLFxyXG4gICAgICAgIHB1YmxpYyBkYXRhPzogRGF0ZSxcclxuICAgICAgICBwdWJsaWMgZGF0YVBlZGlkbz86IERhdGUsXHJcbiAgICAgICAgcHVibGljIHN0YXR1cz86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdXNlcj86IFVzZXJcclxuICAgICl7fVxyXG5cclxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uRGF0YTogYW55KTogUGVkaWRve1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBQZWRpZG8oKSwganNvbkRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==