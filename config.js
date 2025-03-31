export const config = {
    STG: {
        host: 'https://gorest.co.in/public/v2',
        token: '',
        username: 'Tenali Ramakrishna',
        gender: 'male',
        status: 'active'
    },
    PROD: {
        host: 'https://gorest.co.in/public/v2',
        token: '',
        username: 'Tenali Ramakrishna',
        gender: 'male',
        status: 'active'
    },
    BOOKS_DEV: {
        host: 'http://localhost:1010'
    },
    BOOKS_STG: {
        host: 'http://localhost:2020'
    },
    BOOKS_PRD: {
        host: 'http://localhost:3030'
    }
}

global.executionVariables = {}