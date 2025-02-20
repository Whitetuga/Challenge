export default class Registration {
    constructor(page){
        this.page = page;
    }

    async registrationStep(tittle,name,lastname,day,month,year,phoneNumber,username,password){
        //Fill User Data
        await this.page.waitForURL('**/login-actions/registration**');
        await this.page.getByLabel('Title').selectOption(tittle);
        await this.page.locator("input[id='firstName']").fill(name);
        await this.page.locator("input[id='lastName']").fill(lastname);
        await this.page.locator("input[id='day']").fill(day);
        await this.page.locator("input[id='month']").fill(month);
        await this.page.locator("input[id='year']").fill(year);
        await this.page.locator("input[id='phoneNumber']").fill(phoneNumber);
        await this.page.locator("input[id='address']").fill('Test');
        await this.page.locator('text=Teignmouth').click();
        await this.page.locator("input[id='email']").fill(username);
        await this.page.locator("input[id='password']").fill(password);
        //Fill the Markting steps for Cookies with no
        await this.page.locator("#emailOptOut.radio__input.radio__label").check();
        await this.page.locator("#postOptOut.radio__input.radio__label").check();
        await this.page.locator("#phoneOptOut.radio__input.radio__label").check();
        //Submit
        await this.page.locator("[data-ga-tracking-id *= 'registration_continue']").click();
    }
}