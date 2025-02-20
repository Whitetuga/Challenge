import {test,expect} from "@playwright/test";
import PomManager from "../pages/PomManager.js";
import {getRandomEmail, getName, getLastName, generateBirthdate, getTitle, generatePassword, generateUKPhoneNumber} from "../utils/functions.js";

/*
This spec contains the success off adding Product and applying Promo.
Didnt finalize the purchase
It should also validate all the negative tests for adding Product and applying Promo checks.
*/

let pm;

test.describe("Adding Product to bag", ()=> {
    
    test.beforeEach(async ({page})=> {
        pm = new PomManager(page);
        //Go to Main Page
        await page.goto('/');
        await pm.base.acceptCookie();
    })

    test("Add Products", async ({page})=>{

        await page.getByRole('link', { name: 'New in', exact: true }).click();
        
        //Add the first Product in the List
        await pm.base.addProduct();

        //Check that theres one quantity of the item
        await expect(page.locator('#main-body')).toContainText('Qty: 1');
        //will not continue to payment process due to not have data/account to use
    })


    test("Apply PromoCode", async ({page})=>{

        //Set Values
        const title = getTitle();
        const name = getName();
        const lastName = getLastName();
        const birthdate = generateBirthdate(1960, 1990);
        const day = birthdate.day;
        const month = birthdate.month;
        const year = birthdate.year;
        const user = getRandomEmail("@gmail.com",5);
        const pass = generatePassword(8);
        const phoneNumber = generateUKPhoneNumber();

        //Do the Registration
        await pm.redirectPage.goToRegistration();
        await pm.registration.registrationStep(title,name,lastName,day,month,year,phoneNumber,user,pass);

        //Redirect to MainPage
        await page.waitForURL('**/successful-account-registration**');
        await page.locator("a#checkout-layout-header-logo").click();
        
        //Get PromoCode
        const Location = page.locator("[class*='ContentBar_notificationSubHeading']").locator("h2");
        const getTextFromLocation = await Location.textContent().catch((e) => console.log(e))
        var Promo = getTextFromLocation.replace('Use code: ','');

        //Go To New In
        await page.getByRole('link', { name: 'New in', exact: true }).click();

        //Add the first Product in the List
        await pm.base.addProduct();
        
        //Apply Promo
        await pm.base.addPromo(Promo);
        
        //Check Promo
        await pm.base.checkPromotion(Promo);
    })
});