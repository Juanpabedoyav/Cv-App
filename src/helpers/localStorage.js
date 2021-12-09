export const obtenerDatos = () => {
  const userStorage = localStorage.getItem("user");
  let user;
  if (userStorage === null) {
    return undefined;
  } else {
    user = userStorage
    // const user1 = JSON.stringify(user)
    // const user2 = JSON.parse(user1);
    // console.log(Object.create(user1))
    // console.log(typeof user1)
    // console.log(typeof user2);
    return JSON.parse(user)
  }

};

export const guardarDatos = (state) => {
  const userStorage = JSON.stringify(state);
  localStorage.setItem("user", userStorage);
};