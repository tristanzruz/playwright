import { test, expect } from '@playwright/test';
import HomePage from '../pages/Home.page';

test.describe('testcases', () => {
    let homePage: HomePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
    })
    

    test('homepage', async () => {
        await homePage.goToHomePage();
        await homePage.clickOnNo();
        await homePage.fillDestination("Can");
        await homePage.pickDestinationByName(" Cancún Quintana Roo, México");
    })
    

})



