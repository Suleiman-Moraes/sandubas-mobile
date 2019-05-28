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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVkaWRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVkaWRvLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDSSxnQkFDVyxFQUFXLEVBQ1gsVUFBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUIsRUFDakIsUUFBaUIsRUFDakIsU0FBa0IsRUFDbEIsZUFBaUMsRUFDakMsSUFBVyxFQUNYLE1BQWUsRUFDZixJQUFXO1FBVFgsT0FBRSxHQUFGLEVBQUUsQ0FBUztRQUNYLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQU87UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBTztJQUNwQixDQUFDO0lBRUksZUFBUSxHQUFmLFVBQWdCLFFBQWE7UUFDekIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IERldGFsaGVQZWRpZG8gfSBmcm9tIFwiLi9kZXRhbGhlLXBlZGlkby5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlZGlkb3tcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZD86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgdmFsb3JUb3RhbD86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgdGlwb1BhZ2FtZW50bz86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZW5kZXJlY28/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGxhdGl0dWRlPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBsb25naXR1ZGU/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRldGFsaGVzUGVkaWRvcz86IERldGFsaGVQZWRpZG9bXSxcclxuICAgICAgICBwdWJsaWMgZGF0YT86IERhdGUsXHJcbiAgICAgICAgcHVibGljIHN0YXR1cz86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdXNlcj86IFVzZXJcclxuICAgICl7fVxyXG5cclxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uRGF0YTogYW55KTogUGVkaWRve1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBQZWRpZG8oKSwganNvbkRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==