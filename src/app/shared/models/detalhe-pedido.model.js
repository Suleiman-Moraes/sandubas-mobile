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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZS1wZWRpZG8ubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhbGhlLXBlZGlkby5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksdUJBQ1csRUFBVyxFQUNYLGFBQXNCLEVBQ3RCLEtBQWMsRUFDZCxVQUFtQixFQUNuQixVQUF1QjtRQUp2QixPQUFFLEdBQUYsRUFBRSxDQUFTO1FBQ1gsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtJQUNoQyxDQUFDO0lBRUksc0JBQVEsR0FBZixVQUFnQixRQUFhO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGFBQWEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXJjYWRvcmlhIH0gZnJvbSBcIi4vbWVyY2Fkb3JpYS5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgRGV0YWxoZVBlZGlkb3tcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgcHJlY29Vbml0YXJpbz86IG51bWJlcixcbiAgICAgICAgcHVibGljIHRvdGFsPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgcXVhbnRpZGFkZT86IG51bWJlcixcbiAgICAgICAgcHVibGljIG1lcmNhZG9yaWE/OiBNZXJjYWRvcmlhXG4gICAgKXt9XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbkRhdGE6IGFueSk6IERldGFsaGVQZWRpZG97XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBEZXRhbGhlUGVkaWRvKCksIGpzb25EYXRhKTtcbiAgICB9XG59XG4iXX0=