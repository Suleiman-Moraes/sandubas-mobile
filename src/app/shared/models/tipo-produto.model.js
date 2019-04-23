"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoProduto = /** @class */ (function () {
    function TipoProduto(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    TipoProduto.fromJson = function (jsonData) {
        return Object.assign(new TipoProduto(), jsonData);
    };
    return TipoProduto;
}());
exports.TipoProduto = TipoProduto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwby1wcm9kdXRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGlwby1wcm9kdXRvLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFDSSxxQkFDVyxFQUFXLEVBQ1gsSUFBYSxFQUNiLFNBQWtCO1FBRmxCLE9BQUUsR0FBRixFQUFFLENBQVM7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUztJQUMzQixDQUFDO0lBRUksb0JBQVEsR0FBZixVQUFnQixRQUFhO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFdBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGlwb1Byb2R1dG97XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5vbWU/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRlc2NyaWNhbz86IHN0cmluZ1xyXG4gICAgKXt9XHJcblxyXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25EYXRhOiBhbnkpOiBUaXBvUHJvZHV0b3tcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgVGlwb1Byb2R1dG8oKSwganNvbkRhdGEpO1xyXG4gICAgfVxyXG59Il19