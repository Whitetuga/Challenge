
import {test,expect} from "@playwright/test";
import PomManager from "../pages/PomManager.js";

/*
This spec contains the browsing of multiple tab.
*/

let pm;

test.describe("Browse Store", ()=> {
    
    test.beforeEach(async ({page})=> {
        pm = new PomManager(page);
        //Go to Main Page
        await page.goto('/');
        await pm.base.acceptCookie();
    })

    test("Browse Store", async ({page})=>{

        //Browse to itch tab and check the pages are correct
        await pm.base.checkTabs('Dresses');
        await pm.base.checkTabs('Basics');
        await pm.base.checkTabs('Denim');
        await pm.base.checkTabs('Boots');
        await pm.base.checkTabs('Beauty');
       })
});