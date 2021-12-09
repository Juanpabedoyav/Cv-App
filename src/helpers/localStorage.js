export const obtenerDatos = () => {
  const userStorage = localStorage.getItem("user");
  let user;
  if (userStorage === null) {
    return undefined;
  } else {
    user = userStorage;
    return JSON.parse(user);
  }
};

export const guardarDatos = (state) => {
  const userStorage = JSON.stringify(state);
  localStorage.setItem("user", userStorage);
};
