"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseApi = /** @class */ (function () {
    function ResponseApi(data, erros) {
        this.data = data;
        this.erros = erros;
    }
    ResponseApi.fromJson = function (jsonData) {
        return Object.assign(new ResponseApi(), jsonData);
    };
    return ResponseApi;
}());
exports.ResponseApi = ResponseApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2UtYXBpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzcG9uc2UtYXBpLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFDSSxxQkFDVyxJQUFVLEVBQ1YsS0FBZ0I7UUFEaEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQVc7SUFDekIsQ0FBQztJQUVJLG9CQUFRLEdBQWYsVUFBZ0IsUUFBYTtRQUN6QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxXQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlc3BvbnNlQXBpe1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGRhdGE/OiBhbnksXHJcbiAgICAgICAgcHVibGljIGVycm9zPzogc3RyaW5nW11cclxuICAgICl7fVxyXG5cclxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uRGF0YTogYW55KTogUmVzcG9uc2VBcGl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFJlc3BvbnNlQXBpKCksIGpzb25EYXRhKTtcclxuICAgIH1cclxufSJdfQ==