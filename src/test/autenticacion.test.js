import "@testing-library/jest-dom";
import { types } from "../redux/types/types";
import { loginReducer } from "../redux/reducers/loginReducer";
describe("pruebas de logue", () => {
  test("prueba login sincronica ", () => {
    const action = {
      type: types.login,
      payload: {
        logged: true,
        name: "Juan Pa",
        phone: "3012429588",
        email: "bedoyavascojuanpablo@gmail.com",
        image:
          "https://lh3.googleusercontent.com/ogw/ADea4I77N9MHLrODszIIaGoBizmzHJYLBqPgj9plKSJweQ=s32-c-mo",
      },
    };
    const state = loginReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      name: "Juan Pa",
      phone: "3012429588",
      email: "bedoyavascojuanpablo@gmail.com",
      image:
        "https://lh3.googleusercontent.com/ogw/ADea4I77N9MHLrODszIIaGoBizmzHJYLBqPgj9plKSJweQ=s32-c-mo",
    });
  });
  test("prueba logout ", () => {
    const action = {
      type: types.logout,
      payload: {
        logged: false,
      },
    };
    const state = loginReducer(
      {
        logged: true,
        name: "Juan Pa",
        phone: "3012429588",
        email: "bedoyavascojuanpablo@gmail.com",
        image:
          "https://lh3.googleusercontent.com/ogw/ADea4I77N9MHLrODszIIaGoBizmzHJYLBqPgj9plKSJweQ=s32-c-mo",
      },
      action
    );
    expect(state).toEqual({
      logged: false,
    });
  });
});
