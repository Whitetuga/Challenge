import {test,expect} from "@playwright/test";
import PomManager from "../pages/PomManager.js";
import {getRandomEmail, getName, getLastName, generateBirthdate, getTitle, generatePassword, generateUKPhoneNumber,getUserData} from "../utils/functions.js";

/*
This spec contains the success validation Registration and Logout.
*/

let pm;

test.describe("Login registration logout", ()=> {
    test.beforeEach(async ({page})=> {
        pm = new PomManager(page);
        //Go to Main Page
        await page.goto('/');
        await pm.base.acceptCookie();
    })

    test("Login", async ({page})=>{

        const user = getUserData().email;
        const pass = getUserData().password;
        // Go To Login
        await pm.loginLogout.doLogin(user,pass);
        //Validate that contains specific account
        await expect(page.getByRole('main')).toContainText('V3302379');
    })

    test("Registration and Logout", async ({page})=>{
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

        //logout
        await pm.loginLogout.doLogout();

        //Validate that its on the mainPage
        await pm.base.checkThatIsLogout()
    })
});

    