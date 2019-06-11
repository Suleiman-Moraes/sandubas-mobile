"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pedido = /** @class */ (function () {
    function Pedido(id, valorTotal, tipoPagamento, endereco, latitude, longitude, detalhePedidos, data, status, user) {
        this.id = id;
        this.valorTotal = valorTotal;
        this.tipoPagamento = tipoPagamento;
        this.endereco = endereco;
        this.latitude = latitude;
        this.longitude = longitude;
        this.detalhePedidos = detalhePedidos;
        this.data = data;
        this.status = status;
        this.user = user;
    }
    Pedido.fromJson = function (jsonData) {
        return Object.assign(new Pedido(), jsonData);
    };
    return Pedido;
}());
exports.Pedido = Pedido;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVkaWRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVkaWRvLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDSSxnQkFDVyxFQUFXLEVBQ1gsVUFBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUIsRUFDakIsUUFBaUIsRUFDakIsU0FBa0IsRUFDbEIsY0FBZ0MsRUFDaEMsSUFBVyxFQUNYLE1BQWUsRUFDZixJQUFXO1FBVFgsT0FBRSxHQUFGLEVBQUUsQ0FBUztRQUNYLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQU87UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBTztJQUNwQixDQUFDO0lBRUksZUFBUSxHQUFmLFVBQWdCLFFBQWE7UUFDekIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IERldGFsaGVQZWRpZG8gfSBmcm9tIFwiLi9kZXRhbGhlLXBlZGlkby5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlZGlkb3tcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZD86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgdmFsb3JUb3RhbD86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgdGlwb1BhZ2FtZW50bz86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZW5kZXJlY28/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGxhdGl0dWRlPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBsb25naXR1ZGU/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRldGFsaGVQZWRpZG9zPzogRGV0YWxoZVBlZGlkb1tdLFxyXG4gICAgICAgIHB1YmxpYyBkYXRhPzogRGF0ZSxcclxuICAgICAgICBwdWJsaWMgc3RhdHVzPzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB1c2VyPzogVXNlclxyXG4gICAgKXt9XHJcblxyXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25EYXRhOiBhbnkpOiBQZWRpZG97XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFBlZGlkbygpLCBqc29uRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19