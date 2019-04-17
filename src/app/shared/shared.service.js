"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.showTemplate = new core_1.EventEmitter();
        return SharedService_1.instance = SharedService_1.instance || this;
    }
    SharedService_1 = SharedService;
    SharedService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SharedService_1();
        }
        return this.instance;
    };
    SharedService.prototype.isLoggedIn = function () {
        if (this.user == null) {
            return false;
        }
        return this.user.login.trim() != '';
    };
    var SharedService_1;
    SharedService.instance = null;
    SharedService = SharedService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFyZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQU16RDtJQU9FO1FBRkEsaUJBQVksR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUd6QyxPQUFPLGVBQWEsQ0FBQyxRQUFRLEdBQUcsZUFBYSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDakUsQ0FBQztzQkFUVSxhQUFhO0lBV1YseUJBQVcsR0FBekI7UUFDRSxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFhLEVBQUUsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNFLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7O0lBckJhLHNCQUFRLEdBQWtCLElBQUksQ0FBQztJQUZsQyxhQUFhO1FBSHpCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLGFBQWEsQ0F3QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZFNlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaGFyZWRTZXJ2aWNlID0gbnVsbDtcclxuICB1c2VyOiBVc2VyO1xyXG4gIHRva2VuOiBzdHJpbmc7XHJcbiAgc2hvd1RlbXBsYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICByZXR1cm4gU2hhcmVkU2VydmljZS5pbnN0YW5jZSA9IFNoYXJlZFNlcnZpY2UuaW5zdGFuY2UgfHwgdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcclxuICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2hhcmVkU2VydmljZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZEluKCk6Ym9vbGVhbntcclxuICAgIGlmKHRoaXMudXNlciA9PSBudWxsKXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudXNlci5sb2dpbi50cmltKCkgIT0gJyc7XHJcbiAgfVxyXG59Il19