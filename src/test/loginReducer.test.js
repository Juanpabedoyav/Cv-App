import "@testing-library/jest-dom";
import { loginReducer } from "../redux/reducers/loginReducer";
import { types } from "../redux/types/types";

describe("Pruebas en loginReducer ", () => {
  test("debe de realizar el login", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        name: "juan",
        phone: "3107437640",
        email: "junsesu3@hotmail.com",
        image:
          "https://res.cloudinary.com/dv08oqgvx/image/upload/v1638466378/wx5nvjktake1qgprm4da.jpg",
        logged: true,
      },
    };
    const state = loginReducer(initState, action);
    expect(state).toEqual({
      name: "juan",
      phone: "3107437640",
      email: "junsesu3@hotmail.com",
      image:
        "https://res.cloudinary.com/dv08oqgvx/image/upload/v1638466378/wx5nvjktake1qgprm4da.jpg",
      logged: true,
    });
  });
  test("Cerrar sesion - logout ", () => {
    const initState = {
      name: "juan",
      phone: "3107437640",
      email: "junsesu3@hotmail.com",
      image:
        "https://res.cloudinary.com/dv08oqgvx/image/upload/v1638466378/wx5nvjktake1qgprm4da.jpg",
      logged: false,
    };
  });
  test("State por default ", () => {
    const initState = {
      name: "juan",
      phone: "3107437640",
      email: "junsesu3@hotmail.com",
      image:
        "https://res.cloudinary.com/dv08oqgvx/image/upload/v1638466378/wx5nvjktake1qgprm4da.jpg",
      logged: false,
    };

    const action = {
      type: types.Hola,
    };

    const state = loginReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
