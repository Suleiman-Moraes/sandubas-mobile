// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { SharedService } from "./shared.service";

export class BackendService {
    static isUserLoggedIn() {
        return SharedService.getInstance().isLoggedIn();
    }
}