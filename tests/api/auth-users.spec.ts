import { test, expect } from '../../fixtures/auth-api-fixtures';

test('Deve criar usuário com token dinâmico', async ({ authApiRequest }) => {
    const response = await authApiRequest.post('/api/users', {
        data: {
            name: 'Testador',
            job: 'SDET'
        }
    });

    const body = await response.json();

    expect(response.status()).toBe(201);
    expect(body.name).toBe('Testador');
});