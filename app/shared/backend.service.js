"use strict";
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: "kid_SyY8LYO8M",
    appSecret: "09282985d7c540f7b076a9c7fd884c77"
});
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isUserLoggedIn = function () {
        return !!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser();
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5SEFBeUg7QUFDekgsNkVBQTZFOztBQUc3RSxtRUFBaUQ7QUFFakQsZ0NBQU0sQ0FBQyxJQUFJLENBQUM7SUFDUixNQUFNLEVBQUUsZUFBZTtJQUN2QixTQUFTLEVBQUUsa0NBQWtDO0NBQ2hELENBQUMsQ0FBQztBQUVIO0lBQUE7SUFJQSxDQUFDO0lBSFUsNkJBQWMsR0FBckI7UUFDSSxPQUFPLENBQUMsQ0FBQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxyXG4vLyBGZWVsIGZyZWUgdG8gc3dhcCBpbiB5b3VyIG93biBzZXJ2aWNlIC8gQVBJcyAvIGV0YyBoZXJlIGZvciB5b3VyIG93biBhcHBzLlxyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xyXG5cclxuS2ludmV5LmluaXQoe1xyXG4gICAgYXBwS2V5OiBcImtpZF9TeVk4TFlPOE1cIixcclxuICAgIGFwcFNlY3JldDogXCIwOTI4Mjk4NWQ3YzU0MGY3YjA3NmE5YzdmZDg4NGM3N1wiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBpc1VzZXJMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISFLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=