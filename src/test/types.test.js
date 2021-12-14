import '@testing-library/jest-dom'
import {types} from '../redux/types/types'

describe('verificar types ', () => {
    test('comprobar objetos ', () => {

        expect(types).toEqual({
            login: "[User] Login",
            registro: "[User] Registro",
            logout: "[User] Logout",
            formcv1: "[formcv1] formcv1",
            formcv2: "[formcv2] formcv2",


        })

    })
})