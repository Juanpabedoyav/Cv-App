import '@testing-library/jest-dom';
import { logged } from '../base/routeTest';

describe('Pruebas de rutas', () => {
    test('Logged ', () => {
        expect(logged).toEqual({logged: true});
    })

    test('logout', () => {
        expect(logged).toEqual({logged: false});
    });
})



