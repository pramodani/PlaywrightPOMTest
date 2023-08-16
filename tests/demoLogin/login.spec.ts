import { test, expect } from '@playwright/test';
//import our class
import { LoginPage } from '../../pages/login';

test('login test', async ({ page }) => {

  //create new instance of class
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login('tomsmith','SuperSecretPassword!')
  
});
  