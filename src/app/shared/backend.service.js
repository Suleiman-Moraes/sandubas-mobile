"use strict";
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
Object.defineProperty(exports, "__esModule", { value: true });
var shared_service_1 = require("./shared.service");
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isUserLoggedIn = function () {
        return shared_service_1.SharedService.getInstance().isLoggedIn();
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5SEFBeUg7QUFDekgsNkVBQTZFOztBQUU3RSxtREFBaUQ7QUFFakQ7SUFBQTtJQUlBLENBQUM7SUFIVSw2QkFBYyxHQUFyQjtRQUNJLE9BQU8sOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxyXG4vLyBGZWVsIGZyZWUgdG8gc3dhcCBpbiB5b3VyIG93biBzZXJ2aWNlIC8gQVBJcyAvIGV0YyBoZXJlIGZvciB5b3VyIG93biBhcHBzLlxyXG5cclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG4gICAgc3RhdGljIGlzVXNlckxvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiBTaGFyZWRTZXJ2aWNlLmdldEluc3RhbmNlKCkuaXNMb2dnZWRJbigpO1xyXG4gICAgfVxyXG59Il19