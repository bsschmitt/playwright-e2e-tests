import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { describe } from 'node:test';

test.describe('Testes de LogIn', async () => {
    test('CT01 - Login com sucesso', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarSite()
        await loginPage.login('standard_user', 'secret_sauce');
        //Validação abertura de página
        await expect(page).toHaveURL(/inventory/);
    });

    test('CT02 - Login inválido - Senha incorreta', async ({page}) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.acessarSite();
        await loginPage.login('standard_user', 'senha_incorreta');
        //Validação de erro esperado
        await loginPage.validarErro('Username and password do not match');
    });

    test('CT03 - Login com user bloqueado', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarSite();
        await loginPage.login('locked_out_user', 'secret_sauce');
        //Validação de erro esperado
        await loginPage.validarErro('Sorry, this user has been locked out.');
    });

    test('CT04 - Login com campos vazios', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarSite();
        await loginPage.login('', '');

        await loginPage.validarErro('Username is required');
    });

    test('CT05 - Login sem senha', async({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarSite();
        await loginPage.login('standard_user', '');

        await loginPage.validarErro('Password is required');
    });
});