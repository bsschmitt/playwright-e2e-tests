import { APIRequestContext } from '@playwright/test';

export async function getAuthToken(request: APIRequestContext){
    const response = await request.post('/api/login', {
        headers: {
            'x-api-key': process.env.API_KEY!,
        }, 
        
        data: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
    });

    const body = await response.json();

    if(!body.token) {
        console.log('STATUS: ', response.status());
        console.log('BODY: ', body);
        throw new Error('Token não retornado pela API');
    }
    
    return body.token;
}