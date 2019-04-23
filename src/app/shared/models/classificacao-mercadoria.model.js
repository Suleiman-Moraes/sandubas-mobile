"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassificacaoMercadoria = /** @class */ (function () {
    function ClassificacaoMercadoria(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    ClassificacaoMercadoria.fromJson = function (jsonData) {
        return Object.assign(new ClassificacaoMercadoria(), jsonData);
    };
    return ClassificacaoMercadoria;
}());
exports.ClassificacaoMercadoria = ClassificacaoMercadoria;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYWNhby1tZXJjYWRvcmlhLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpZmljYWNhby1tZXJjYWRvcmlhLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFDSSxpQ0FDVyxFQUFXLEVBQ1gsSUFBYSxFQUNiLFNBQWtCO1FBRmxCLE9BQUUsR0FBRixFQUFFLENBQVM7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUztJQUMzQixDQUFDO0lBRUksZ0NBQVEsR0FBZixVQUFnQixRQUFhO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHVCQUF1QixFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2xhc3NpZmljYWNhb01lcmNhZG9yaWF7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5vbWU/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRlc2NyaWNhbz86IHN0cmluZ1xyXG4gICAgKXt9XHJcblxyXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25EYXRhOiBhbnkpOiBDbGFzc2lmaWNhY2FvTWVyY2Fkb3JpYXtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgQ2xhc3NpZmljYWNhb01lcmNhZG9yaWEoKSwganNvbkRhdGEpO1xyXG4gICAgfVxyXG59Il19