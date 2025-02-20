import { test, expect } from "@playwright/test";

export default class Base {
    constructor(page){
        this.page = page;
        this.promoBox = this.page.getByRole('textbox', { name: 'Promotion code' });
        this.LoginIcon = this.page.getByRole('button', { name: 'Sign in Sign in icon' });
        this.loginButton = this.page.locator("[class='button buttonSecondary']");
        this.selectLogo = this.page.locator("a#checkout-layout-header-logo");
        this.checkPromo = this.page.locator("[class*='OrderSummary_codeDiscountText']");
        this.accountCreatedTittle = page.locator("[class*='SuccessfulAccountRegistration_title']");
    }

    async acceptCookie(){
        //Close Cookies
        await this.page.locator('#onetrust-accept-btn-handler').click();
    }

    async checkTabs(Tab){
        //to the tabs and validate that the is the correct one
        await this.page.getByRole('link', { name: Tab, exact: true }).click();
        await this.page.locator('#load-more-products-button').click();
        await expect(this.page.locator('#productCategory-headingContainer')).toContainText(Tab);
        await this.page.locator("#floating-header-logo").click();
    }

    async addPromo(Promo){
        //Add promo in the checkout
        await this.promoBox.click();
        await this.promoBox.fill(Promo);
        await this.page.getByRole('button', { name: 'Add' }).click();
    }

    async addProduct(){
        //Add the 1º product on the list
        await this.page.locator('[data-cy="product-card"]').nth(0).click();
        await this.page.getByRole('button', { name: 'add to bag' }).click();
        await this.page.getByRole('button', { name: '10', exact: true }).click();
        await this.page.getByRole('link', { name: 'Go to bag' }).click();
    }

    async checkPromotion(Promo){
        await expect(this.checkPromo).toContainText(Promo)
    }
    
    async checkAccountCreated(){
        await expect(this.accountCreatedTittle).toContainText('Account created');
    }

    async checkThatIsLogout(){
        await expect(this.LoginIcon).toBeVisible()
    }
}