import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { registerAction } from "../redux/actions/registerAction";
import { updatePassword } from "../redux/actions/updateAction";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initState = {
  login: {
    id: "TESTING",
  },
};

let store = mockStore(initState);

describe("Pruebas CRUD Firebase", () => {
  beforeEach(() => (store = mockStore(initState)));

  test("Debe registrar un usuario", async () => {
    await store.dispatch(
      registerAction({
        name: "Santiago",
        phone: "3004499476",
        password: "123",
        image:
          "https://res.cloudinary.com/da6fz1omm/image/upload/v1639448025/Foto_2021_jy49m8.jpg",
      })
    );

    const actions = store.getActions();
  });

  test("Debe actualizar la contraseña", () => {
    updatePassword("2134196102", "1234");
  });
});
