import '@testing-library/jest-dom';
const logged = true;

describe('Pruebas de rutas', () => {
    test('Logged ', () => {
        expect(logged).toEqual(true);
    })

    test('logout', () => {
        expect(logged).toEqual(false);
    });
})



