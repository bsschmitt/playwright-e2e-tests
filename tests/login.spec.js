import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Login com sucesso', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessarSite()
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
});