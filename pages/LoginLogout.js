import Base from "./Base";

export default class LoginLogOut extends Base{


    async doLogin(username,password){
        //Go to login and click to sign in
        await this.LoginIcon.click();
        await this.page.locator("#username").fill(username);
        await this.page.locator("#password").fill(password);
        await this.page.getByRole('checkbox', { name: 'Remember me' }).check();
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }

    async doLogout(){
        //Go to Menu and click Logout
        await this.page.locator("text=Menu").click();
        await this.page.locator("text=Sign out").click();
    }
}