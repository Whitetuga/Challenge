import {test,expect} from "@playwright/test";
import PomManager from "../pages/PomManager.js";
import {getRandomEmail, getName, getLastName, generateBirthdate, getTitle, generatePassword, generateUKPhoneNumber} from "../utils/functions.js";

/*
This spec contains the success validation of an account created.
*/

let pm;

test.describe("Authentication Registration", ()=> {
    test.beforeEach(async ({page})=> {
        pm = new PomManager(page);
        //Go to Main Page
        await page.goto('/');
        await pm.base.acceptCookie();
    })

    test("Registration Validation", async ({page})=>{
        
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

        //Validate that the user was created
        await page.waitForURL('**/successful-account-registration**');

        //Check that the account was created
        await pm.base.checkAccountCreated();
    })
});
    