import RedirectPages from "./RedirectPages.js";
import Registration from "./Registration.js";
import Base from "./Base.js";
import LoginLogOut from "./LoginLogout.js";

export default class PomManager {
    constructor(page) {
        this.page = page;
        this.redirectPage = new RedirectPages(page);
        this.registration = new Registration(page);
        this.base = new Base(page);
        this.loginLogout = new LoginLogOut(page);
    }
}