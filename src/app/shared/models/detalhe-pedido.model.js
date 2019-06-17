"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DetalhePedido = /** @class */ (function () {
    function DetalhePedido(id, precoUnitario, total, quantidade, mercadoria) {
        this.id = id;
        this.precoUnitario = precoUnitario;
        this.total = total;
        this.quantidade = quantidade;
        this.mercadoria = mercadoria;
    }
    DetalhePedido.fromJson = function (jsonData) {
        return Object.assign(new DetalhePedido(), jsonData);
    };
    return DetalhePedido;
}());
exports.DetalhePedido = DetalhePedido;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZS1wZWRpZG8ubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhbGhlLXBlZGlkby5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksdUJBQ1csRUFBVyxFQUNYLGFBQXNCLEVBQ3RCLEtBQWMsRUFDZCxVQUFtQixFQUNuQixVQUF1QjtRQUp2QixPQUFFLEdBQUYsRUFBRSxDQUFTO1FBQ1gsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtJQUNoQyxDQUFDO0lBRUksc0JBQVEsR0FBZixVQUFnQixRQUFhO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGFBQWEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXJjYWRvcmlhIH0gZnJvbSBcIi4vbWVyY2Fkb3JpYS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERldGFsaGVQZWRpZG97XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHByZWNvVW5pdGFyaW8/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHRvdGFsPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBxdWFudGlkYWRlPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBtZXJjYWRvcmlhPzogTWVyY2Fkb3JpYVxyXG4gICAgKXt9XHJcblxyXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25EYXRhOiBhbnkpOiBEZXRhbGhlUGVkaWRve1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBEZXRhbGhlUGVkaWRvKCksIGpzb25EYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=