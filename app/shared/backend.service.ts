// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Kinvey } from "kinvey-nativescript-sdk";
import { SharedService } from "./shared.service";

Kinvey.init({
    appKey: "kid_SyY8LYO8M",
    appSecret: "09282985d7c540f7b076a9c7fd884c77"
});

export class BackendService {
    static isUserLoggedIn() {
        return SharedService.getInstance().isLoggedIn();
    }
}