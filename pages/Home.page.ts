import {type Locator, type Page} from "@playwright/test"

export default class HomePage{

    private readonly popUpNo: Locator;
    private readonly destinationInput: Locator;

    constructor(readonly page:Page){
        this.page = page;
        this.popUpNo = page.locator('iframe[title="usercom widget"]').contentFrame().getByRole('button', { name: 'No, gracias.' })
        this.destinationInput = page.locator('#place_name');
    }

    async goToHomePage(){
        await this.page.goto("https://www.pricetravel.com/")
    }

    async clickOnNo(){
        await this.popUpNo.click();
    }

    async fillDestination(destination: string){
        await this.destinationInput.fill(destination);
    }

    async pickDestinationByName(destinationName:string){
        await this.page.getByRole('button', { name: destinationName }).click();
    }

    
}