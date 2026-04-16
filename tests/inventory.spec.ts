import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';

test.describe('Testes da Inventory', () => {
    
    test.beforeEach(async ({page}) => {
        const login = new LoginPage(page);
        await login.acessarSite();
        await login.login('standard_user', 'secret_sauce');
    });

    test('CT01 - Adicionar produto ao carrinho', async ({page}) => {
        const inventory = new InventoryPage(page);
        
        //Valida que está na tela correta
        await inventory.validaLoginSucesso();

        //Adicionar item e validar carrinho
        await inventory.adicionarProdutoCarrinho();
        await inventory.validarCarrinho('1');

        //Logout
        await inventory.efetuarLogout();
    });

    test('CT02 - Listar produtos', async ({page}) => {
        const inventory = new InventoryPage(page);
        //Validação
        await expect(page.locator('.inventory_item')).toHaveCount(6);
    });

    test('CT03 - Remover produto da lista', async ({page}) => {
       const inventory = new InventoryPage(page);
       
       await inventory.adicionarProdutoCarrinho();
       await page.click('[data-test="remove-sauce-labs-backpack"]');
        //Validação
       await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
    });

    test('CT04 - Ordenação de produtos por nome (A-Z)', async ({page}) => {
 
        await page.locator('select').selectOption('az');
        const items = await page.locator('inventory_item_name').allTextContents();
        //Validação
        expect(items).toEqual([...items].sort());
    });
});