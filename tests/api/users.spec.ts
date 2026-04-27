import { test, expect } from '../../fixtures/api-fixtures'

test('Deve criar usuário via API', async ({ apiRequest }) => {
    const response = await apiRequest.post('/api/users', {
        data: {
            name: 'Testador',
            job: 'QA Engineer'
        }
    });

    const body = await response.json();

    console.log('Response', body);

    expect(response.status()).toBe(201);
    expect(body.name).toBe('Testador');
});