import { test, expect } from '../fixtures/advanced-fixtures';

test.describe('E2E - Checkout Flow', () => {
    test('Deve completar uma compra com sucesso', async ({
        loggedPage,
        inventoryPage,
        checkoutPage,
        cartPage,
        userData
    }) => {
        //Step 1 - Garantir que está logado
        await expect(loggedPage).toHaveURL(/inventory/);

        //Step 2 - Adicionar um produto ao carrinho 
        await inventoryPage.adicionarProdutoCarrinho();

        //Step 3 - Ir para o carrinho
        await inventoryPage.abrirCarrinho()
       

        //Step 4 - Validar o produto no carrinho
        await expect(loggedPage.locator('.cart_item')).toHaveCount(1);

        //Step 5 - Finalizar compra
         await cartPage.checkout();
        await checkoutPage.preencherDadosFixture(userData);

        //Step 6 - Validação final
        await checkoutPage.validaSucesso();
    });
});