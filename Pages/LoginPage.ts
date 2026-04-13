import {Page, expect} from '@playwright/test';

export class LoginPage{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async acessarSite(){
        await this.page.goto('/');
    }

    async preencherUsuario(usuario: string) {
        await this.page.locator('#user-name').fill(usuario);
    }

    async preencherSenha(senha: string) {
        await this.page.locator('#password').fill(senha);
    }

    async clicarLogin() {
        await this.page.locator('#login-button').click();
    }

    async login(usuario: string, senha: string){
        await this.preencherUsuario(usuario);
        await this.preencherSenha(senha);
        await this.clicarLogin();
    }

    async validarErro(mensagem: string){
        await expect(this.page.locator('[data-test="error"]')).toContainText(mensagem);
    }
}