import Base from "./Base";

export default class RedirectPages extends Base {

    async goToRegistration(){
        //This will Send you from the Main Page to the Registration Page;
        await this.LoginIcon.click();
        await this.loginButton.click();
    }

    async goToLogin(){
        //This will Send you from the Main Page to the Login Page;
        await this.LoginIcon.click();
        await this.loginButton.click();
    }

    async goFromRegistrationToMain(){
        //This will Send you from Successful Registration to Main PAge;
        await this.selectLogo.click();
    }

}