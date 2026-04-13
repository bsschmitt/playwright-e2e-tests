import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';

test.describe('Testes da Inventory', () => {
    
    test('Adicionar produto ao carrinho', async ({page}) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);

        //Acessar e efetuar login
        await login.acessarSite();
        await login.login('standard_user', 'secret_sauce');
        
        //Valida que está na tela correta
        await inventory.validaLoginSucesso();

        //Adicionar item e validar carrinho
        await inventory.adicionarProdutoCarrinho();
        await inventory.validarCarrinho('1');

        //Logout
        await inventory.efetuarLogout();
    })
})