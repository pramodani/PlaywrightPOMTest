//create a class for login
//in playwright create class by typing class and class name with curly brac

import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    username_textbox: Locator;
    password_textbox: Locator;
    login_button: Locator;

    //cannot use like this needto pass page from where eer we start the object
    //therefore create a constructor and pass the page object

    constructor(page: Page) {

        //creating a class varivle called page for this class
        //and its value -- to whatever comes in constructer
        this.page = page;
        //locaters
        //use this to make locators class variables
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: ' Login' });
    }

    //create methods which will do actions
    // go itt one common method to all actions

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();

    }
}