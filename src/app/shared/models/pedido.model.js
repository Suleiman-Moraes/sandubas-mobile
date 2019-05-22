"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pedido = /** @class */ (function () {
    function Pedido(id, valorTotal, tipoPagamento, endereco, latitude, longitude, detalhesPedidos, data, status, user) {
        this.id = id;
        this.valorTotal = valorTotal;
        this.tipoPagamento = tipoPagamento;
        this.endereco = endereco;
        this.latitude = latitude;
        this.longitude = longitude;
        this.detalhesPedidos = detalhesPedidos;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVkaWRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVkaWRvLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDSSxnQkFDVyxFQUFXLEVBQ1gsVUFBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUIsRUFDakIsUUFBaUIsRUFDakIsU0FBa0IsRUFDbEIsZUFBaUMsRUFDakMsSUFBVyxFQUNYLE1BQWUsRUFDZixJQUFXO1FBVFgsT0FBRSxHQUFGLEVBQUUsQ0FBUztRQUNYLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQU87UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBTztJQUNwQixDQUFDO0lBRUksZUFBUSxHQUFmLFVBQWdCLFFBQWE7UUFDekIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBEZXRhbGhlUGVkaWRvIH0gZnJvbSBcIi4vZGV0YWxoZS1wZWRpZG8ubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFBlZGlkb3tcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgdmFsb3JUb3RhbD86IG51bWJlcixcbiAgICAgICAgcHVibGljIHRpcG9QYWdhbWVudG8/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBlbmRlcmVjbz86IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxhdGl0dWRlPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbG9uZ2l0dWRlPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgZGV0YWxoZXNQZWRpZG9zPzogRGV0YWxoZVBlZGlkb1tdLFxuICAgICAgICBwdWJsaWMgZGF0YT86IERhdGUsXG4gICAgICAgIHB1YmxpYyBzdGF0dXM/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB1c2VyPzogVXNlclxuICAgICl7fVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25EYXRhOiBhbnkpOiBQZWRpZG97XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBQZWRpZG8oKSwganNvbkRhdGEpO1xuICAgIH1cbn1cbiJdfQ==