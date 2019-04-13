"use strict";
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var shared_service_1 = require("./shared.service");
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: "kid_SyY8LYO8M",
    appSecret: "09282985d7c540f7b076a9c7fd884c77"
});
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isUserLoggedIn = function () {
        return shared_service_1.SharedService.getInstance().isLoggedIn();
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5SEFBeUg7QUFDekgsNkVBQTZFOztBQUU3RSxtRUFBaUQ7QUFDakQsbURBQWlEO0FBRWpELGdDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ1IsTUFBTSxFQUFFLGVBQWU7SUFDdkIsU0FBUyxFQUFFLGtDQUFrQztDQUNoRCxDQUFDLENBQUM7QUFFSDtJQUFBO0lBSUEsQ0FBQztJQUhVLDZCQUFjLEdBQXJCO1FBQ0ksT0FBTyw4QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgZm9sbG93aW5nIGlzIGEgc2FtcGxlIGltcGxlbWVudGF0aW9uIG9mIGEgYmFja2VuZCBzZXJ2aWNlIHVzaW5nIFByb2dyZXNzIEtpbnZleSAoaHR0cHM6Ly93d3cucHJvZ3Jlc3MuY29tL2tpbnZleSkuXHJcbi8vIEZlZWwgZnJlZSB0byBzd2FwIGluIHlvdXIgb3duIHNlcnZpY2UgLyBBUElzIC8gZXRjIGhlcmUgZm9yIHlvdXIgb3duIGFwcHMuXHJcblxyXG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC5zZXJ2aWNlXCI7XHJcblxyXG5LaW52ZXkuaW5pdCh7XHJcbiAgICBhcHBLZXk6IFwia2lkX1N5WThMWU84TVwiLFxyXG4gICAgYXBwU2VjcmV0OiBcIjA5MjgyOTg1ZDdjNTQwZjdiMDc2YTljN2ZkODg0Yzc3XCJcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG4gICAgc3RhdGljIGlzVXNlckxvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiBTaGFyZWRTZXJ2aWNlLmdldEluc3RhbmNlKCkuaXNMb2dnZWRJbigpO1xyXG4gICAgfVxyXG59Il19