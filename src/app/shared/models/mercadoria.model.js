"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mercadoria = /** @class */ (function () {
    function Mercadoria(id, precoPago, porcentagemVenda, marca, quantidade, valorMedida, valorAgrupamento, descricao, tipoProduto, classificacaoMercadoria) {
        this.id = id;
        this.precoPago = precoPago;
        this.porcentagemVenda = porcentagemVenda;
        this.marca = marca;
        this.quantidade = quantidade;
        this.valorMedida = valorMedida;
        this.valorAgrupamento = valorAgrupamento;
        this.descricao = descricao;
        this.tipoProduto = tipoProduto;
        this.classificacaoMercadoria = classificacaoMercadoria;
    }
    Mercadoria.fromJson = function (jsonData) {
        return Object.assign(new Mercadoria(), jsonData);
    };
    return Mercadoria;
}());
exports.Mercadoria = Mercadoria;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2Fkb3JpYS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lcmNhZG9yaWEubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQUNJLG9CQUNXLEVBQVcsRUFDWCxTQUFrQixFQUNsQixnQkFBeUIsRUFDekIsS0FBYyxFQUNkLFVBQW1CLEVBQ25CLFdBQW9CLEVBQ3BCLGdCQUF5QixFQUN6QixTQUFrQixFQUNsQixXQUF5QixFQUN6Qix1QkFBaUQ7UUFUakQsT0FBRSxHQUFGLEVBQUUsQ0FBUztRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFTO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUztRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQ3pCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBMEI7SUFDMUQsQ0FBQztJQUVJLG1CQUFRLEdBQWYsVUFBZ0IsUUFBYTtRQUN6QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlwb1Byb2R1dG8gfSBmcm9tIFwiLi90aXBvLXByb2R1dG8ubW9kZWxcIjtcclxuaW1wb3J0IHsgQ2xhc3NpZmljYWNhb01lcmNhZG9yaWEgfSBmcm9tIFwiLi9jbGFzc2lmaWNhY2FvLW1lcmNhZG9yaWEubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXJjYWRvcmlhe1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBwcmVjb1BhZ28/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHBvcmNlbnRhZ2VtVmVuZGE/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG1hcmNhPzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBxdWFudGlkYWRlPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB2YWxvck1lZGlkYT86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdmFsb3JBZ3J1cGFtZW50bz86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgZGVzY3JpY2FvPzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0aXBvUHJvZHV0bz86IFRpcG9Qcm9kdXRvLFxyXG4gICAgICAgIHB1YmxpYyBjbGFzc2lmaWNhY2FvTWVyY2Fkb3JpYT86IENsYXNzaWZpY2FjYW9NZXJjYWRvcmlhXHJcbiAgICApe31cclxuXHJcbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbkRhdGE6IGFueSk6IE1lcmNhZG9yaWF7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IE1lcmNhZG9yaWEoKSwganNvbkRhdGEpO1xyXG4gICAgfVxyXG59Il19